# What is Active Record?

- Active Record is the interface that Rails gives you between the database and your application.
- It is the M in MVC - the model - which is the layer of the system responsible for representing business data and logic.

# What is Object Relational Mapping (ORM)?

- It is a technique that connects the rich objects of an application to tables in a relational database management system.
- Using ORM, the properties and relationships of the objects in an application can be easily stored and retrieved from a database without writing SQL statements directly and with less overall database access code.

## [Active Record as an ORM Framework](https://guides.rubyonrails.org/active_record_basics.html#active-record-as-an-orm-framework)

Active Record gives us several mechanisms, the most important being the ability to:

- Represent models and their data.
- Represent associations between these models.
- Represent inheritance hierarchies through related models.
- Validate models before they get persisted to the database.
- Perform database operations in an object-oriented fashion.

## [Naming Conventions](https://guides.rubyonrails.org/active_record_basics.html#naming-conventions)

- Rails will pluralize your class names to find the respective database table. So, for a class `Book`, you should have a database table called `books`.
- **Model Class** - Singular with the first letter of each word capitalized (e.g., `BookClub`).
- **Database Table** - Plural with underscores separating words (e.g., `book_clubs`).
- **Foreign keys** - `singularized_table_name_id` (e.g., `item_id`, `order_id`).
- **Primary keys** - By default, `id`.

# ActiveRecord::Persistence

## Class Methods

### [`create`](https://apidock.com/rails/ActiveRecord/Persistence/ClassMethods/create)

- Creates an object (or multiple objects) and saves it to the database, if validations pass.
- Returns the resulting object whether the object was saved successfully to the database or not.
- The attributes parameter can be either a Hash or an Array of Hashes.

### [`create!`](https://apidock.com/rails/v5.2.3/ActiveRecord/Persistence/ClassMethods/create%21)

- Same as `ActiveRecord::Persistence#create` except that it raises a `ActiveRecord::RecordInvalid` error if validations fails instead of returning the resulting object.

---

## Instance methods

### [`update`](https://apidock.com/rails/ActiveRecord/Persistence/update)

- Updates the attributes of the model from the passed-in hash and saves the record, all wrapped in a transaction.
- If the object is invalid, the saving will fail and false will be returned.

### [`update!`](https://apidock.com/rails/ActiveRecord/Persistence/update%21)

- Updates its receiver just like `update` but calls `save!` instead of `save`, so an exception is raised if the record is invalid and saving will fail.

### [`update_attributes`](https://apidock.com/rails/ActiveRecord/Persistence/update_attributes)

- Alias for `ActiveRecord::Persistence#update`

### [`update_attributes!`](https://apidock.com/rails/v5.2.3/ActiveRecord/Persistence/update_attributes%21)

- Alias for `ActiveRecord::Persistence#update!`

### [`update_attribute`](https://apidock.com/rails/ActiveRecord/Persistence/update_attribute)

- Updates a **single** attribute and saves the record.
- This is especially useful for **boolean flags** on existing records.
- Also note that
  - **Validation is skipped.**
  - **Callbacks are invoked.**
  - **`updated_at/updated_on` column is updated** if that column is available.
  - Updates all the attributes that are dirty in this object.
- This method raises an `ActiveRecord::ActiveRecordError` if the attribute is marked as readonly.

### [`update_all`](https://apidock.com/rails/ActiveRecord/Relation/update_all)

- Updates all records in the current relation with details given.
- This method constructs a single SQL UPDATE statement and sends it straight to the database. So,
  - It does not instantiate the involved models.
  - Validations are skipped.
  - Callbacks are skipped.
  - `updated_at/updated_on` are not updated.

### [`update_columns`](https://apidock.com/rails/ActiveRecord/Persistence/update_columns)

- Updates the attributes directly in the database issuing an UPDATE SQL statement and sets them in the receiver:

      user.update_columns(last_request_at: Time.current)

- This is the fastest way to update attributes because it goes straight to the database. But:
  - Validations are skipped.
  - Callbacks are skipped.
  - `updated_at/updated_on` are not updated.
- This method raises an `ActiveRecord::ActiveRecordError` when called on new objects, or when at least one of the attributes is marked as readonly.
