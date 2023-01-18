# Ruby

## Class

### What is a class?

- A class is a blueprint or template for creating objects.
  - It defines how an object of that class should look like.
- Classes hold data, and methods that interact with that data, and are used to instantiate objects.
- When defining a class, we typically focus on two things: state and behaviors.
  - State refers to the data associated to an individual object (which are tracked by instance variables).
  - Behaviors are what objects are capable of doing. We define these behaviors as **instance methods** in a class.
- All objects of the same class have the same behaviors, though they contain different states.

### What is an object?

- An object is an instance of a class.

### What is the difference between a class and an object?

A class is a blueprint or template for creating objects. An object is an instance of a class.

### Instance variable

- When defining a class, we typically focus on two things: state and behaviors.
  - State refers to the data associated to an individual object.
- Instance variables are responsible for keeping track of information about the state of an object.
- Every object's state is distinct, and instance variables are how we keep track.

### What are the problems of procedural code? How does object-oriented programming help solve these problems?

- Big classes with several unrelated methods focus on different concerns and responsibilities. These methods often have several parameters. You often see the same group of parameters repeated across these methods. All you see is procedures calling each other passing arguments around.
- By applying object-oriented programming techniques, we extract these repetitive parameters and declare them as fields in our classes. Our classes will then encapsulate both the data and the operations on the data (methods). As a result, our methods will have fewer parameters and our code will be cleaner and more reusable.

### What is encapsulation?

Encapsulation is the first principle of object-oriented programming. It suggests that we should bundle the data and operations on the data inside a single unit (class).

### Why should we declare fields as private?

How we store data in an object is considered an implementation detail. We may change how we store the data internally. Plus, we don’t want our objects to go into a bad state (hold bad data). That’s why we should declare fields as private and provide getters and/or setters only if required. These setters can ensure our objects don’t go into a bad state by validating the values that are passed to them.

### What is abstraction?

- Abstraction is the second principle of object-oriented programming.
- It suggests that we should reduce complexity by hiding the unnecessary implementation details.
- Metaphor: the implementation details of a remote control is hidden from us. We only work with its public interface.

### What is coupling?

Coupling represents the level of dependency between software entities (eg classes). The more our classes are dependent on each other, the harder it is to change them. Changing one class may result in several cascading and breaking changes.

### How does the abstraction principle help reduce coupling?

By hiding the implementation details, we prevent other classes from getting affected when we change these details. For example, if the logic board and transistors inside a remote control change from one model to another, we’re not affected. We still use the same interface to work with our TV. Also, reducing these details and exposing fewer methods makes our classes easier to use. For example, remote controls with fewer buttons are easier to use.

### What are constructors?

Constructors are called when we instantiate our class. We use them to initialize our objects. Initialization means putting an object into an early or initial state (e.g. giving it initial values).

### What is method overloading?

Method overloading means declaring a method with the same name but with different signatures. The number, type and order of its parameters will be different.

### What is Method Override?

- Method overriding means changing the implementation of an inherited method in a subclass.

### What classes do we need in our application?

- That depends on the concerns or responsibilities your application deals with.
- Make sure each class has a single responsibility.

### Inheritance

- We use inheritance to reuse code.
- We define all the common behavior in a single class and then have other classes inherit these behaviors from this class.
- Inheritance represents and is a relationship.
- Inheritence is for specialization, it's not for sharing code. (Sandy Metz)

### Benefits of Inheritance

With inheritance we can reuse code and achieve polymorphic behavior.

### Polymorphism

- Poly means many and morph means form. So, Polymorphism means many forms.
- It’s basically a mechanism that allows an object to take many forms and behave differently.
- This helps us build extensible applications.

### What is a module?

- A module is a collection of methods and constants.
- In Ruby modules provide two great benefits:
  - we can create namespaces in our code to prevent name clashes.
  - we can use them as mixins to share code across the application.
- Modules are great places to have services, concerns, constants and any other code that, by having the same responsibility they should stay together.
- Create a module in `lib/modules` directory.
- A module can provide two kinds of methods:
  1. Module methods
     - We can use it without having to include (or extend) the module in any other object. This is very common when we are creating service objects.
  2. Instance methods
     - To be able to use instance methods, we need to include the module to a class.

### Differences between a module and a plain Ruby class

