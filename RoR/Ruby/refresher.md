# Basic Data Type

- [The Odin Project](https://www.theodinproject.com/lessons/ruby-basic-data-types)

# Strings

- [insert](https://apidock.com/ruby/v2_5_5/String/insert)

## String vs Symbols

- Strings can be changed, so every time a string is used, Ruby has to store it in memory even if an existing string with the same value already exists. Symbols, on the other hand, are stored in memory only once, making them faster in certain situations.
- One common application where symbols are preferred over strings are the keys in hashes.
- Basically, a symbol is used when you want to reference something like a string but don't ever intend to print it to the screen or change it. It is often referred to as an immutable (i.e. unchangeable) string. While not 100% technically correct, it is a useful mnemonic device for now.
- [Symbols vs Strings](https://www.youtube.com/watch?v=5XaqGZq5r2M)

## Substrings

```Ruby
"hello"[0]      #=> "h"

"hello"[0..1]   #=> "he"

# Starting from index 0 take 4 characters
"hello"[0, 4]   #=> "hell"

"hello"[-1]     #=> "o"
```

## Common Ruby Methods

### Convert to Uppercase/Lowercase

```Ruby
"hello".upcase  #=> "HELLO"
"Hello".downcase  #=> "hello"
```

### Check if a String is Empty

```Ruby
!var.nil? && var.empty?
```

### Split a string

```Ruby
"hello world".split           #=> ["hello", "world"]
"hello".split("")             #=> ["h", "e", "l", "l", "o"]
"foo, bar,baz".split(/,\s*/)  #=> ["foo", "bar", "baz"]
"foo,bar,,".split(",")        #=> ["foo", "bar"]      (trailing empty strings are suppressed)
```

- To split a string by commas and optional spaces using a regular expression, the common pattern is `,\s*`. Here is a breakdown of the pattern:

  - `,` matches the literal comma character.
  - `\s*` matches any occurrences of whitespace character (space, tab, newline) zero or more times.

    - `\s`: This is a metacharacter that stands for any single whitespace character. This typically includes:

      - A space character (` `).
      - A tab character (`\t`).
      - A newline (line feed) character (`\n`).
      - A carriage return character (`\r`).
      - A vertical tab character (`\v`).
      - A form feed character (`\f`).

    - `*`: This is a quantifier that means the preceding element (in this case, `\s`) should be matched zero or more times.

- The `split` method accepts an optional second argument, a `limit` (an integer), to control the maximum number of elements in the resulting array.

### Remove Leading/Trailing Spaces from a String

```Ruby
" hello, world   ".strip   #=> "hello, world"
" hello, world   ".strip!  #=> "hello, world" (Modifies original string)
" hello world ".lstrip     #=> "hello world " (Removes only leading (left-side) whitespace)
" hello world ".rstrip     #=> " hello world"	(Removes only trailing (right-side) whitespace)
```

- If the original string is `nil`, calling these methods will raise an error, so a common practice is to use `.to_s` first, like `str.to_s.strip`

## Searching Within Strings

```Ruby
"hello world".include?("hello")  # => true
"hello world".index("world")     # => 6
"hello world".index("bye")       # => nil
"hello world" =~ /world/         # => 6 (Using Regex)
"hello world".match?(/hello/)    # => true (Using Regex)
```

- [Check if a string is a substring of another](https://chatgpt.com/s/t_693b6b90144c8191bec7e1cde3a7312e)

## Why `puts` method returns `nil`?

- Everything in Ruby has a return value. When a piece of code doesn’t have anything to return, it will return `nil`.
- The `puts` method prints out a string and returns nothing, so we see `nil` being returned after the string is displayed.

- Example

  ```Ruby
  a = puts "stuff"
  puts a   #=> nil
  ```

## What is an expression?

- **An expression is anything that can be evaluated**, and pretty much everything you write in Ruby is an expression.
- An expression in Ruby always returns something, even if that's an error message or `nil`.

# Numbers

## Common Ruby Methods

### Find the Maximum/Minimum of Two Numbers

```Ruby
[5, 10].min     #=> 5
[5, 10].max     #=> 10
```

# Ruby outputs

```Ruby
irb :001 > '4'.to_i
=> 4

irb :002 > '4 hi there'.to_i
=> 4

irb :003 > 'hi there 4'.to_i
=> 0    # If the string does not start with a number, it returns 0.

irb :004 > '4'.to_f
=> 4.0

irb :005 > '4 hi there'.to_f
=> 4.0

irb :006 > 'hi there 4'.to_f
=> 0.0
```

- You cannot add a number to a string before type convertion

```Ruby
irb :001 > 'one' + 1
=> TypeError: no implicit conversion of Integer into String
   from (irb):1:in `+'
   from (irb):1
   from /usr/local/rvm/rubies/ruby-2.5.3/bin/irb:16:in `<main>'
```

# Variables

### What is a method?

- A function is basically a piece of code that we can reuse.

### Variable Scopes

- [LaunchSchool](https://launchschool.com/books/ruby/read/variables#variablescope)
- [Variables as pointer](https://launchschool.com/books/ruby/read/more_stuff#variables_as_pointers)
- [A visual guide to variables](http://ruby.bastardsbook.com/chapters/variables/#visual-guide)
- [The classic variable swap](http://ruby.bastardsbook.com/chapters/variables/#h-2-6)

# Input and Output

## `puts`

- `puts` automatically adds a new line at the end of your message.
  - If you don’t want a newline, then use `print`.
- It also convert things to strings, even if that means an empty string.
- Displays array elements one-per-line

## `p`

- There's another method called `p` that's very similar to `puts`, except it doesn't call `to_s` on its argument; it calls another built-in Ruby instance method called `inspect`.
- `puts` always returns `nil`, but `p` returns the object you pass to it.

## Pretty Printing

- Ruby has yet another printing method called `pp`.
- This is like `p`, but it prints big hashes & arrays in a nicer way.
- [Pretty Printing](https://chatgpt.com/s/t_691d78646d188191ad4fc33dac0efcdf)

- [Differences Between `puts`, `print`, and `p`](https://chatgpt.com/s/t_691d032cccf88191b3c427dba0d1b5cf)
- [Understanding The Differences Between `puts`, `print`, and `p`](https://www.rubyguides.com/2018/10/puts-vs-print/)

# Conditional Logic

## `==` vs `eql?` vs `equal?`

### `a.equal?(b)`

- object identity - `a` and `b` refer to the same object in memory.
- Two variables pointing to the same number will usually return `true`. The following expression is `true` because of the way computers store integers in memory. Although two different variables are holding the number 5, they point to the same object in memory.

  ```Ruby
  a = 5
  b = 5
  a.equal?(b) #=> true
  ```

- But, computers can’t store strings in the same efficient way they store numbers. Although the values of the variables are the same, the computer has created two separate string objects in memory.

  ```Ruby
  a = "hello"
  b = "hello"
  a.equal?(b) #=> false
  ```

### `a.eql?(b)`

- object equivalence - `a` and `b` have the same value and type.

  ```Ruby
  5.eql?(5.0) #=> false; although they are the same value, one is an integer and the other is a float
  5.eql?(5)   #=> true
  ```

### `a == b`

- object equivalence - `a` and `b` have the same value with type conversions.

```Ruby
  2 == 2.0 # Output: => true
```

- In `RSpec` `eq` matcher uses the `==` operator internally to compare the expected and actual values.

- [TheOdinProject](https://www.theodinproject.com/lessons/ruby-conditional-logic#boolean-logic)
- [Difference Between ==, eql?, equal? in ruby](https://chatgpt.com/s/t_691d07c079408191a890865fa3cf3a64)
- [Difference Between ==, eql?, equal? in ruby](https://medium.com/@khalidh64/difference-between-eql-equal-in-ruby-2ffa7f073532)

## Case equality operator: ===

- It returns true if the object on the right “belongs to” or “is a member of” the object on the left.
- For instance, it can be used to test if an object is an instance of a class

  ```Ruby
  String === "zen"    # Output: => true
  Range === (1..2)    # Output: => true
  Array === [1,2,3]   # Output: => true
  Integer === 2       # Output: => true
  ```

- When the `===` operator is called on a range object, it returns true if the value on the right falls within the range on the left.

  ```Ruby
  (1..4) === 3        # Output: => true
  (1..4) === 2.345    # Output: => true
  (1..4) === 6        # Output: => false
  ("a".."d") === "c"  # Output: => true
  ("a".."d") === "e"  # Output: => false
  ```

## [What is the Ruby <=> (spaceship) operator?](https://stackoverflow.com/questions/827649/what-is-the-ruby-spaceship-operator)

The spaceship operator (`<=>`) in Ruby is a comparison operator. Basically instead of returning 1 (`true`) or 0 (`false`) depending on whether the arguments are equal or unequal, the spaceship operator will return 1, 0, or −1 depending on the value of the left argument relative to the right argument.

    a <=> b :=
      if a < b then return -1
      if a = b then return  0
      if a > b then return  1
      if a and b are not comparable then return nil

This makes it ideal for sorting and ordering collections (i.e. arrays), as it allows custom comparison logic in methods like `sort` and `sort_by`.

- **Sort by zip code, ascending**

  ```Ruby
  my_objects.sort! { |a, b| a.zip <=> b.zip }
  ```

- **Sort by zip code, descending**

  ```Ruby
  my_objects.sort! { |a, b| b.zip <=> a.zip }
  ```

- **Sort by last name, then first**

  ```Ruby
  my_objects.sort! { |a, b| 2 * (a.last <=> b.last) + (a.first <=> b.first) }
  ```

  - It gives double weight to the comparison of last values. This means sorting is primarily by `last`, and if those are equal, by `first`. The multiplication by 2 makes the last comparison more significant in the sort order.

- [What is the Ruby <=> (spaceship) operator?](https://chatgpt.com/s/t_691d103b50f881918cbd76908967ecab)
- [TheOdinProject](https://www.theodinproject.com/lessons/ruby-conditional-logic#boolean-logic)

# Parameters and Arguments

- [Parameters and Arguments](https://www.theodinproject.com/lessons/ruby-methods#parameters-and-arguments)
- [Naked asterisk parameters in Ruby](https://andrewberls.com/blog/post/naked-asterisk-parameters-in-ruby)

## Anonymous splat parameter

- In ruby, we can define a parameter without a name using the anonymous splat parameter.
- It is written as \* in a method definition.
- With this we can ignore the arguments with which a method was called.
- Anonymous splat parameter actually comes into play when you’re not referring to the arguments inside the function, and instead calling super.

  ```Ruby
  def example(a, *)
    puts a
  end

  example(1, 2, 3) # prints 1, ignores 2 and 3
  ```

- This is useful when you want to accept (and ignore) extra arguments without naming them.
- https://chatgpt.com/s/t_68f75838761081918a323d3a44f06465

# Loop

## `loop`

As with any other block in Ruby, the block passed to `loop` introduces a new scope. From inside the block, you can access variables that were initialized outside of the block. However, from outside the block, you can't access any variables that were initialized inside the block.

```Ruby
loop do
  x = 42
  break
end
puts x     # Raises an error -- x is not in scope outside of the block
```

## `while`

- Unlike the `loop` method, `while` is not implemented as a method. One consequence of this difference is, that unlike `loop`, a `while` loop does not have its own scope -- the entire body of the loop is in the same scope as the code that contains the `while` loop:

  ```Ruby
  x = 0
  while x < 5
    y = x * x
    x += 1
  end

  puts y # 16
  ```

- Same is true with `until` and `for`.

## `while` vs `until`

The `until` loop is the opposite of the `while` loop. A `while` loop continues for as long as the condition is true, whereas an `until` loop continues for as long as the condition is false.

```Ruby
while gets.chomp != "yes" do
  puts "Will you go to prom with me?"
end
```

is equivalent to

```Ruby
until gets.chomp == "yes" do
  puts "Will you go to prom with me?"
end
```

## Ranges

- A range represents an interval of values. The range may include or exclude its ending value.

  ```Ruby
  (1..2)  # includes its ending value
  (1...2) # excludes its ending value
  ```

- We can make ranges of letters, too!

  ```Ruby
  ('a'..'d')  # a, b, c, d
  ```

## Upto and Downto Loops

You can use these methods to iterate from a starting number either up to or down to another number, respectively.

```Ruby
5.upto(10) {|num| print "#{num} " }     #=> 5 6 7 8 9 10

10.downto(5) {|num| print "#{num} " }   #=> 10 9 8 7 6 5
```

## `break` and `next`

- **`break`:** breaks a loop
- **`next`:** moves to next value of the loop

# Arrays

- When you reference an index of a string that is beyond the length of the string, Ruby returns `nil` and doesn't throw an error.

  ```Ruby
  string = "Welcome"
  string[7]   #=> nil
  ```

## Initialize an Array

```Ruby
a = [1, 2, 3]                 # => [1, 2, 3]
a = %w[foo bar baz]           # => ["foo", "bar", "baz"]
a = Array.new(3)              # => [nil, nil, nil]
a = Array.new(3, 7)           # => [7, 7, 7]
Array(["a", "b"])             # => ["a", "b"]
Array(1..5)                   # => [1, 2, 3, 4, 5]
```

## Add/Remove items

- To add elements at the end of an array, use `push` or shovel (`<<`) operator.
- To remove elements from the end of an array, use `pop`.
- To add elements at the beginning of an array, use `unshift`
- To remove elements from the beginning of an array, use `shift`
- `pop` and `shift` returns the element that was removed.
- `pop` and `shift` can take arguments.

  ```Ruby
  num_array = [1, 2]
  num_array.push(3, 4)      #=> [1, 2, 3, 4]
  num_array << 5            #=> [1, 2, 3, 4, 5]
  num_array.pop             #=> 5
  num_array.unshift(0)      #=> [0, 1, 2, 3, 4]
  num_array.shift           #=> 0
  num_array.pop(2)          #=> [3, 4]
  num_array.shift(2)        #=> [1, 2]
  ```

- Use `insert` to add a new element at any position.

  ```Ruby
  arr.insert(3, 'apple')
  ```

## Delete an item

- Use `delete_at` method to remove an element at a specific index.
- Use `delete` method to remove an element by value.
- **Both methods are destructive. They change the array permanently.**

  ```Ruby
  a = [1, 2, 2, 3, 4]
  a.delete_at(0)             #=> 1
  a.delete(2)                #=> 2
  a                          #=> [3, 4]
  ```

## Check for the Existence of an Item

- Use the `include?` method.

## Check If Two Arrays Are Equal

- Use the `==` operator

  ```Ruby
  a = [1, 2, 3]
  b = [1, 2, 3]
  a == b             #=> true
  ```

## Convert An Array into a String

- Use `join` method.

  ```Ruby
  letters = %w(a b c d)
  letters.join             #=> "abcd"
  ```

## Convert a String into An Array

- Use `split` method.

  ```Ruby
  "a b c".split             #=> ["a", "b", "c"]
  ```

## Convert a Multi-dimensional Array Into a Regular Array

- Use the `flatten` method.

## Remove `nil` values From an Array

- Use the `compact` method.

## Remove duplicate values From an Array

- Use the `uniq` method.

## Iterate an Array From the End

- Use the `reverse_each` method.

## Operations With Multiple Arrays

### Join/Merge Two Arrays

- Use the `concat` method, or `+` operator.

  ```Ruby
  # Faster, because this changes the users array
  users.concat(new_users)

  # Slower, because this creates a new array
  users += new_users
  ```

### Remove elements from one array

- Use the `-` operator. It will remove all elements that appear in the second array.

  ```Ruby
  users = users - users_to_delete
  ```

### Find intersection of Two Arrays

```Ruby
users & new_users
```

## Nested Arrays

- [The Odin Project](https://www.theodinproject.com/lessons/ruby-nested-collections#nested-arrays)
  - Use `dig` method to access elements.

## Misc

- The methods that have a question mark at the end are called **predicates**.

### `take` vs `first`

- `take` requires an argument; it returns an empty array if the array is empty.
- `first` can be called without an argument.

  - It returns `nil` if the array is empty and the argument is absent.
  - It returns empty array if the array is empty and we provide an argument.

## `reject!` vs `delete_if`

- `reject` - create a new array without elements that match and return the new array
- `delete_if` - delete elements that match from current array and return the array
- `reject!` - delete elements that match from current array. Return the array if something was rejected, or `nil` when none.

## Reading Resources

- [The Odin Project](https://www.theodinproject.com/lessons/ruby-arrays)
- [LaunchSchool](https://launchschool.com/books/ruby/read/arrays)
- [How to Use Ruby’s Array Class](https://www.rubyguides.com/2015/05/ruby-arrays/)
- [Ruby Sets](https://www.rubyguides.com/2018/08/ruby-set-class/)

# Hash

- If you try to access a key that doesn’t exist in the hash, it will return `nil`.

  ```Ruby
  shoes["hiking"]   #=> nil
  ```

- Sometimes, this behavior can be problematic for you if silently returning a `nil`. Luckily, hashes have a `fetch` method that will raise an error when you try to access a key that is not in your hash.

  ```Ruby
  shoes.fetch("hiking")   #=> KeyError: key not found: "hiking"
  ```

- [Different ways of accessing hash](https://chatgpt.com/s/t_691b4c66b8088191be43b2f75e76e068)
- [Hashes as Optional Parameters](https://launchschool.com/books/ruby/read/hashes#hashesasoptionalparameters)
- [Common Hash Methods](https://launchschool.com/books/ruby/read/hashes#commonhashmethods)
- [A Note on Hash Order](https://launchschool.com/books/ruby/read/hashes#anoteonhashorder)

## Creating Hash

### `Hash.new(0)`

- `Hash.new(0)` creates a new Hash with a default value of `0`.
- When you access a key that does not exist, instead of returning `nil`, the hash will return `0`.

  ```Ruby
  h = Hash.new(0)

  h[:a]     # => 0   (default value)
  h[:b]     # => 0
  ```

- It’s very common for counting, tallying, or building histograms.
- [Explain `Hash.new(0)`](https://chatgpt.com/s/t_693b3470f500819193a5fc597d78bc9f)

## Nested Hashes

- Similar to nested arrays, if you try to access a key in a nonexistent nested hash, it will raise an `NoMethodError`, therefore you may want to use the `#dig` method.

# Methods

## [The `reduce` method](https://www.theodinproject.com/lessons/ruby-basic-enumerable-methods#the-reduce-method)

# Class

- A class is a blueprint or template for creating objects.
  - You can think of classes as basic outlines of what an object should be made of and what it should be able to do.
- Classes hold data, and methods that interact with that data, and are used to instantiate objects.
- When defining a class, we typically focus on two things: state and behaviors.
  - State refers to the data associated to an individual object (which are tracked by **instance variables**).
  - Behaviors are what objects are capable of doing. We define these behaviors as **instance methods** in a class.
- All objects of the same class have the same behaviors, though they contain different states.
- [LaunchSchool](https://launchschool.com/books/oo_ruby/read/classes_and_objects_part1)

## Mixin

- A mixin can basically be thought of as a set of code that can be added to one or more classes to add additional capabilities without using inheritance.
  - In Ruby, mixins are modules that a class can include or extend.
- mixin is a design pattern.
- Ruby implements the single inheritance mechanism, which means that a class can only inherit from one other class. We may often need to inherit from more classes. In Ruby, we can cover that need by using the composition over inheritance pattern.
- This is doable by using the mixins. When we mix in a piece of code in another Ruby class we are adding to this class more behavior without using inheritance.

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

### Differences between a module and a plain Ruby class

- We can't instantiate modules, so no objects can be created from it.
- We can't inherit from modules, so we use them as mixins instead.
- Modules are standalone code, so there's no inheritance hierarchy of modules.

### Include vs Extend vs Prepend

- By using `include` and `prepend` keywords, the instance methods of a module becomes instance methods of the class that extends it. By using `extend`, the instance methods of a module becomes class methods of the class that extends it.
  - `include`/`extend` only adds instance methods of the module as instance/class methods to the class where it is included. It does not apply to the class methods of the module.
- While `include` and `prepend` both works similar in functionality, the difference comes where the module will be added in the ancestor chain.
- When you `include` a module, Ruby will insert the module into the class's ancestry chain just above the class that includes it (between the class that includes it and it's superclass).
- In `prepend` the module is added before the class in the ancestor chain. So, the module methods take precedence over any methods with the same name defined in the class.
- But, when you `extend` a module, Ruby will not insert the module into the class's ancestry chain.
- If it makes sense for an instance of a class to implement the behaviour, then you would include the module. Then each instance has access to the module methods.
- If the behaviour is not tied to a particular instance, then you can extend the module. Then the methods will be available as class methods.

  ```Ruby
  module Animal
    def say_hello
      puts "Hello from Animal module"
    end
  end

  class Human
    include Animal

    def say_hello
      puts "Hello from Human class"
    end
  end

  class Dog
    prepend Animal

    def say_hello
      puts "Hello from Dog class"
    end
  end

  class Cat
    extend Animal

    def say_hello
      puts "Hello from Cat class"
    end
  end

  Human.new.say_hello #=> Hello from Human class
  Dog.new.say_hello   #=> Hello from Animal module
  Cat.new.say_hello   #=> Hello from Cat class
  Cat.say_hello       #=> Hello from Animal module
  Human.ancestors     #=> [Human, Animal, Object, Kernel, BasicObject]
  Dog.ancestors       #=> [Animal, Dog, Object, Kernel, BasicObject]
  Cat.ancestors       #=> [Cat, Object, Kernel, BasicObject]
  ```

- `extend` adds methods as `singleton_methods` to Cat class.

  ```Ruby
  Cat.singleton_methods #=>[say_hello]
  ```

### Use of `super` with `include` and `prepend`

- `Animal` class is the ancestor of `Human` class. So, we can invoke `super` inside `say_hello` method of `Animal` class.

  ```Ruby
  class Human
    include Animal

    def say_hello
      super
      puts "Hello from Human class"
    end
  end

  puts Human.new.say_hello #=> Hello from Animal module
                           #=> Hello from Human class
  ```

- But if we use `prepend` (as in `Dog` class), we can call the ancestors from `Animal` class.

  ```Ruby
    module Animal
      def say_hello
        super
        puts "Hello from Animal module"
      end
    end

    class Dog
      prepend Animal

      def say_hello
        puts "Hello from Dog class"
      end
    end

    puts Dog.new.say_hello #=> Hello from Dog class
                            #=> Hello from Animal module
  ```

- If you include several modules, the module which was included last will be the first to appear in the ancestors chain:

  ```Ruby
  module CalculateInvoice
    # ...
  end

  module GenerateInvoice
    # ...
  end

  class Invoice
    include CalculateInvoice
    include GenerateInvoice
  end

  Invoice.ancestors       #=> [Invoice, GenerateInvoice, CalculateInvoice, Object, Kernel, BasicObject]
  ```

#### References

- [Ruby Modules and Extend, Include, and Prepend keywords](https://blog.rubyonrails.ba/articles/ruby-modules-and-extend-include-and-prepend-keywords)
- [Modules in Ruby: Include vs Extend vs Prepend](https://amitnatani.medium.com/modules-in-ruby-include-vs-extend-vs-prepend-4ea3cec2cc69)
- [Ruby Include, Extend and Prepend](https://hackmd.io/@nMuhqqCnRo-W7AZ9CGKD1g/SkzT_PW5q)
- [Ruby Modules: include vs extend vs prepend](https://dev.to/abbiecoghlan/ruby-modules-include-vs-extend-vs-prepend-4gmc)
- [Include, prepend and extend with Ruby modules](https://albertoalmagro.com/include-prepend-and-extend-with-ruby-modules/)

### The Ancestors chain

The ancestor chain is the order of lookup Ruby follows when determining if a method is defined on an object.

#### References

- [Include, prepend and extend with Ruby modules](https://albertoalmagro.com/include-prepend-and-extend-with-ruby-modules/)
- [Include, Extend, And Prepend In Ruby](https://veerpalbrar.github.io/blog/2021/11/26/Include,-Extend,-and-Prepend-In-Ruby)
- [Understanding Ancestor Chains in Ruby](https://www.mintbit.com/blog/understanding-ancestor-chains-in-ruby)
- [Metaprogramming, ancestors chain and super](https://dev.to/wizardhealth/metaprogramming-ancestors-chain-and-super-2pbd)
- [Up the Ancestor Chain with method_missing](https://blog.appsignal.com/2019/05/07/method-missing.html)

## Method Lookup

- [LaunchSchool](https://launchschool.com/books/oo_ruby/read/the_object_model#methodlookup)

## Instance Variables

- It is a variable that exists as long as the object instance exists and it is one of the ways we tie data to objects.
- Instance variables are responsible for keeping track of information about the **state** of an object.
- Every object's state is distinct, and instance variables are how we keep track.

## Instance Methods

- With instance methods we add behaviors to to our class.
- All objects of the same class have the same behaviors, though they contain different states.

## Accessor Methods

- As a convention, these methods have the same name as the instance variable.

  ```Ruby
  def initialize(name)
    @name = name
  end

  def name
    @name
  end

  def name=(name)
    @name = name
  end
  ```

- Setter methods always return the value that is passed in as an argument, regardless of what happens inside the method. If the setter tries to return something other than the argument's value, it just ignores that attempt.

  ```Ruby
  class Dog
    def name=(name)
      @name = name
      "Bob"              # value will be ignored
    end
  end
  ```

### Calling Methods With self

- [LaunchSchool](https://launchschool.com/books/oo_ruby/read/classes_and_objects_part1#callingmethodswithself)
- prefixing `self`. is not restricted to just the accessor methods; you can use it with any instance method.
- The general rule from the Ruby style guide is to "Avoid self where not required."

## Class Variable

- Just as instance variables capture information related to specific instances of classes (i.e., objects), we can create variables for an entire class that are appropriately named class variables.
- Class Variables are available to all instances of that class.
- Class variables are created using two `@` symbols like so: `@@`.

  ```Ruby
  class Square
    @@sides = 4

    def sides
      @@sides
    end
  end

  puts Square.new.sides #=> 4
  ```

- When using an Instance Variable, the same is not true:

  ```Ruby
  class Square
    @sides = 4  # this not set for each instance. It is set on the class level.

    def sides
      @sides
    end
  end

  puts Square.new.sides #=> nil
  ```

- To make it work use `initialize` or use a constant

  ```Ruby
  class Square
    def initialize
      @sides = 4
    end

    def sides
      @sides
    end
  end

  puts Square.new.sides #=> nil

  # Using constant
  class Square
    SIDES = 4

    def sides
      SIDES
    end
  end

  puts Square.new.sides # => 4
  ```

## Class Methods

- Class methods are methods we can call directly on the class itself, without having to instantiate any objects.
- When defining a class method, we prepend the method name with the reserved word `self`.

### Why do we need class methods?

Class methods are where we put functionality that does not pertain to individual objects. Objects contain state, and if we have a method that does not need to deal with states, then we can just use a class method.

## Constants

- When creating classes there may also be certain variables that you never want to change. You can do this by creating what are called **constants**.
- You define a constant by using an upper case letter at the beginning of the variable name.
- While technically constants just need to begin with a capital letter, most Rubyists will make the entire variable uppercase.
- **It is possible to reassign a new value to constants but Ruby will throw a warning**.

## `self`

- `self` is a special variable that points to the object that "owns" the currently executing code.

so far we've seen two clear use cases for `self`:

1. Use `self` when calling setter methods from within the class. In our earlier example we showed that `self` was necessary in order for our `change_info` method to work properly. We had to use `self` to allow Ruby to disambiguate between initializing a local variable and calling a setter method.

2. Use `self` for class method definitions.

Follow this rule: from within a class

1. `self`, inside of an instance method, references the instance (object) that called the method - the calling object.

2. `self`, outside of an instance method, references the class and can be used to define class methods.

- [More About self](https://launchschool.com/books/oo_ruby/read/classes_and_objects_part2#moreaboutself)
- [Understanding `self` in Ruby](https://www.honeybadger.io/blog/ruby-self-cheat-sheet/)

# Inheritance

- Inheritance is when a class inherits behavior from another class.
- The class that is inheriting behavior is called the subclass and the class it inherits from is called the superclass.
- We use inheritance as a way to extract common behaviors from classes that share that behavior, and move it to a superclass. This lets us keep logic in one place.
- Inheritance can be a great way to remove duplication in your code base (DRY).
- Ruby implements the single inheritance mechanism, which means that a class can only inherit from one other class. We may often need to inherit from more classes. In Ruby, we can cover that need by using the composition over inheritance pattern.
  - This is doable by using the mixins. When we mix in a piece of code in another Ruby class we are adding to this class more behavior without using inheritance.

## super

- When you call `super` from within a method, it searches the method lookup path for a method with the same name, then invokes it.
- A common way of using `super` is with `initialize` method.
- Inside `initialize` method `super` automatically forwards the arguments that were passed to the method from which `super` is called.
- If you call `super()` -- with parentheses -- it calls the method in the superclass with no arguments at all.
- [Launchschool](https://launchschool.com/books/oo_ruby/read/inheritance#super)

## Modules

### What is a module?

- A module is a collection of methods and constants.
- In Ruby modules provide two great benefits:
  - We can create namespaces in our code to prevent name clashes.
  - We can use them as mixins to share code across the application.
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
- In Ruby, a mixin is code wrapped up in a module that a class can include or extend.
- With minin we can keep our code clean and the responsibilities separated, as they should be.

# Composition

In composition, we create classes that are responsible to provide specific functionalities to others

```

```
