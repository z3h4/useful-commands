# Retrieving Objects from the Database

- Finder methods that return a collection, such as `where` and `group`, return an instance of `ActiveRecord::Relation`.
- Methods that find a single entity, such as `find` and `first`, return a single instance of the model.

## Retrieving a Single Object

### `find`

- Retrieve the object using its primary key.

      customer = Customer.find(10)

- We can pass an array of primary keys as argument. It will return an array containing all of the matching records for the supplied primary keys.
- The returned records are in the same order as the ids you provide.
- If the primary key is an integer, find by id coerces its arguments by using `to_i`.

      Person.find(1)          # returns the object for ID = 1
      Person.find("1")        # returns the object for ID = 1
      Person.find("31-sarah") # returns the object for ID = 31
      Person.find(1, 2, 6)    # returns an array for objects with IDs in (1, 2, 6)
      Person.find([7, 17])    # returns an array for objects with IDs in (7, 17)
      Person.find([1])        # returns an array for the object with ID = 1
      Person.where("administrator = 1").order("created_on DESC").find(1)

- The `find` method will raise an `ActiveRecord::RecordNotFound` exception unless a matching record is found for **all** of the supplied primary keys.

- https://guides.rubyonrails.org/active_record_querying.html#find
- https://api.rubyonrails.org/v6.1.4/classes/ActiveRecord/FinderMethods.html#method-i-find

### `take`

- Returns a record (or `N` records if a parameter is supplied) without any implied order.
- It returns `nil` if no record is found and no exception will be raised.
- You can pass in a numerical argument to the `take` method to return up to that number of results.

      Person.take # returns an object fetched by SELECT * FROM people LIMIT 1
      Person.take(5) # returns 5 objects fetched by SELECT * FROM people LIMIT 5
      Person.where(["name LIKE '%?'", name]).take

- The `take!` method behaves exactly like `take`, except that it will raise `ActiveRecord::RecordNotFound` if no matching record is found.

### `first`

- Find the first record (or first `N` records if a parameter is supplied).
- If no order is defined it will order by primary key.
- If the default scope contains an order method, `first` will return the first record according to this ordering.
- The `first` method returns `nil` if no matching record is found and no exception will be raised.

      default_scope { order(year_published: :desc) }

- You can pass in a numerical argument to the `first` method to return up to that number of results.

      Person.first # returns the first object fetched by SELECT * FROM people ORDER BY people.id LIMIT 1
      Person.where(["user_name = ?", user_name]).first
      Person.where(["user_name = :u", { u: user_name }]).first
      Person.order("created_on DESC").offset(5).first
      Person.first(3) # returns the first three objects fetched by SELECT * FROM people ORDER BY people.id LIMIT 3

- The `first!` method behaves exactly like first, except that it will raise `ActiveRecord::RecordNotFound` if no matching record is found.
- `first!` accepts no arguments.

### `last`

- The `last` method finds the last record ordered by primary key (default).
- The `last` method returns `nil` if no matching record is found and no exception will be raised.
- If your default scope contains an order method, `last` will return the last record according to this ordering.
- You can pass in a numerical argument to the `last` method to return up to that number of results.
- The `last!` method behaves exactly like `last`, except that it will raise `ActiveRecord::RecordNotFound` if no matching record is found.

### `find_by`

- The `find_by` method finds the first record matching some conditions.

      Post.find_by name: 'Spartacus', rating: 4
      Post.find_by "published_at < ?", 2.weeks.ago

- If no record is found, it returns `nil`.
- If no matching record is found it does not raise an exception.
- The `find_by!` method behaves exactly like `find_by`, except that it will raise `ActiveRecord::RecordNotFound` if no matching record is found.

## Retrieving Multiple Objects in Batches

- We often need to iterate over a large set of records, as when
  - we send a newsletter to a large set of customers,
  - or when we export data.
- Looping through a collection of records from the database (using the `Scoping::Named::ClassMethods.all` method, for example) is very inefficient since it will try to instantiate all the objects at once.

        # This may consume too much memory if the table is big.
        Customer.all.each do |customer|
          NewsMailer.weekly(customer).deliver_now
        end

- If we have a large number of records, the entire collection may exceed the amount of memory available.
- In that case, batch processing methods allow you to work with the records in batches, thereby greatly reducing memory consumption.
- Rails provides **two** methods that address this problem by dividing records into memory-friendly batches for processing.
  - The first method, `find_each`, retrieves a batch of records and then yields each record to the block individually as a model.
  - The second method, `find_in_batches`, retrieves a batch of records and then yields the entire batch to the block as an array of models.