- We can't instantiate modules, so no objects can be created from it.
- We can't inherit from modules, so we use them as mixins instead.
- Modules are standalone code, so there's no inheritance hierarchy of modules.

### What’s a Mixin?

- A mixin can basically be thought of as a set of code that can be added to one or more classes to add additional capabilities without using inheritance.
- In Ruby, a mixin is code wrapped up in a module that a class can include or extend

### Access control in Ruby

- A Ruby method can be:
  - private
  - public (default)
  - protected
- All methods, no matter the access control, can be accessed within the class.
- `Public` methods enforce no access control -- they can be called in any scope.
- `Protected` methods are only accessible to other objects of the same class.
- `Private` methods are only accessible within the context of the current object.

### Private vs Protected Methods

That’s the difference, the fact that `protected` keeps the method `private`, but it also allows you to call that method on an object.

### There are four ways to invoke a method in ruby. Can you give me at least two?

- https://gist.github.com/ryansobol/5252653#there-are-four-ways-to-invoke-a-method-in-ruby--can-you-give-me-at-least-two

### What does self mean?

- Self is a Ruby keyword that gives you access to the current object.
- This “current object” depends on the context. The context is where your code is at any given moment.
- So if you're in an instance, self refers to the instance. If you're in a class, self refers to that class.

### Other Questions

- Explain this ruby idiom: a ||= b
- What is a Proc?
- https://gist.github.com/ryansobol/5252653
- https://www.adaface.com/questions/ruby

### What is the use of load and required?

Load and need are both used in Ruby to load available code into the current code. It is recommended to use 'load' when the code must be loaded every time it is altered or when someone visits the URL. It is recommended to use 'require' in the case of autoload.

## Blocks, Procs & Lambdas

### Blocks

- Ruby blocks are little anonymous functions that can be passed into methods.
- Blocks are used for passing blocks of code to methods, and procs and lambda’s allow storing blocks of code in variables.
- A Ruby block is useful because it allows you to save a bit of logic (code) & use it later.

### Ruby `yield` Keyword

Yield is a Ruby keyword that calls a block when you use it.

### What are the differences between Procs and Lambdas?

- Procs don't care about the correct number of arguments, while lambdas will throw an exception.
- `return` and `break` behave differently in procs and lambdas. Lambdas will not interrupt the flow, even if `return` or `break` is encountered.
  - Procs return from the current method, while lambdas return from the lambda itself.

# Rails

### What is Ruby on Rails?

- Ruby on Rails (RoR) is a server-side, open-source web application framework.
- Built using the Ruby programming language, it’s a collection of code libraries that offers an efficient way to write codes.
- It uses model-view-controller (MVC) pattern.
- RoR provides a pre-made solution to help developers save time on tedious and repetitive tasks. Essentially, you don’t have to write each line of code all over again.

### Key principles emphasized in Ruby on Rails

- Don’t Repeat Yourself
- Convention over Configuration

### What are the features of Rails?

Here are some Ruby on Rails features that make it stand out from the IT crowd:

- **Convention over configuration.** It helps to create the corresponding advanced components by automatically sensing simple conventional elements.
- **Automated Testing.** RoR runs its own set of tests on the code you write. You can save time and effort in quality assurance.
- **Localization.** The localization feature helps you integrate your pre-designed code into the RoR framework for a bigger project.
- **Scaffolding.** This feature allows the programmer to define how the application database should function. After that, the framework automatically generates the required code according to it. The scaffolding technique creates interfaces automatically.
- **Libraries.** RoR has a lot of vast libraries to equip a developer with all the necessary tools to produce high-quality product AJAX library, Database access library, and Common tasks library are some of the few that RoR comprises in its collection.

### Pros and cons of RoR

- https://fullscale.io/blog/ruby-on-rails-pros-and-cons/

### Pros and Cons of ActiveRecord

- https://www.geekyhacker.com/2019/05/25/my-thoughts-on-active-record-pattern/
- https://karoldabrowski.com/blog/active-record-pattern-or-anti-pattern-overview/

## MVC

- The idea is to have separate components that each do their job:

  - The Model handles data and business logic.
  - The View is for the presentation of the data and the user interface.
  - The Controller ties the two together by getting data from the Model and showing the View to the user.

## Routing

### What is the purpose of the Rails router?

