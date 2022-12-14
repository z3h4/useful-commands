# Rails

## Controller and Routing

### What Does a Controller Do?

- For most conventional RESTful applications, the controller will receive the request, fetch or save data from a model, and use a view to create HTML output.
- A controller can thus be thought of as a middleman between models and views. It makes the model data available to the view, so it can display that data to the user, and it saves or updates user data to the model.

### What is a strong parameter?

- With strong parameters, Action Controller parameters are forbidden to be used in Active Model mass assignments until they have been permitted. This means that you'll have to make a conscious decision about which attributes to permit for mass update.

- https://guides.rubyonrails.org/action_controller_overview.html#strong-parameters

### What is a Session?

- Your application has a session for each user in which you can store small amounts of data that will be persisted between requests. The session is only available in the controller and the view and can use one of several of different storage mechanisms.
- All session stores use a cookie to store a unique ID for each session.
- For most stores, this ID is used to look up the session data on the server, e.g. in a database table.
- Sessions enable the application to maintain user-specific state, while users interact with the application. For example, sessions allow users to authenticate once and remain signed in for future requests.
- Most applications need to keep track of state for users that interact with the application. This could be the contents of a shopping basket, or the user id of the currently logged in user. This kind of user-specific state can be stored in the session.

### Comparison between Cookie and Session

- See Key Differences between Session and Cookies section [here](https://www.javatpoint.com/session-vs-cookies)

### What is a flash?

- The flash is a special part of the session which is cleared with each request. This means that values stored there will only be available in the next request, which is useful for passing error messages, etc.

### What is a Cookie?

- Your application can store small amounts of data on the client - called cookies - that will be persisted across requests and even sessions. Rails provides easy access to cookies via the `cookies` method, which - much like the session - works like a hash.

### What are filters?

- Filters are methods that are run "before", "after" or "around" a controller action.

### What is Cross-site Request Forgery Protection?

- Cross-site request forgery is a type of attack in which a site tricks a user into making requests on another site, possibly adding, modifying, or deleting data on that site without the user's knowledge or permission.
- The first step to avoid this is to make sure all "destructive" actions (create, update, and destroy) can only be accessed with non-GET requests. If you're following RESTful conventions you're already doing this. However, a malicious site can still send a non-GET request to your site quite easily, and that's where the request forgery protection comes in. As the name says, it protects from forged requests.
- The way this is done is to add a non-guessable token which is only known to your server to each request. This way, if a request comes in without the proper token, it will be denied access.
- Rails adds this token to every form that's generated using the form helpers, so most of the time you don't have to worry about it. If you're writing a form manually or need to add the token for another reason, it's available through the method form_authenticity_token:
- https://guides.rubyonrails.org/action_controller_overview.html#request-forgery-protection

## Model

### What is Active Record?

- Active Record is the interface that Rails gives you between the database and your application.
- It is the M in MVC - the model - which is the layer of the system responsible for representing business data and logic.

### What is Object Relational Mapping (ORM)?

- It is a technique that connects the rich objects of an application to tables in a relational database management system.
- Using ORM, the properties and relationships of the objects in an application can be easily stored and retrieved from a database without writing SQL statements directly and with less overall database access code.

### Active Record as an ORM Framework

Active Record gives us several mechanisms, the most important being the ability to:

- Represent models and their data.
- Represent associations between these models.
- Represent inheritance hierarchies through related models.
- Validate models before they get persisted to the database.
- Perform database operations in an object-oriented fashion.

### Choosing Between `has_many :through` and `has_and_belongs_to_many`

- Rails offers two different ways to declare a many-to-many relationship between models. The first way is to use `has_and_belongs_to_many`, which allows you to make the association directly.
- The second way to declare a many-to-many relationship is to use `has_many :through`. This makes the association indirectly, through a join model.
- The simplest rule of thumb is that you should set up a `has_many :through` relationship if you need to work with the relationship model as an independent entity. If you don't need to do anything with the relationship model, it may be simpler to set up a `has_and_belongs_to_many` relationship.
- You should use `has_many :through` if you need validations, callbacks, or extra attributes on the join model.
- [Choosing Between `has_many :through` and `has_and_belongs_to_many`](https://guides.rubyonrails.org/association_basics.html#choosing-between-has-many-through-and-has-and-belongs-to-many)

### How would you batch process in Rails?

The `find_each` and `find_in_batches` methods are intended for use in the batch processing of a large number of records that wouldn't fit in memory all at once.

### Why do we need locking?

- Locking is helpful for **preventing race conditions** when updating records in the database and ensuring atomic updates.

### What is optimistic locking?

- Optimistic locking allows multiple users to access the same record for edits, and assumes a minimum of conflicts with the data.
- It does this by checking whether another process has made changes to a record since it was opened.
- If it's stale, the `ActiveRecord::StaleObjectError` exception will be raised on the update/destroy attempt.
- In order to use optimistic locking, the table needs to have a column called `lock_version` of type integer. Each time the record is updated, Active Record increments the `lock_version` column. If an update request is made with a lower value in the `lock_version` field than is currently in the `lock_version` column in the database, the update request will fail with an `ActiveRecord::StaleObjectError`.

### What is pessimistic locking?

- It prevents concurrent transactions from updating the same row. The second transaction waits for the first transaction to finish before it even reads the data.
- The great advantage here is that it is impossible to operate on stale data.
- The major disadvantage, though, is that it also blocks reading the data from a given row.

### What is Eager Loading Associations?

Eager loading is the mechanism for loading the associated records of the objects returned by `Model.find` using as few queries as possible.

### What is Lazy Loading Associations?

- Lazy loading allow you to defer querying associations until the moment they're needed. It allows being implicit about which associations need to be loaded by offloading this decision to the view.
- Although lazily-loaded associations give more flexibility in the view without having to update the controller, a good rule of thumb is to have the controller handle loading the data before passing it off to the view.
- Lazy loading from the view works for views that show one model object and it's associations (like the `ProductsController#show` in our first example) and can be useful when having multiple views that require different data from the same controller, for example.

### Difference between `count` and `size`?

`#count` will always do a `COUNT` query, while `#size` will skip the query if the responses are already loaded.

### What is Polymorphic Associations?

### What is a scope?

- Scoping allows you to specify commonly-used queries which can be referenced as method calls on the association objects or models.
- All scope bodies should return an `ActiveRecord::Relation` or `nil` to allow for further methods (such as other scopes) to be called on it.
- We can call a scope as if it were a class method or access it via the association object.

  ```Ruby
  Book.out_of_print
  author.books.out_of_print
  ```

- [Scope vs Class method](https://guides.rubyonrails.org/active_record_querying.html#using-conditionals)

### What is an Enum?

- An enum lets you define an Array of values for an attribute and refer to them by name. The actual value stored in the database is an integer that has been mapped to one of the values.

- Declaring an enum will:

  - Create scopes that can be used to find all objects that have or do not have one of the enum values
  - Create an instance method that can be used to determine if an object has a particular value for the enum
  - Create an instance method that can be used to change the enum value of an object

  for all possible values of an enum.

- https://guides.rubyonrails.org/active_record_querying.html#enums

# API

1. what is the most important thing for designing API

# Design Patterns

## Common antipatterns in RoR?

- The `N+1` queries problem is a common antipattern in Rails applications.

# SQL

1. What is a transaction?
2. What are the ACID properties of a transaction?
3. What is a trigger?
4. What is an event?
5. What is concurrency?
6. What are the concurrency problems?
7. What are transaction isolation levels?
8. What is deadlock?