### `find_each`

- The `find_each` method retrieves records in batches and then yields each one to the block.
- In the following example, find_each retrieves customers in batches of 1000 (default) and yields them to the block one by one:

      Customer.find_each do |customer|
        NewsMailer.weekly(customer).deliver_now
      end

- This process is repeated, fetching more batches as needed, until all of the records have been processed.
- `find_each` works on model classes, as seen above, and also on relations:

      Customer.where(weekly_subscriber: true).find_each do |customer|
        NewsMailer.weekly(customer).deliver_now
      end

- If you do not provide a block to `find_each`, it will return an Enumerator for chaining with other methods:

      Person.find_each.with_index do |person, index|
        person.award_trophy(index + 1)
      end

- The `find_each` method uses `find_in_batches` with a batch size of 1000 (or as specified by the `:batch_size` option).

### Options for `find_each`

#### `:batch_size`

- Specifies the size of the batch. Defaults to 1000.

      Customer.find_each(batch_size: 5000) do |customer|
        NewsMailer.weekly(customer).deliver_now
      end

#### `:start`

- Specifies the primary key value to start from, inclusive of the value.
- By default, records are fetched in ascending order of the primary key.
- For example, to send newsletters only to customers with the primary key starting from 2000:

        Customer.find_each(start: 2000) do |customer|
          NewsMailer.weekly(customer).deliver_now
        end

### `:finish`

- Specifies the primary key value to end at, inclusive of the value.
- This would be useful, for example, if you wanted to run a batch process using a subset of records based on :start and :finish.

        Customer.find_each(start: 2000, finish: 10000) do |customer|
          NewsMailer.weekly(customer).deliver_now
        end

- Another example would be if you wanted multiple workers handling the same processing queue. You can make worker 1 handle all the records between id 1 and 9999 and worker 2 handle from 10000 and beyond by setting the `:start` and `:finish` option on each worker.
- Limits are honored, and if present there is no requirement for the `batch size:` it can be less than, equal to, or greater than the limit.

### `:error_on_ignore`

- Overrides the application config to specify if an error should be raised when an order is present in the relation.
- If an order is present in the receiver the behaviour depends on the flag `config.active_record.error_on_ignored_order`. If true, `ArgumentError` is raised, otherwise the order is ignored and a warning issued, which is the default. This can be overridden with the option `:error_on_ignore`.

### `:order`

- Specifies the primary key order (can be `:asc` or `:desc`). Defaults to `:asc`.

- https://guides.rubyonrails.org/active_record_querying.html#find-each
- https://api.rubyonrails.org/v6.1.4/classes/ActiveRecord/Batches.html#method-i-find_each

### `find_in_batches`

- The `find_in_batches` method is similar to `find_each`, since both retrieve batches of records.
- The difference is that `find_in_batches` yields batches to the block as an array of models, instead of individually.
- The following example will yield to the supplied block an array of up to 1000 customers at a time, with the final block containing any remaining customers:

      # Give add_customers an array of 1000 customers at a time.
      Customer.find_in_batches do |customers|
        export.add_customers(customers)
      end

- `find_in_batches` also on relations:

      # Give add_customers an array of 1000 recently active customers at a time.
      Customer.recently_active.find_in_batches do |customers|
        export.add_customers(customers)
      end

### Options for `find_in_batches`

Same as `find_each`

- https://guides.rubyonrails.org/active_record_querying.html#find-in-batches
- https://api.rubyonrails.org/classes/ActiveRecord/Batches.html#method-i-find_in_batches

## Conditions

- The where method allows you to specify conditions to limit the records returned, representing the WHERE-part of the SQL statement.
- Conditions can either be specified as a string, array, or hash.
- It returns a new relation, which is the result of filtering the current relation according to the conditions in the arguments.

### Strings

- A single string, without additional arguments, is passed.

      Client.where("orders_count = '2'")
      Book.where("title = 'Introduction to Algorithms'")

- Note that building your own string from user input may expose your application to injection attacks if not done properly. For example, `Book.where("title LIKE '%#{params[:title]}%'")` is not safe.
- As an alternative, it is recommended to use one of the following methods.

### Array

- If `where` is called with multiple arguments, these are treated as if they were passed as the elements of a single array.

  - The following two queries are equivalent:

        Book.where("title = ?", params[:title])
        Book.where(["title = ?", params[:title]])