- The Rails router recognizes URLs and dispatches them to a controller's action, or to a Rack application.
- It can also generate paths and URLs, avoiding the need to hardcode strings in your views.

### `_path` vs `_url`

- `_path` returns the url relative to your domain.
- `_url` returns an absolute path, including protocol and server name.
- For instance, `root_path` returns `/` while `root_url` returns http://mydomain.com/.
- You should always use `_url` for redirects and `_path` for hyperlinks unless you have a good reason not to do so.

### Shallow Nesting

- Avoid deep nesting by generating the **collection actions** scoped under the parent, but not nest the **member actions**.

  ```Ruby
  resources :articles do
    resources :comments, only: [:index, :new, :create]
  end
  resources :comments, only: [:show, :edit, :update, :destroy]
  ```

  shorthand syntax of the above is

  ```Ruby
  resources :articles do
    resources :comments, shallow: true
  end
  ```

- https://guides.rubyonrails.org/routing.html#shallow-nesting

### What are Routing Concerns?

- Using routing concerns we can declare common routes and use them inside other resources and routes.
- These concerns can be used in resources to **avoid code duplication** and **share behavior across routes**:

## Controller

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
- **Sessions enable the application to maintain user-specific state, while users interact with the application. For example, sessions allow users to authenticate once and remain signed in for future requests.**
- **Most applications need to keep track of state for users that interact with the application. This could be the contents of a shopping basket, or the user id of the currently logged in user. This kind of user-specific state can be stored in the session.**
- Sessions are built using cookies.

#### Sessions best practices

- Prepare for the session to go away at any time.
- Store references to objects, not objects themselves (store object ids in a session).
- Use sessions with intent.
  - Only use a session when it makes a lot of sense.

#### Handling session problems

- Need more data?: Serialize it/store a pointer.
- Tampering?: Add encryption
- Cross-site scripting?: Add HTTPOnly
- Snooping? (Session Hijacking): Force SSL, Add secure

### Comparison between Cookie and Session

