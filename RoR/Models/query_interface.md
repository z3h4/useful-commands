# Retrieving Objects from the Database

## Retrieving a Single Object

### `find`
- Retrieve the object using its primary key.

      irb> customer = Customer.find(10)
      => #<Customer id: 10, first_name: "Ryan">

- We can call the `find` method and pass in an array of primary keys. It will return an array containing all of the matching records for the supplied primary keys.

      irb> customers = Customer.find([1, 10]) # OR Customer.find(1, 10)
      => [#<Customer id: 1, first_name: "Lifo">, #<Customer id: 10, first_name: "Ryan">]

- The `find` method will raise an `ActiveRecord::RecordNotFound` exception unless a matching record is found for all of the supplied primary keys.

### `take`
- The `take` method retrieves a record without any implicit ordering.

      irb> customer = Customer.take
      => #<Customer id: 1, first_name: "Lifo">

- The `take` method returns `nil` if no record is found and no exception will be raised.
- You can pass in a numerical argument to the `take` method to return up to that number of results.

      irb> customers = Customer.take(2)
      => [#<Customer id: 1, first_name: "Lifo">, #<Customer id: 220, first_name: "Sara">]

- The `take!` method behaves exactly like `take`, except that it will raise `ActiveRecord::RecordNotFound` if no matching record is found.

### `first`
- The `first` method finds the first record ordered by primary key (default).
- The `first` method returns `nil` if no matching record is found and no exception will be raised.
- If your default scope contains an order method, `first` will return the first record according to this ordering.

      default_scope { order(year_published: :desc) }

- You can pass in a numerical argument to the `first` method to return up to that number of results. 

      irb> customers = Customer.first(3)
      => [#<Customer id: 1, first_name: "Lifo">, #<Customer id: 2, first_name: "Fifo">, #<Customer id: 3, first_name: "Filo">]

- The `first!` method behaves exactly like first, except that it will raise `ActiveRecord::RecordNotFound` if no matching record is found.

### `last`
- The `last` method finds the last record ordered by primary key (default).
- The `last` method returns `nil` if no matching record is found and no exception will be raised.
- If your default scope contains an order method, `last` will return the last record according to this ordering.
- You can pass in a numerical argument to the `last` method to return up to that number of results.
- The `last!` method behaves exactly like `last`, except that it will raise `ActiveRecord::RecordNotFound` if no matching record is found.

### `find_by`
- The `find_by` method finds the first record matching some conditions.
      
      irb> Customer.find_by first_name: 'Lifo'
      => #<Customer id: 1, first_name: "Lifo">

- The `find_by` method returns `nil` if no matching record is found and no exception will be raised.
- The `find_by!` method behaves exactly like `find_by`, except that it will raise `ActiveRecord::RecordNotFound` if no matching record is found.