- If an array is passed, Active Record will take the first argument as the conditions string and any additional arguments will replace the question marks (?) in it.

      User.where("name = ? and email = ?", "Joe", "joe@example.com")

- Alternatively, you can use named placeholders in the template, and pass a hash as the second element of the array.

      User.where("name = :name and email = :email", { name: "Joe", email: "joe@example.com" })

### Hash Conditions

- `where` will also accept a hash condition, in which the keys are fields and the values are values to be searched for.
- Fields can be symbols or strings. Values can be single values, arrays, or ranges.
- Only equality, range, and subset checking are possible with Hash conditions.

      User.where({ name: "Joe", email: "joe@example.com" })

#### Range Conditions

This will use a `BETWEEN` SQL statement

      User.where({ created_at: (Time.now.midnight - 1.day)..Time.now.midnight })

#### Subset Conditions

This will use the `IN` SQL statement

      User.where({ name: ["Alice", "Bob"]})

### NOT Conditions

`NOT` SQL queries can be built by where.not:

      Customer.where.not(orders_count: [1,3,5])

### OR Conditions

OR conditions between two relations can be built by calling `or` on the first relation, and passing the second one as an argument.

      Customer.where(last_name: 'Smith').or(Customer.where(orders_count: [1,3,5]))

### Ordering

- Allows to retrieve records from the database in a specific order.

      Customer.order(:created_at)

      Customer.order(created_at: :desc)
      Customer.order(created_at: :asc)

Or ordering by multiple fields:

      Customer.order(orders_count: :asc, created_at: :desc)
      Customer.order(:orders_count, created_at: :desc)

- If you want to call order multiple times, subsequent orders will be appended to the first:

      Customer.order("orders_count ASC").order("created_at DESC")
      # SELECT * FROM customers ORDER BY orders_count ASC, created_at DESC

- In most database systems, on selecting fields with distinct from a result set using methods like `select`, `pluck` and `ids`; the order method will raise an `ActiveRecord::StatementInvalid` exception unless the field(s) used in order clause are included in the select list.

# Eager Loading Associations

- Eager loading is the mechanism for loading the associated records of the objects returned by `Model.find` using as few queries as possible.

### N + 1 queries problem

- Consider the following code, which finds 10 books and prints their authors' last_name:

      books = Book.limit(10)

      books.each do |book|
        puts book.author.last_name
      end

- This code looks fine at the first sight. But the problem lies within the total number of queries executed. The above code executes 1 (to find 10 books) + 10 (one per each book to load the author) = 11 queries in total.

### Solution to N + 1 queries problem

- Active Record lets you specify in advance all the associations that are going to be loaded. This is possible by specifying the `includes` method of the `Model.find` call. With includes, Active Record ensures that all of the specified associations are loaded using the minimum possible number of queries.
- Revisiting the above case, we could rewrite `Book.limit(10)` to eager load authors:

      books = Book.includes(:author).limit(10)

      books.each do |book|
        puts book.author.last_name
      end

## Eager Loading Multiple Associations

- Active Record lets you eager load any number of associations with a single `Model.find` call by using an array, hash, or a nested hash of array/hash with the includes method.
- Array of Multiple Associations

      Customer.includes(:orders, :reviews)

- Nested Associations Hash

      Customer.includes(orders: { books: [:supplier, :author] }).find(1)

  - This will find the customer with id 1 and eager load all of the associated orders for it, the books for all of the orders, and the author and supplier for each of the books.

## Specifying Conditions on Eager Loaded Associations

- Even though Active Record lets you specify conditions on the eager loaded associations just like `joins`, the recommended way is to use `joins` instead.
- However if you must do this, you may use `where` as you would normally.

      Author.includes(:books).where(books: { out_of_print: true })

- This would generate a query which contains a `LEFT OUTER JOIN` whereas the joins method would generate one using the `INNER JOIN` function instead.
- Using `where` like this will only work when you pass it a Hash. For SQL-fragments you need to use `references` to force joined tables:

      Author.includes(:books).where("books.out_of_print = true").references(:books)

- If, in the case of this includes query, there were no books for any authors, all the authors would still be loaded. By using joins (an INNER JOIN), the join conditions must match, otherwise no records will be returned.
- If an association is eager loaded as part of a join, any fields from a custom select clause will not be present on the loaded models. This is because it is ambiguous whether they should appear on the parent record, or the child.