- See Key Differences between Session and Cookies section [here](https://www.javatpoint.com/session-vs-cookies)

### What is a flash?

- The flash is a special part of the session which is cleared with each request. This means that values stored there will only be available in the next request, which is useful for passing error messages, etc.

### What is a Cookie?

- Your application can store small amounts of data on the client - called cookies - that will be persisted across requests and even sessions. Rails provides easy access to cookies via the `cookies` method, which - much like the session - works like a hash.
- Cookies are a pretty reliable way to keep track of users without having to keep track of params.

### What are filters?

- Filters are methods that are run "before", "after" or "around" a controller action.

### What is Cross-site Request Forgery Protection?

- Cross-site request forgery is a type of attack in which a site tricks a user into making requests on another site, possibly adding, modifying, or deleting data on that site without the user's knowledge or permission.
- The first step to avoid this is to make sure all "destructive" actions (create, update, and destroy) can only be accessed with non-GET requests. If you're following RESTful conventions you're already doing this. However, a malicious site can still send a non-GET request to your site quite easily, and that's where the request forgery protection comes in. As the name says, it protects from forged requests.
- The way this is done is to add a non-guessable token which is only known to your server to each request. This way, if a request comes in without the proper token, it will be denied access.
- Rails adds this token to every form that's generated using the form helpers, so most of the time you don't have to worry about it. If you're writing a form manually or need to add the token for another reason, it's available through the method form_authenticity_token:
- https://guides.rubyonrails.org/action_controller_overview.html#request-forgery-protection

### What is Cross-site scripting?

- Cross-site scripting can occur anywhere a web application uses input from a user within the output it generates without validating or encoding it.
- An attacker can use XSS to send a malicious script to an unsuspecting user. The end user’s browser has no way to know that the script should not be trusted, and will execute the script. Because it thinks the script came from a trusted source, the malicious script can access any cookies, session tokens, or other sensitive information retained by the browser and used with that site. These scripts can even rewrite the content of the HTML page.
- Don't use `raw` and `html_safe` to sanitize your output in the view. Instead use the `sanitize` method.
  - Use `sanitize` with `link_to` and anytime we render markdown or HTML from users.
- https://gorails.com/episodes/protecting-from-xss-with-sanitize?autoplay=1

### Cross-origin Resource Sharing

- When we are on a real domain on the browser, our domains can not talk to each other by default.
- Cross-origin Resource Sharing (CORS) allows your website to talk to other websites.

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

### What are callbacks?

- Callbacks are methods that get called at certain moments of an object's life cycle such as when an Active Record object is created, saved, updated, deleted, validated, or loaded from the database.

## Migration

### What is a migration?

- Migrations are a feature of Active Record that allows you to evolve your database schema over time. Rather than write schema modifications in pure SQL, migrations allow you to use a Ruby DSL to describe changes to your tables.
- Migrations are a convenient way to **alter your database schema** over time in a consistent way.
- They use a Ruby DSL so that you don't have to write SQL by hand, allowing your schema and changes to be **database independent**.
- You can think of each migration as being a new 'version' of the database.
- Active Record knows how to update your schema along this timeline, bringing it from whatever point it is in the history to the latest version.

### What is the purpose of `schema.rb` file?

- Rails generates `db/schema.rb` which attempts to capture the current state of your database schema.
- It tends to be faster and less error prone to create a new instance of your application's database by loading the schema file via `bin/rails db:schema:load` than it is to replay the entire migration history.
- Schema files are also useful if you want a quick look at what attributes an Active Record object has.

### What does the `execute` method do?

The execute method can be used to execute arbitrary SQL.

## Performance

### What makes your Rails application slow?

While there can be many reasons behind an application’s slowness, database queries usually play the biggest role in an application’s performance footprint. Loading too much data into memory, N+1 queries, lack of cached values, and the lack of proper databases indexes are the biggest culprits that can cause slow requests.

- https://semaphoreci.com/blog/2017/05/09/faster-rails-is-your-database-properly-indexed.html

# Views

### Difference between `render` and `redirect_to`

`render` tells Rails which view (or other asset) to use in constructing a response. The `redirect_to` method tells the browser to send a new request for a different URL.

# Security

### What is Cross-site request forgery

- Cross-site request forgery is a type of attack in which **a site tricks a user into making requests on another site**, possibly adding, modifying, or deleting data on that site without the user's knowledge or permission.
- The first step to avoid this is to make sure all "destructive" actions (create, update, and destroy) can only be accessed with non-GET requests.
- However, a malicious site can still send a non-GET request to your site quite easily, and that's where the request forgery protection comes in. As the name says, it protects from forged requests. The way this is done is to **add a non-guessable token** which is only known to your server to each request. This way, if a request comes in without the proper token, it will be denied access.

### Injection

- Injection is a class of attacks that introduce malicious code or parameters into a web application in order to run it within its security context. Prominent examples of injection are cross-site scripting (XSS) and SQL injection.

#### SQL Injection

- SQL injection attacks aim at influencing database queries by manipulating web application parameters.
- A popular goal of SQL injection attacks is to bypass authorization.
- Another goal is to carry out data manipulation or reading arbitrary data.

#### Cross-Site Scripting (XSS)

- This malicious attack injects client-side executable code.
- XSS attacks work like this: An attacker injects some code, the web application saves it and displays it on a page, later presented to a victim.
- XSS can steal the cookie, hijack the session, redirect the victim to a fake website, display advertisements for the benefit of the attacker, change elements on the website to get confidential information or install malicious software through security holes in the web browser.
- It is very important to filter malicious input and escape the output of the web application.
  - Use escapeHTML() (or its alias h()) method to replace the HTML input characters
- Different types of XSS attacks and countermeasurements:
  - HTML/JavaScript Injection: Escape user input
  - Cookie Theft: Add the **httpOnly** flag to cookies
  - Encoding injection: Use `sanitize()` method

# Active Job

### What is Active Job?

- Active Job is a framework for declaring jobs and making them run on a variety of queuing backends.
- These jobs can be everything from regularly scheduled clean-ups, to billing charges, to mailings. **Anything that can be chopped up into small units of work and run in parallel**, really.

# API

1. what is the most important thing for designing API?

# Testing

- How to handle flaky tests?

# Design Patterns

### What is a design pattern?

- Design patterns are elegant solutions to repeating problems in software design.
- A design pattern shows you how you should structure your classes and how these classes should talk to each other.

### What Is a Design Anti-Pattern?

- A software anti-pattern is a pattern that may be commonly used but is considered ineffective or counterproductive.
- Typical examples of anti-patterns are God objects that contain many functions and dependencies, which could be extracted and separated into different objects.

## Common antipatterns in RoR?

- The `N+1` queries problem is a common antipattern in Rails applications.

### Model

- As an application grows and business logic gets expanded, folks tend to overcrowd their models, which can lead to an anti-pattern called the Fat Model.

  - It breaks the Single Responsibility Principle (SRP).
  - Solution:
    - Splitting the code inside the model into smaller modules.
    - But by doing that, you are simply moving code from one place to another. Nonetheless, moving code around allows you to organize code better and avoid obese models with reduced readability.
    - Using a separate class (Decorator) is better. Because
      - It looks a bit clearer than using a module or a concern.
      - Also, it it better to use composition over inheritance.

- Best Practices:
  - Use decorators to add additional behavior.
  - Use scopes to make the code readable and easier to change.

### View

- If the view contains the domain logic. This is a no-no since it breaks the MVC pattern, for a start.
- Another case could be using too much embedded Ruby in your views and partials.

### Controller

- Most common is Fat Controller anti-pattern.
  - Usually, this happens when the business logic is put inside the Controller, but its actual place is in the model or elsewhere.
  - Some logic can also be moved to service objects.

## Null Object Pattern

- Instead of returning null, or some odd value, return a **Special Case** that has the same interface as what the caller expects.
- We can use it to simplify some part of our code by reducing if-statements and introducing interface that is identical in both situations, when something is missing and when something is present.

## Value Object Pattern

- Value objects are richer domain objects that typically replace the use of a primitive.
- One of the most important properties of a value object is - their notion of equality isn’t based on identity, instead two value objects are equal if all their fields are equal.
- **When should we use it**:

  - **A data clump**. two or more values that always belong together. These are often pairs values like x and y or start and end date. If you see the same values being passed through multiple methods together, it’s usually a good indicator.
  - A piece of data which has functionality. Temperature is a good example: Although it’s a single value, it might also have methods like below_freezing?. If you see a group of methods that are all operating on the same value, it’s a good indicator.

- Advantage: https://www.paweldabrowski.com/articles/rails-value-object-design-pattern

# SQL

1. What is a transaction?
2. What are the ACID properties of a transaction?
3. What is a trigger?
4. What is an event?
5. What is concurrency?
6. What are the concurrency problems?
7. What are transaction isolation levels?
8. What is deadlock?
9. What is an index?
   - See videos of Mosh

# RoR Interview Questions

- [11 Ruby on Rails Interview Questions and Answers to Know](https://arc.dev/developer-blog/ruby-on-rails-interview-questions/)
- [30 Common CI/CD Interview Questions (with Answers)](https://semaphoreci.com/blog/common-cicd-interview-questions)
- [Technical Interview Questions](https://mod4.turing.edu/lessons/technical-interview-questions.html)
- [Ruby on Rails Interview Questions](https://www.interviewbit.com/ruby-on-rails-interview-questions/#how-will-you-obtain-the-following)
- [Interview Questions](https://anti-pattern.com/interview-questions)

# Questions to Ask Your Future Software Employer

- https://semaphoreci.com/blog/questions-software-employer

# Syatem Design Interview

- [System Design Interview Format - 6 Steps to passing](https://www.kcoleman.me/2020/06/14/system-design-interview-format.html)
- [Scalability for Dummies](https://www.lecloud.net/tagged/scalability)
- [My System Design Template](https://leetcode.com/discuss/career/229177/My-System-Design-Template)
- [8 most-asked system design interview questions (+ answers)](https://igotanoffer.com/blogs/tech/system-design-interviews)
- [System Design Interview Questions](https://www.interviewbit.com/system-design-interview-questions/#design-global-chat-service-whatsapp-or-facebook-messenger)
- [25 Software Design Interview Questions to Crack Any Programming and Technical Interviews](https://medium.com/javarevisited/25-software-design-interview-questions-to-crack-any-programming-and-technical-interviews-4b8237942db0)
- [Gaurav Sen](https://www.youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX)
- [The System Design Primer](https://github.com/donnemartin/system-design-primer)

### CAP theorem

- [CAP Theorem: Revisited](https://robertgreiner.com/cap-theorem-revisited/)
