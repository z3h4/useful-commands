# Programming paradigm

- In computer science we have various programming paradigms or styles of programming, like
  - Procedural
  - Functional
  - Object-oriented
  - Event-driven
  - Logic
  - Aspect-oriented
- Functional and object-oriented are the 2 most popular paradigms
- **Programming paradigms are ways or styles of writing code**, they are not programming languages.
- We classify the programming languages based on the paradigms they support.
  - Some languages support a single paradigm (e.g. SmallTalk (OOP))
  - Some supports multiple paradigms (e.g. Python, Java, Ruby, JS)

# Object Oriented Programming

- **OOP is basically a style of programming where we see a program as a collection of objects that talk to each other to perform some functionality.**

Object Oriented Programming is a programming paradigm that was created to deal with the growing complexity of large software systems. Programmers found out very early on that as applications grew in complexity and size, they became very difficult to maintain. One small change at any point in the program would trigger a ripple effect of errors due to dependencies throughout the entire program.

Programmers needed a way to create containers for data that could be changed and manipulated without affecting the entire program. They needed a way to section off areas of code that performed certain procedures so that their programs could become the interaction of many small parts, as opposed to one massive blob of dependency. Thats how OOP was born.

## Benefits of OOP

- We can **reduce complexity** by breaking down a large, complex application into smaller, more manageable and easier to maintain objects.
- If an object is not working properly, we can only focus on the code of that object, not the entire application.
  - We can either fix that object, or plug in a different object as a replacement.
- More opportunities to reuse code.

  - Once we build and test an object, we can use it in other applications.
  - This ensures faster development.

