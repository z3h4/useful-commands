# Ruby

## What is OOP?

OOP is basically a style of programming where we see a program as a collection of objects that talk to each other to perform some functionality.

- It helps make code more modular, reusable, and easier to maintain.

- [Mosh Youtube Video](https://www.youtube.com/watch?v=pTB0EiLXUC8)

## Difference Between a Function and a Method

If a function is part of an object, in OOP terms we refer to that function as a method.

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

A class is a blueprint or template for creating objects. It defines the attributes (data) and methods (behavior) that its objects will have. An object is a specific instance of a class.

### Instance variable

- When defining a class, we typically focus on two things: state and behaviors.
  - State refers to the data associated to an individual object.
- Instance variables are responsible for keeping track of information about the state of an object.
- Every object's state is distinct, and instance variables are how we keep track.

### What are the problems of procedural code? How does object-oriented programming help solve these problems?

- Big classes with several unrelated methods focus on different concerns and responsibilities. These methods often have several parameters. You often see the same group of parameters repeated across these methods. All you see is procedures calling each other passing arguments around.
- By applying object-oriented programming techniques, we extract these repetitive parameters and declare them as fields in our classes. Our classes will then encapsulate both the data and the operations on the data (methods). As a result, our methods will have fewer parameters and our code will be cleaner and more reusable.

### What is encapsulation?

- Encapsulation is the first principle of object-oriented programming.
- It suggests that we should bundle the data (state) and operations on the data (behaviour) inside a single unit (object).
- The goal is to protect the internal state of an object from unintended modification.
- [Difference between Encapsulation and Abstraction](https://chatgpt.com/s/t_6910514d8a7c819181dd3dceb6eff43f)
- [LaunchSchool](https://launchschool.com/books/oo_ruby/read/the_object_model#whyobjectorientedprogramming)

### Why should we declare fields as private?

- How we store data in an object is considered an implementation detail. We may change how we store the data internally.
- Plus, we don’t want our objects to go into a bad state (hold bad data). That’s why we should declare fields as private and provide getters and/or setters only if required.
  - These setters can ensure our objects don’t go into a bad state by validating the values that are passed to them.

### What is abstraction?

- Abstraction is the second principle of object-oriented programming.
- It suggests that we should reduce complexity by hiding the unnecessary implementation details.
- The goal is to reduce complexity and simplify the use of an object by providing a simple interface.
- Abstraction lets us focus on what an object does, not how it does it.
  - Metaphor: the implementation details of a remote control is hidden from us. We only work with its public interface.

### What is coupling?

Coupling represents the level of dependency between software entities (eg classes). The more our classes are dependent on each other, the harder it is to change them. Changing one class may result in several cascading and breaking changes.

### How does the abstraction principle help reduce coupling?

By hiding the implementation details, we prevent other classes from getting affected when we change these details. For example, if the logic board and transistors inside a remote control change from one model to another, we’re not affected. We still use the same interface to work with our TV. Also, reducing these details and exposing fewer methods makes our classes easier to use. For example, remote controls with fewer buttons are easier to use.

### What are constructors?

- A constructor is a special method in a class that is automatically called when we create a new object.
- Its main job is to initialize the object’s state — i.e., set up its instance variables.
  - Initialization means putting an object into an early or initial state (e.g. giving it initial values).
- So, constructors make sure each new object starts out properly configured and ready to use.
- In Ruby, the constructor method is named `initialize`. It’s automatically called when we use `.new` on a class.

### What is method overloading?

Method overloading means declaring a method with the same name but with different signatures. The number, type and order of its parameters will be different.

### What is Method Override?

- Method overriding means changing the implementation of an inherited method in a subclass.

### What classes do we need in our application?

- That depends on the concerns or responsibilities your application deals with.
- Make sure each class has a single responsibility.

### Inheritance

- Inheritance allows a class (child or subclass) to inherit attributes and methods from another class (parent or superclass) — enabling code reuse and hierarchical relationships.
- We use inheritance to reuse code.
- We define all the common behavior in a single class and then have other classes inherit these behaviors from this class.
- Inheritance represents and is a relationship.
- Inheritence is for specialization, it's not for sharing code. (Sandy Metz)
- [Inheritance](https://chatgpt.com/s/t_691082be24fc819180576b1354766b8d)

### Benefits of Inheritance

With inheritance we can reuse code and achieve polymorphic behavior.

### Polymorphism

- Poly means many and morph means form. So, Polymorphism means many forms.
  - It’s basically a mechanism that allows an object to take many forms and behave differently.
- Polymorphism allows different objects to respond to the same method call in different ways.
- It lets you use a common interface for multiple types of objects — improving flexibility and extensibility.
- [Polymorphism](https://chatgpt.com/s/t_6910611d96188191b55595c4f4ff0f1e)

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
     - To be able to use instance methods, we need to include/extend the module to a class.

### Differences between a module and a plain Ruby class

- We can't instantiate modules, so no objects can be created from it.
- We can't inherit from modules, so we use them as mixins instead.
- Modules are standalone code, so there's no inheritance hierarchy of modules.

### What’s a Mixin?

- A mixin can basically be thought of as a set of code that can be added to one or more classes to add additional capabilities without using inheritance.
- In Ruby, a mixin is code wrapped up in a module that a class can include or extend.

### Difference between `include` and `extend`

- When a class include’s a module, it adds the instance methods of the module as instance methods on the class.
- When a class extend’s a module, it adds the instance methods of the module as class methods on the class.
- If it makes sense for an instance of a class to implement the behaviour, then you would `include` the module. Then each instance has access to the module methods.
- If the behaviour is not tied to a particular instance, then you can `extend` the module. Then the methods will be available as class methods.

### What is `self.included`?

- If we use `include`, it adds the instance methods of the module as instance methods on the class. And, if we use `extend`, it adds the instance methods of the module as class methods on the class.
- If we want some methods to be instance methods and others to be class methods when the module is included, we can use `self.included`.

### Access control in Ruby

- A Ruby method can be:
  - private
  - public (default)
  - protected
- All methods, no matter the access control, can be accessed within the class.
- `Public` methods enforce no access control -- they can be called in any scope.
- `Protected` methods are only accessible to other objects of the same class.
  - It allows object-to-object comparison within the same class while keeping the method hidden from the outside world.
- `Private` methods are only accessible within the context of the current object.
- [Access control in Ruby](https://chatgpt.com/s/t_691164f8a01081919a3a2aad807741e6)

### Private vs Protected Methods

- Protected methods are similar to private methods.
- The main distinction is protected methods can be called on other instances of the same class or subclass.
- Common use case would be while comparing or interacting with other instances of the same class.

### There are four ways to invoke a method in ruby. Can you give me at least two?

- https://gist.github.com/ryansobol/5252653#there-are-four-ways-to-invoke-a-method-in-ruby--can-you-give-me-at-least-two

### What does `self` mean?

- `self` is a Ruby keyword that gives you access to the current object.
- This “current object” depends on the context. The context is where your code is at any given moment.
- So if you're in an instance, `self` refers to the instance. If you're in a class, `self` refers to that class.

### Other Questions

- Explain this ruby idiom: `a ||= b`
  - [`a ||= b`](https://chatgpt.com/s/t_691169e08b0c819199fc404aa99865ed)
- https://gist.github.com/ryansobol/5252653
- https://www.adaface.com/questions/ruby

### What is the use of load and required?

Load and need are both used in Ruby to load available code into the current code. It is recommended to use 'load' when the code must be loaded every time it is altered or when someone visits the URL. It is recommended to use 'require' in the case of autoload.

## Blocks, Procs & Lambdas

- Blocks are used for passing blocks of code to methods, and procs and lambda’s allow storing blocks of code in variables.
- [Blocks, Procs & Lambdas](https://chatgpt.com/s/t_6911ba5dc524819186b5f8e69e59e0bb)

### Blocks

- In Ruby, blocks are snippets of code that can be created to be executed later.
- It is useful for passing a block of code to a method. Many of the Ruby methods that implements enumerable module requires a block to be passed.
- Methods can accept blocks implicitly and explicitly.
- A method can accept a block implicitly and use the `block_given?` and `yield` keywords to find and execute the block in the current scope.
- A method can also accept a block explicitly by adding it as an argument using an ampersand parameter (usually called `&block`) and execute the block using `call` method directly.
- [implicit vs. explicit block passing](https://chatgpt.com/s/t_6911b70aaae481918c3467f147b5fd94)

### Procs

- With procs we can store a block of code in a variable then reuse many times throughout a program.
- Since a proc can be stored in a variable, it can also be passed to a method just like a normal argument.

### Lambdas

- Lambdas are essentially procs with some distinguishing factors.
- They are more like "regular" methods in two ways:
  - they enforce arity (the number of arguments passed) when they're called and
  - they use "normal" returns.

### Ruby `yield` Keyword

- `yield` is a Ruby keyword that calls a block when you use it.
- `yield` is a Ruby keyword that is used to transfer control from a method to a block and then back to the method again once the block is executed.

### What are the differences between Procs and Lambdas?

- Procs don't care about the correct number of arguments, while lambdas will throw an exception.
- `return` and `break` behave differently in procs and lambdas. Lambdas will not interrupt the flow, even if `return` or `break` is encountered.
  - Procs return from the current method, while lambdas return from the lambda itself.
- There is no dedicated Lambda class. A `lambda` is just a special `Proc` object. If you take a look at the instance methods from `Proc`, you will notice there is a `lambda?` method.

### How does Ruby’s garbage collection work?

- Ruby Garbage Collection (GC) is the process by which Ruby automatically manages memory.
- When your Ruby code creates objects (strings, arrays, hashes, etc.), they occupy space in memory. If an object is no longer reachable (no variable points to it anymore), it becomes garbage — and Ruby’s GC can safely reclaim that memory.
- So, it prevents memory leaks and improves performance.
- [Ruby Garbage Collection](https://chatgpt.com/s/t_68f40691bd18819198fbb40dde647b0d)

### What is metaprogramming in Ruby?

- Metaprogramming is writing code that manipulates classes, methods, or objects at runtime.
- It allows dynamic method creation, reflection, and DSL building using features like `define_method`, `method_missing`, `send`, and `class_eval`.
- It’s powerful but should be used carefully for readability and maintainability.
- [Metaprogramming in Ruby](https://chatgpt.com/s/t_68f4195b46b08191ae378fb88bb00899)

### What are frozen objects in Ruby, and why are they useful?

- A frozen object in Ruby is an immutable object that cannot be modified after creation.
- It’s useful for improving performance, ensuring thread safety, and preventing accidental mutation — especially for constants and string literals.
- [frozen objects](https://chatgpt.com/s/t_6911c09e708881919f007768617a725c)
- [If I have `#frozen_string_literal: true` at top of the file, do I have to use freeze here: `arr = ["a", "b"].freeze`](https://chatgpt.com/s/t_6911c05058588191a0c24efb46727374)

# Rails

### What is Ruby on Rails?

- Ruby on Rails (RoR) is a server-side, open-source web application framework written in Ruby.
- It follows the Model–View–Controller (MVC) pattern and emphasizes two key principals:
  - Don’t Repeat Yourself
  - Convention over Configuration
- RoR provides a pre-made solution to help developers save time on tedious and repetitive tasks. Essentially, you don’t have to write each line of code all over again.

### Key principles emphasized in Ruby on Rails

- Don’t Repeat Yourself

  - Rails promotes reusability and clean code — avoid duplication by using:
    - Filters and callbacks
    - Helpers and partials
    - Concerns and modules
    - ActiveSupport utilities
    - https://chatgpt.com/s/t_69103e90aadc8191a9e2bba79b703689

- Convention over Configuration
  - Rails assumes sensible defaults, so you don’t need to configure everything manually. For example:
    - A model named `User` automatically maps to a database table `users`.
    - A controller named `UsersController` maps to a view folder `app/views/users/`.

### What are the features of Rails?

Here are some Ruby on Rails features that make it stand out from the IT crowd:

- **MVC Architecture (Model–View–Controller)**
- **Convention over configuration**
- **DRY (Don’t Repeat Yourself)**
- **ActiveRecord ORM (Object–Relational Mapping).** ActiveRecord bridges Ruby objects and database tables seamlessly. You can interact with your database using Ruby code instead of SQL.
- **Database Migrations.** Rails migrations let you version-control your database schema — no need to write raw SQL.
- **Scaffolding and Generators.** Rails can auto-generate CRUD code (controllers, models, views, routes, tests). It saves enormous time in prototyping and early development.
- https://chatgpt.com/s/t_691014d49d248191ba2fe9d3a503dd46

### Pros and cons of RoR

In Short,
Rails Strengths:

- Rapid development
- Convention-driven
- Mature ecosystem

Rails Weaknesses:

- Slower performance
- Harder scaling for very large systems
- Heavy abstractions that can hide complexity

### Pros

- **Convention over Configuration:** Rails makes countless decisions for you - folder structure, naming conventions, database migrations. You spend less time on setup and more time building features. New developers can jump into any Rails project and immediately understand the layout.
- **Rapid Development:** Rails excels at getting MVPs and prototypes built quickly. Generators create boilerplate code instantly, ActiveRecord handles database operations without writing SQL, and built-in helpers streamline common tasks. What might take weeks in other frameworks can take days in Rails.
- **Mature Ecosystem:** Over 20 years of gems (libraries) solve nearly every problem - authentication (Devise), file uploads (ActiveStorage), background jobs (Sidekiq), admin panels (ActiveAdmin). You rarely need to reinvent the wheel.
- **Integrated Full-Stack Solution:** Unlike frameworks that only handle the backend, Rails includes everything: ORM, routing, view rendering, asset pipeline, testing framework, email handling, and more. It's a complete package out of the box.
- **Strong Testing Culture:** Rails was built with testing in mind. RSpec, Minitest, and Capybara integrate seamlessly. The community emphasizes test-driven development, making it easier to maintain quality code.

### Cons

#### Performance Limitations:

- Rails can be slower compared to lower-level frameworks (e.g., Go, Node.js, or Elixir Phoenix) due to:

  - Ruby’s interpreted nature (not compiled)
    - [Explain Ruby’s interpreted nature](https://chatgpt.com/s/t_69101e18d8d481918f3c24bd667e4e5d)
  - Heavy middleware stack
  - Object allocation overhead

- For most web apps, this isn’t critical — but at very large scale, it matters. Rails apps can struggle with extremely high-traffic scenarios without significant optimization and caching layers.

#### Monolithic Structure

- Rails promotes a monolithic architecture — great early on, but as the app scales, maintaining a single large codebase can become complex.
- Although modularization (engines, services) is possible, it’s not the default pattern.
- Rails' "full-stack" nature becomes a weakness when you want microservices or need to mix technologies.

#### Memory Intensive

- Rails applications consume significant memory, due to loaded dependencies and abstractions.
- This increases hosting costs compared to lighter frameworks and makes it harder to run multiple services on limited resources.

#### Magic Can Be Confusing

- Convention over configuration is great until something breaks or behaves unexpectedly. Debugging can be frustrating because so much happens behind the scenes. Junior developers especially struggle to understand what Rails is doing automatically.

#### Less Suitable for Real-Time

- While ActionCable exists for WebSockets, Rails isn't ideal for real-time applications, streaming data, or scenarios requiring persistent connections at scale. Node.js or Go are better suited for these use cases.

- https://chatgpt.com/s/t_69101aba9c5c8191bb72893d4a405b98
- https://fullscale.io/blog/ruby-on-rails-pros-and-cons/

### Pros and Cons of ActiveRecord

- https://www.geekyhacker.com/2019/05/25/my-thoughts-on-active-record-pattern/
- https://karoldabrowski.com/blog/active-record-pattern-or-anti-pattern-overview/

## MVC

- The idea is to have separate components that each do their job:

  - The Model handles data and business logic.
  - The View is for the presentation of the data and the user interface.
  - The Controller ties the two together by getting data from the Model and showing the View to the user.

## Explain the Rails request lifecycle from browser request to response.

When you hit a Rails app endpoint (like https://example.com/posts/1), a lot happens behind the scenes before you get your HTML or JSON response.

1. The browser sends an HTTP request to your Rails application:
   - Includes URL, method (GET, POST, etc.), headers, cookies, params, and body.
   - Example:
     ```Ruby
     GET /posts/1 HTTP/1.1
     Host: example.com
     ```
2. This request reaches your web server (like Nginx, Apache, or Caddy).

   - It is responsible for SSL termination, serving static files etc.
   - [What is the role of webserver?](https://chatgpt.com/s/t_691f595c7e7081918d8a9e85a2a75b1d)

3. Your web server forwards the request to the Rails application server, which could be:

   - Puma (default in modern Rails)
   - Unicorn
   - Passenger
     - [Puma vs Unicorn vs Passenger](https://chatgpt.com/s/t_69191320fa0881918fa5d46a14130065)
       - [Worker vs Thread](https://chatgpt.com/s/t_69191937af888191b5ca8b815664b7ff)

   a. The application server is responsible for:

   - Managing Ruby threads/processes
   - Passing requests to the Rails framework via Rack

4. Rack Middleware Stack

   - Rails sits on top of Rack, a Ruby webserver interface that provides a common API between web servers and Ruby frameworks.
   - When the request reaches Rack, it runs through a middleware stack, which are small classes that process the request before hitting Rails’ router.
   - Each middleware can:
     - Modify the request
     - Short-circuit (return a response early, e.g., cached pages)
     - Pass the request deeper down the stack

5. After passing through middleware, the request reaches the Rails router:
   - The router matches the URL and HTTP verb to a controller action.
6. Rails runs the matched controller method
   - During this phase:
     - Parameters are available via params
     - Cookies and session data can be accessed
     - Business logic and Active Record queries run
     - Background jobs may be enqueued
     - API responses (JSON/XML) can be constructed
7. After the action finishes, Rails determines what to render
   - For HTML requests Rails automatically looks for a view template matching the action name.
   - For API responses Rails might render JSON directly or use `JBuilder` / `ActiveModel::Serializer`.
   - If applicable, the view is wrapped in a layout
8. The rendered HTML/JSON is sent back up the middleware stack.

   - At this stage, middlewares can:
     - Modify headers (e.g., add caching headers)
     - Compress content (e.g., gzip)
     - Log performance metrics

9. Finally, a Rack-compliant response is returned
10. The web/application server sends the HTTP response back to the browser, which:
    - Parses HTML/JSON
    - Renders the page or processes the API response

- https://chatgpt.com/s/t_68f4412130a08191bc237b70815386af

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

- https://chatgpt.com/s/t_68f860031070819183e9ecfcf2479604
- https://chatgpt.com/s/t_68f852e493f481918c267a9648a57ff4
- https://chatgpt.com/s/t_68f8613e119c8191ab94c1cc493ecae5
- https://chatgpt.com/s/t_68f866e80b088191841d0227a9e29da1

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

- https://chatgpt.com/s/t_68f86b2d8ea881919599e78c2b057215
- https://chatgpt.com/s/t_68f86e8e9f1081919cda9df9e1a5af5c
- https://chatgpt.com/s/t_68f870bfd3708191b73f3975854d0231

### What is Eager Loading Associations?

Eager loading is the mechanism for loading the associated records of the objects returned by `Model.find` using as few queries as possible.

### What is Lazy Loading Associations?

- Lazy loading allow you to defer querying associations until the moment they're needed. It allows being implicit about which associations need to be loaded by offloading this decision to the view.
- Although lazily-loaded associations give more flexibility in the view without having to update the controller, a good rule of thumb is to have the controller handle loading the data before passing it off to the view.
- Lazy loading from the view works for views that show one model object and it's associations (like the `ProductsController#show` in our first example) and can be useful when having multiple views that require different data from the same controller, for example.

### Difference between `count` and `size`?

`#count` will always do a `COUNT` query, while `#size` will skip the query if the responses are already loaded.

- https://chatgpt.com/s/t_68f8825c24f8819192ba94636b80415c
- [`post.comments.load` vs `post.includes(:comments)`](https://chatgpt.com/s/t_68f8838a25108191844f3de53d7fe21d)

### What is Polymorphic Associations?

### What is a scope?

- Scoping allows you to specify commonly-used queries which can be referenced as method calls on the association objects or models.
- All scope bodies should return an `ActiveRecord::Relation` to allow for further methods (such as other scopes) to be called on it.
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

### How would you optimize a slow Active Record query or an endpoint under heavy load?

- https://chatgpt.com/s/t_68f89aa251fc8191b36769f0d2210efa

1.  **Step 1: Identify the Bottleneck**

    a. Rails logger to see SQL execution. Identify expensive queries.

    b. Use `EXPLAIN/ANALYZE` command in SQL to see query plan, indexes used, and whether a full table scan occurs.

    ```Ruby
    User.where(email: "test@example.com").explain
    ```

    - https://chatgpt.com/s/t_68f8911992388191a4945882ae9c3101
    - https://chatgpt.com/s/t_68f89125efd48191b859b2f6298a9123

    c. Use Bullet gem to detect N+1 queries.

    d. Use `rack-mini-profiler` for timing

    d. Use tools like New Relic/Scout/Skylight/Datadog/AppSignal to monitors performance under real traffic.

    - View slowest queries, error rates, database time

Once you know where the time is spent (DB, memory, Ruby code, I/O), you can target fixes.

2.  **Step 2: Optimize ActiveRecord Queries**

    a. Use `includes`, `preload`, `eager_load` to get rid of N + 1 queries.

    b. Add indexes on foreign keys and frequently filtered columns.

    c. Avoid loading unnecessary columns. Select only needed columns with `select`.

    d. Use `pluck` or `exists?` When Appropriate.

    - `pluck` pulls only needed fields; avoids instantiating AR objects.

    e. Cache Expensive Queries

    - If a query takes hundreds of milliseconds, runs frequently, and returns data that doesn’t change often, then caching can save database load, reduce latency, and improve scalability.
    - https://chatgpt.com/s/t_68f46cd104648191af274d4cbde59ea1

    g. Avoid joining too many tables unnecessarily. Sometimes a subquery or prefetch is faster.

3.  **Cache Aggressively**

    a. Redis for query result caching

    b. Fragment or page caching in views

    - Cache heavy partials or full pages when data changes infrequently.

    c. HTTP-level caching with ETags

    d. Browser caching headers

4.  **Move Heavy Work**

    a. Background jobs with Sidekiq

    b. Batch processing for large datasets

    c. Async notifications and emails

    d. Move slow logic (emails, exports, notifications) to Sidekiq

5.  **Endpoint Optimization**

    a. Pagination (limit, offset, cursor)

    - Use limit/offset. But it is slow with large offsets. In that case use Cursor-based pagination.

      - In cusros-based pagination, instead of skipping rows, we use a stable ordering column (like `id` or `created_at`) and remember the last seen value (“cursor”).

    - https://chatgpt.com/s/t_68f46e7df3c08191b9df8a14844ae29e

    b. Efficient serializers

    c. Response compression

    d. Rate limiting

    - https://chatgpt.com/s/t_68f475ebcc5481918f30daf92e6d6a25

    - Use `Rack::Attack` to protect endpoints under load.

      - https://chatgpt.com/s/t_68f4838c7988819182386f4ce7d23274

6.  **Database**

    a. Proper indexing strategy

    b. Connection pooling

    - Connection pooling is a mechanism that keeps a reusable pool of database connections open instead of opening a new connection for every request.

      - Without pooling → every incoming request creates and tears down a new DB connection → slow and expensive.

      - With pooling → connections are kept open and checked out / returned as requests come and go.

      - https://chatgpt.com/s/t_68f46865bfac8191864f732255b50252
      - https://chatgpt.com/s/t_68f49078822c8191aa47cad99f49d2c2

    c. Read replicas for read-heavy apps

7.  **Monitor**

    a. APM tools (New Relic, DataDog, AppSignal)

    b. Performance alerts

    c. Continuous monitoring

- If we still require improvement, we can do Infrastructure-Level Optimization

  a. Scale Vertically & Horizontally

  - DB replication: read replicas for heavy read loads

  - CDN: offload static assets and API responses

  - Load balancer: distribute requests across multiple app servers

  b. Caching Layers

  - Use Redis / Memcached for caching query results or computed data

  - Use HTTP reverse proxies (like Cloudflare or Varnish)

### How do you apply service objects, form objects, or presenters in Rails?

- https://chatgpt.com/s/t_68f4902a3b7081919fb287ab39a39556

### What strategies would you use to scale a Rails application horizontally?

- https://chatgpt.com/s/t_68f4913af9e48191aac9d6392e231490

### What are ActiveJob and Sidekiq, and how do they work with Redis?

- https://chatgpt.com/s/t_68f491e4f328819191af2f1da2715843

### What are background jobs, and how do you ensure idempotency and retries?

- https://chatgpt.com/s/t_68f4937311f48191af5b7cc1a2c9e6fa

### Process, thread and connection pool

# 1. Processes 🧑‍💻

A process is an independent unit of execution. It has its own memory space, code, and resources. In the context of web servers like Puma or Unicorn, each worker is essentially a process.

### Puma Workers:

- Each worker in Puma runs in its own process.
- For example, if you configure `workers = 4`, Puma starts 4 separate processes to handle requests.

### System Processes:

- On your machine, there’s a system-wide process table where each process can be monitored, killed, or managed by the OS.

### In Rails:

- Workers handle incoming HTTP requests.
- Each worker is an isolated process, with its own memory space.

---

# 2. Threads 🧵

A thread is a smaller unit of execution within a process. Multiple threads can run within a single process, sharing the same memory space. The threads in a process communicate with each other easily because they all access the same memory, but this can also lead to complications like race conditions (if not handled properly).

### Puma’s Threading Model:

- Puma’s ability to handle multiple threads within each worker is key to how it scales.
- You can configure Puma to run, say, 5 threads per worker.
- Each thread is capable of handling a request.
- If a thread is waiting on a resource (like a database query), another thread can continue processing requests.

### In Rails:

- Each thread is tied to a specific request.
- If the request needs to interact with the database, it will borrow a connection from the connection pool.
- Threads are lighter weight than processes, but you need to ensure thread safety.

---

# 3. Connection Pools 💧

The connection pool is essentially a cache of reusable database connections. Instead of opening a new database connection for each incoming request, the pool allows multiple threads or processes to reuse existing connections, improving efficiency.

### How it works:

- Threads/Workers request a connection from the pool when they need to interact with the database.
- Once they’re done (i.e., the query is finished), they return the connection to the pool for reuse.
- If there are no free connections in the pool, the thread will have to wait for one to become available, or the request will timeout.

### In Rails:

- ActiveRecord automatically manages the connection pool for you.
- The pool size is configured in `database.yml` under the `pool` setting.
- The pool size should be carefully chosen based on the number of threads and workers you're running.

---

# Putting It All Together 👨‍💻

Let’s break it down into a scenario with Puma, Threads, and Connection Pool.

### Example: Puma with 4 Workers, 5 Threads

- **Processes**: You have 4 workers in Puma (`workers = 4`), so there are 4 separate processes running the Rails application.
- **Threads**: Each worker has 5 threads (`threads = 5`), so there are 5 threads per worker. These threads handle incoming requests.

### Connection Pool:

- Each thread needs to interact with the database. When a thread starts a query, it asks the connection pool for a connection.
- If the pool is configured with `pool: 20`, you have 20 total database connections available. If all threads are using them, any other thread that needs a connection will have to wait until one is free. If the wait time exceeds the timeout configuration (default is 5000ms), an error will be raised.

---

### Flow of Requests:

1. When a request comes in, one of the 5 threads in Worker 1 will process it.
2. The thread checks if there’s a free database connection available in the pool.
3. If yes, the thread takes that connection to interact with the database.
4. If no, the thread waits for a free connection.
5. Once the database query is complete, the connection is released back into the pool, and the thread can continue serving the next request.

---

### What Happens When You Hit the Pool Limit?

If the pool is exhausted (e.g., all 20 connections are being used), any new requests will either:

- Wait for a connection to be available (based on timeout), or
- Timeout if it exceeds the configured timeout duration (e.g., `timeout: 5000ms`).

---

### Key Points to Balance:

#### Workers vs Threads:

- More workers mean more independent processes (more memory and CPU).
- More threads mean more concurrency within each worker (more efficient but limited by CPU cores).

#### Database Connection Pool Size:

- A common rule of thumb is:  
  `pool size ≈ (number of workers * number of threads per worker) + some buffer`

- If you configure Puma to run 4 workers with 5 threads each, you need at least 20 connections in your pool (`pool: 20`). If you're using background jobs (e.g., Sidekiq), don’t forget to account for those as well.

---

### Real-World Example

Let’s say you configure Puma to use 4 workers and 5 threads per worker. Your `database.yml` would look like this:

```yaml
production:
  adapter: postgresql
  database: myapp_production
  username: myuser
  password: <%= ENV['DB_PASSWORD'] %>
  host: <%= ENV['DB_HOST'] %>
  pool: 20 # 4 workers × 5 threads per worker
  timeout: 5000
```

### What’s your approach to observability — logging, metrics, tracing in Rails apps?

### How would you implement event-driven architecture or Pub/Sub in Rails?

### Explain how to structure a multi-tenant Rails application.

### What are caching strategies available in Rails?

### Explain the Rails request lifecycle from browser request to response.

- https://chatgpt.com/s/t_68f4412130a08191bc237b70815386af
- https://chatgpt.com/s/t_68f8b7c36d4c81918c3e26268b5a9117

## Concurrency

- [Concurrency problems in databases](https://chatgpt.com/s/t_690ab20da3808191a0f2afa29c2ba381)
- [Race Condition](https://chatgpt.com/s/t_690aab104abc81918d45ef96441020be)
- [How to prevent deadlock in Rails?](https://chatgpt.com/s/t_690aac015f508191b16b28b01a927ad0)
  - [`User.transaction` vs `ActiveRecord.Base.transaction`](https://chatgpt.com/s/t_690bb6293000819196ea32128318ebd4)
  - [Serialize updates in a job queue (e.g., Sidekiq), so only one worker modifies that record at a time.](https://chatgpt.com/s/t_690ab0a61f048191a8f9d6a513718dae)
  - [`User.lock.find(1)` vs `User.find(1).lock`](https://chatgpt.com/s/t_690bd7db24688191b7700b96f87c10a8)

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

## Service Object

- Service objects are Plain Old Ruby Objects (PORO) that are designed to execute one single action in your domain logic and do it well.
- When your business logic can’t fit into either a model or a controller, that’s when service objects come in and let us separate every business action into its own Ruby object.
- It's a great resource to decompose fat Active Record models while still keeping the controllers thin, because we take away some validations which don't belong to a model nor a controller.
- Benefit: It separates business logic from controllers and models.

# Performance and Optimization

### Why use `exists?` for checking the presence of a record in the database?

- `exists?` doesn’t instantiate records and perform the check by confirming the existence of a row in our model table.
- But, If the records are already loaded in the memory using `any?` will not hit the database again. But, `exists?` will hit the database.

### What makes your application slow?

- Database queries usually play the biggest role in an application’s performance footprint.
  - Loading too much data into memory, N+1 queries, lack of cached values, and the lack of proper databases indexes are the biggest culprits that cause slow requests.

### How to Scale Ruby on Rails Applications

- You first need to identify what the bottlenecks are in your application, and what resources can be scaled.

# Scaling a database

- Find time-consuming queries in PostgreSQL by querying the `pg_stat_statements` table that contains statistics about all SQL statements executed on the server.
- Identify the queries could be faster and analyze why they were slow.
  - You can also run `EXPLAIN` or `EXPLAIN ANALYZE` on the query to see the query plan and actual execution details, respectively.
  - One of the most important things to look out for in the results is `Seq Scan`, which indicates that Postgres has to go through all the records sequentially to run the query. If this happens, try to bypass that sequential scan by adding an index to the columns that you've filtered.

# View

In some situations, rendering the view is an expensive operation, especially if the view needs to display a lot of data, like when showing a list of all available products in a store, for example. In cases like that, caching parts of the returned view can speed things up, especially when the data doesn't change too often.

## Fragment Caching

- When different parts of the page need to be cached and expired separately you can use Fragment Caching.
- fragment caching, which stores part of the rendered view as a fragment. For subsequent requests, the pre-saved fragment is used instead of rendering it again.

## Russian Doll Caching

- You may want to nest cached fragments inside other cached fragments. This is called Russian doll caching.
- In the fragment caching the cache keys don’t include nested template content. So if you are nesting the cache calls deeper than one level, there might be stale results. Russian doll caching fixes this problem.
- The advantage of Russian doll caching is that if a single product is updated, all the other inner fragments can be reused when regenerating the outer fragment.

# Delayed Job vs. Sidekiq

## Delayed Job

- Delayed Job uses a table to maintain all background jobs.
- **Advantage.** it is simple and uses their already existing database. You don't need to spend/maintain other resources.
- **Disadvantage.** it will still take up space in your database table. If you have too many jobs queued at the same time, you might need more disk space to accommodate them all.

## Sidekiq

- Sidekiq uses Redis as its data store to maintain all job metadata.
- So, obviously it is faster than the regular database systems Delayed Jobs uses.
- Additionally, each Sidekiq process spawns multiple threads to process the jobs even faster.

## Performance

- Performance-wise, Sidekiq beats Delayed Job quite convincingly.
  - Redis is much faster at querying data than traditional databases like Postgres because it stores data in memory as opposed to the disk.
  - Delayed Job runs a single thread to process jobs, compared to Sidekiq, which uses multiple threads.
- If performance and long-term maintainability are of importance, Sidekiq is a no-brainer. On the other hand, if running costs are a concern, Delayed Job can help you there.

## What have you used?

- We used Sidekiq with Active Job.

# SQL

1. What is a transaction?
2. What are the ACID properties of a transaction?
3. What is a trigger?
4. What is an event?
5. What is concurrency?
6. What are the concurrency problems?
7. What are transaction isolation levels?
8. What is deadlock?

## What is an index?

- Indexes are basically data structures that database engines use to quickly find data.
- Indexes are extremely important in **large databases** and **high traffic websites** because they can improve the performance of our queries dramatically.
- In a lot of cases indexes are small enough that they can fit into memory.
- That’s why it is much faster to use them to find data.
- Cost of Indexes
  - It increases the size of our databases.
    - Because they have to be permanently stored next to our table.
  - It slows down the write operation
    - Everytime we add, update or delete a record, MySQL has to update the corresponding indexes and this will impact the performance of our write operation.
    - or this reason we should reserve indexes for performance critical queries.
- Design indexes based on your queries, not your tables.
- Internally indexes are often stored as binary trees.

### When Indexes are Ignored

- If we have used `AND` in our index but while running the query we use `OR`
- If we use a column in an expression, MySQL is not able to utilize our index in the best possible way

### Covering Indexes

- An index that covers everything that a query needs.
- With this index MySQL can execute our query without touching the table.
  This is the fastest performance we can get.
- When designing indexes make sure of the following to ensure MySQL only uses the index while executing the queries:

  - First, check the `WHERE` clause and find the columns that are most frequently there. Include them in the index. With this we can narrow down the searches.
  - Then look at the columns in the `ORDER BY` clause. See if we can include those columns in the indexes.
  - Finally, look at the columns used in the `SELECT` clause. If we include these columns as well, we’ll get a covering index.

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