- [Why Object Oriented Programming?](https://launchschool.com/books/oo_ruby/read/the_object_model#whyobjectorientedprogramming)

## Principle of object-oriented programming

### Encapsulation

- Encapsulation is the first principle of object-oriented programming.
- It suggests that we should bundle the data and operations that work on the data inside a single entity (object).

#### Example:

Let's examine a simple banking application. The code for the app, at a minimum, must contain data about the bank accounts (account number, balance, account type) and the users (name, address, phone number). The code must also contain behaviors or operations that use and manipulate that data. For instance, we should have operations that open an account, make withdrawals, and deposit new funds.

One thing is evident here: the data and operations that you perform on your data are related. That is, you don't want to apply an operation intended for a bank account on a user's data. For example, it doesn't make much sense to withdraw funds from a user. Instead, you want to withdraw funds from the account, so you want to operate on an account.

If our program keeps track of data about entities and performs operations on that data, it makes sense to combine the data and the functionality into a single entity. That's what object-oriented programming is all about. We call this principle of combining data and the operations relevant to that data encapsulation. Encapsulation is about bundling state (data) and behavior (operations) to form an object.

- [LaunchSchool](https://launchschool.com/books/oo_ruby/read/the_object_model#whyobjectorientedprogramming)

### Abstraction

- Abstraction is the second principle of object-oriented programming.
- It suggests that we should reduce complexity by hiding the unnecessary implementation details.
- Metaphor: the implementation details of a remote control is hidden from us. We only work with its public interface.

Abstraction refers to restricting access to the state and certain behaviors; an object only exposes the data and behaviors that other parts of the application need to work. In other words, objects expose a public interface for interacting with other objects and keep their implementation details hidden. Thus, other objects can't change the data of an object without going through the proper interface.

Abstraction hides functionality to make it unavailable to the rest of the code base. **It is a form of data protection**, so that data cannot be manipulated or changed without obvious intent. It is what defines the boundaries in your application and lets your code achieve new levels of complexity. Ruby, like many other OO languages, accomplishes this task by creating objects and exposing interfaces (i.e., methods) to interact with those objects.

### Polymorphism

- Poly means many and morph means form. So, Polymorphism means many forms.
- It’s basically a mechanism that allows an object to take many forms and behave differently.
- **Polymorphism is the ability for different types of data to respond to a common interface.**
  - For instance, if we have a method that invokes the move method on its argument, we can pass the method any type of argument as long as the argument has a compatible move method. The object might represent a human, a cat, a jellyfish, or, conceivably, even a car or train.
  - That is, it lets objects of different types respond to the same method invocation.
- This helps us build extensible applications.

- [LaunchSchool](https://launchschool.com/books/oo_ruby/read/the_object_model#whyobjectorientedprogramming)

### Inheritance

- Inheritance is when a class inherits behavior from another class.
- The class that is inheriting behavior is called the subclass and the class it inherits from is called the superclass.
- We use inheritance as a way to extract common behaviors from classes that share that behavior, and move it to a superclass. This lets us keep logic in one place.
- Inheritance can be a great way to remove duplication in your code base (DRY).
- Ruby implements the single inheritance mechanism, which means that a class can only inherit from one other class. We may often need to inherit from more classes. In Ruby, we can cover that need by using the composition over inheritance pattern.
  - This is doable by using the mixins. When we mix in a piece of code in another Ruby class we are adding to this class more behavior without using inheritance. After mixing in a module, the behaviors declared in that module are available to the class and its objects.

## Class

- A class is a blueprint or template for creating objects.
  - You can think of classes as basic outlines of what an object should be made of and what it should be able to do.
- Classes hold data, and methods that interact with that data, and are used to instantiate objects.
- When defining a class, we typically focus on two things: state and behaviors.
  - State refers to the data associated to an individual object (which are tracked by **instance variables**).
  - Behaviors are what objects are capable of doing. We define these behaviors as **instance methods** in a class.
- All objects of the same class have the same behaviors, though they contain different states.
- [LaunchSchool](https://launchschool.com/books/oo_ruby/read/classes_and_objects_part1)

## Object

- An object is an instance of a class.
- Objects are created from classes. Think of classes as molds and objects as the things you produce out of those molds. Individual objects will contain different information from other objects, yet they are instances of the same class.

## Module

- A module is a container of Ruby code that can be used to group related methods, classes, and constants. Modules provide a way to organize and reuse code in Ruby, making it easier to maintain and extend applications.
- Modules can be thought of as a package of functionality that can be included or extended in other classes. Unlike classes, modules cannot be instantiated or inherited. Instead, they are used to mix in functionality to classes.
- Ruby uses modules to share behaviour across classes. A module will contain all the logic for the desired behaviour. Any class which would like to use the same behaviour, can either `include` or `extend` the module.
- In Ruby modules provide two great benefits:
  - We can create namespaces to prevent name clashes.
  - We can use them as mixins to share code across the application.
- Modules are great places to have services, concerns, constants and any other code that, by having the same responsibility they should stay together.
- Create a module in `lib/modules` directory.
- A module can provide two kinds of methods:
  1. Module methods
     - We can use it without having to include (or extend) the module in any other object. This is very common when we are creating service objects
  2. Instance methods
     - To be able to use instance methods, we need to include the module to a class.

## Mixin

- A mixin can basically be thought of as a set of code that can be added to one or more classes to add additional capabilities without using inheritance.
  - In Ruby, mixins are modules that a class can include or extend.
- mixin is a design pattern.
- Ruby implements the single inheritance mechanism, which means that a class can only inherit from one other class. We may often need to inherit from more classes. In Ruby, we can cover that need by using the composition over inheritance pattern.
- This is doable by using the mixins. When we mix in a piece of code in another Ruby class we are adding to this class more behavior without using inheritance.

## `self`

- `self` is a special variable that points to the object that "owns" the currently executing code.
- The value of `self` changes depending on where you use it.
- Follow this rule: from within a class

  1. `self`, inside of an instance method, references the instance (object) that called the method - the calling object.

  2. `self`, outside of an instance method, references the class and can be used to define class methods.

- Inside of a module, `self` points to the module

  ```Ruby
  module Test
    self == Test # => true
  end
  ```

- [More About `self`](https://launchschool.com/books/oo_ruby/read/classes_and_objects_part2#moreaboutself)
- [What Is `self` in Ruby & How to Use It](https://www.rubyguides.com/2020/04/self-in-ruby/)
- [Understanding `self` in Ruby](https://www.honeybadger.io/blog/ruby-self-cheat-sheet/)

# Singleton Class/Eigenclass

- The Eigenclass is called the Singleton class because it is a Class that follows the Singleton pattern.

## Singleton Design Pattern

- The Singleton pattern is a design pattern that restricts the instantiation of a class to a single object. It ensures that only one class instance exists throughout the application and provides a global access point to that instance.
- **This pattern is helpful in scenarios where we need to have a single shared resource or a global state accessible across multiple parts of our application.**
- Ruby implement the Singleton pattern with `Singleton` module. Just include the `Singleton` module in your class definition.
- This module basically hides the `:new` method. `MySingleton.new` will always throw an error. Instead, this module will give you an instance method that will always return the same unique instance of your class.

  ```Ruby
  require 'singleton'

  class NotSingleton
    def initialize
      puts 'This will be printed many times'
    end
  end

  class MySingleton
    include Singleton

    def initialize
      puts 'This will be printed once'
    end
  end

  NotSingleton.new  #=> 'This will be printed many times'
  NotSingleton.new  #=> 'This will be printed many times'

  MySingleton.instance  # => 'This will be printed once'
  MySingleton.instance  # Nothing is printed
  ```

- This is useful if you ever want to restrict a class so it never creates more than one instance of itself.

### Use Cases of Singleton Design Pattern

There are several scenarios where we can apply the Singleton pattern effectively:

1. **Database connections**: When working with databases, it is often desirable to have a single database connection shared across multiple components of an application. We can use the Ruby Singleton pattern to manage the creation and access of the database connection object.
2. **Logging**: In applications requiring logging, it is common to have a single logging instance that captures and stores log messages from different system parts. We can use the Singleton pattern can be used to ensure that the same logging object records all log messages.
3. **Configuration settings**: When dealing with application-wide configuration settings, such as database credentials or API keys, a Singleton can be utilized to provide a central point of access to these settings.
4. **Caching**: We can utilize Singleton objects to implement a cache that stores frequently used data, ensuring that only one instance of the cache exists.

Using the Singleton pattern in these scenarios, we can enforce a single instance of the class and avoid unnecessary object creation.

### The Eigenclass

When we create an instance of a class, Ruby creates a hidden class, basically a copy of the original class, but which is owned exclusively by this instance. This is the Eigenclass. If we modify the Eigenclass of our first instance, it won't change anything for another instance.

```Ruby
class Example
  def say_hello
    puts "Hello"
  end
end

object1 = Example.new
object2 = Example.new

object1.say_hello #=> Hello
object2.say_hello #=> Hello

def object2.say_hello
  puts "Hello World"
end

object1.say_hello #=> Hello
object2.say_hello #=> Hello World
```

Here, `object2` is not defined in the scope of the class `Example`, it is defined by a copy of it's class that it carries around. So by redefining a method in `object2`, we "open the Eigenclass" and modify properties just for this object.

Since the Eigenclass can exist only in one instance, it is sometimes called the Singleton class, althought `Example` is not a Singleton at all. Only the Eigenclasses of its instances are Singletons, because they each are one and unique.

### The `class << self` notation

The previous example can be rewritten this way:

```Ruby
class Example
  def say_hello
    puts "Hello"
  end
end

object1 = Example.new
object2 = Example.new

class << object2
  def say_hello
    puts "Hello World"
  end
end

object1.say_hello #=> Hello
object2.say_hello #=> Hello World
```

As you can see, the `class << object2` syntax is used to access the Eigenclass of `object2`.

# Methods

### [`instance_methods`](https://apidock.com/ruby/Module/instance_methods)

- Returns an array containing the names of the `public` and `protected` instance methods in the receiver.
- For a module, these are the `public` and `protected` methods; for a class, they are the instance (not singleton) methods.
- If the optional parameter is `false`, the methods of any ancestors are not included.

  ```Ruby
  module A
    def method1()  end
  end

  class B
    include A
    def method2()  end
  end

  A.instance_methods(false)                   #=> [:method1]
  B.instance_methods(false)                   #=> [:method2]
  B.instance_methods.include?(:method1)       #=> true
  ```

- Check if a class contains an instance method:

  ```Ruby
  B.instance_methods.include?(:method1)
  ```
