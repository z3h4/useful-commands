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
"hello world".split  #=> ["hello", "world"]
"hello".split("")    #=> ["h", "e", "l", "l", "o"]
```

### Remove Leading/Trailing Spaces from a String

```Ruby
" hello, world   ".strip  #=> "hello, world"
```

## Why `puts` method returns `nil`?

- Everything in Ruby has a return value. When a piece of code doesn’t have anything to return, it will return `nil`.
- The `puts` method prints out a string and returns nothing, so we see `nil` being returned after the string is displayed.

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
=> 0

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

- Example

```Ruby
a = puts "stuff"
puts a   #=> nil
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

- [Understanding The Differences Between Puts, Print & P](https://www.rubyguides.com/2018/10/puts-vs-print/)

# Conditional Logic

## == vs eq? vs eql? vs equal?

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

- `eq?` uses the `==` operator for comparison, and `eql?` ignores type conversions.

- [TheOdinProject](https://www.theodinproject.com/lessons/ruby-conditional-logic#boolean-logic)
- [Difference Between ==, eql?, equal? in ruby](https://medium.com/@khalidh64/difference-between-eql-equal-in-ruby-2ffa7f073532)
- https://stackoverflow.com/a/32926980

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

Basically instead of returning 1 (true) or 0 (false) depending on whether the arguments are equal or unequal, the spaceship operator will return 1, 0, or −1 depending on the value of the left argument relative to the right argument.

    a <=> b :=
      if a < b then return -1
      if a = b then return  0
      if a > b then return  1
      if a and b are not comparable then return nil

It's useful for sorting an array.

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

- [TheOdinProject](https://www.theodinproject.com/lessons/ruby-conditional-logic#boolean-logic)

# Parameters and Arguments

- [Parameters and Arguments](https://www.theodinproject.com/lessons/ruby-methods#parameters-and-arguments)
- [Naked asterisk parameters in Ruby](https://andrewberls.com/blog/post/naked-asterisk-parameters-in-ruby)

## Anonymous splat parameter

- In ruby, we can define a parameter without a name using the anonymous splat parameter.
- With this we can ignore the arguments with which a method was called.
- Anonymous splat parameter actually comes into play when you’re not referring to the arguments inside the function, and instead calling super.

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

- Use the ` reverse_each` method.

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

- [Hashes as Optional Parameters](https://launchschool.com/books/ruby/read/hashes#hashesasoptionalparameters)
- [Common Hash Methods](https://launchschool.com/books/ruby/read/hashes#commonhashmethods)
- [A Note on Hash Order](https://launchschool.com/books/ruby/read/hashes#anoteonhashorder)

## Nested Hashes

- Similar to nested arrays, if you try to access a key in a nonexistent nested hash, it will raise an `NoMethodError`, therefore you may want to use the `#dig` method.

# Methods

## [The `reduce` method](https://www.theodinproject.com/lessons/ruby-basic-enumerable-methods#the-reduce-method)

# Class

- A class is a blueprint or template for creating objects.
- When defining a class, we typically focus on two things: state and behaviors.
  - State refers to the data associated to an individual object (which are tracked by instance variables).
  - Behaviors are what objects are capable of doing. We define these behaviors as instance methods in a class.
- [LaunchSchool](https://launchschool.com/books/oo_ruby/read/classes_and_objects_part1)

## Mixin

- A mixin is a set of code that can be added to other classes.
  - In Ruby, mixins are modules that we include in classes where they are needed.
- mixin is a design pattern
- Ruby implements the single inheritance mechanism, which means that a class can only inherit from one other class. We may often need to inherit from more classes. In Ruby, we can cover that need by using the composition over inheritance pattern.
- This is doable by using the mixins. When we mix in a piece of code in another Ruby class we are adding to this class more behavior without using inheritance.

## Module

- A module is a collection of methods and constants.
  - Modules give you an easy way to namespace the rest of your code.
- In Ruby modules provide two great benefits:
  - we can create namespaces to prevent name clashes
  - we can use them as mixins to share code across the application.
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

## Method Lookup

- [LaunchSchool](https://launchschool.com/books/oo_ruby/read/the_object_model#methodlookup)

## Instance Variables

- It is a variable that exists as long as the object instance exists and it is one of the ways we tie data to objects.
- instance variables are responsible for keeping track of information about the **state** of an object.

## Instance Methods

- With instance methods we add behaviors to to our class.
- All objects of the same class have the same behaviors, though they contain different states.

## Accessor Methods

- These methods have the same name as the instance variable.

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
      "Laddieboy"              # value will be ignored
    end
  end
  ```

### Calling Methods With self

- [LaunchSchool](https://launchschool.com/books/oo_ruby/read/classes_and_objects_part1#callingmethodswithself)
- prefixing `self`. is not restricted to just the accessor methods; you can use it with any instance method.
- The general rule from the Ruby style guide is to "Avoid self where not required."

## Class Methods

- Class methods are methods we can call directly on the class itself, without having to instantiate any objects.
- When defining a class method, we prepend the method name with the reserved word `self`.

### Why do we need class methods?

Class methods are where we put functionality that does not pertain to individual objects. Objects contain state, and if we have a method that does not need to deal with states, then we can just use a class method.

## Constants

- You define a constant by using an upper case letter at the beginning of the variable name.
- While technically constants just need to begin with a capital letter, most Rubyists will make the entire variable uppercase.
- It is possible to reassign a new value to constants but Ruby will throw a warning.

## `self`

so far we've seen two clear use cases for `self`:

1. Use `self` when calling setter methods from within the class. In our earlier example we showed that `self` was necessary in order for our `change_info` method to work properly. We had to use `self` to allow Ruby to disambiguate between initializing a local variable and calling a setter method.

2. Use `self` for class method definitions.

Follow this rule: from within a class

1. `self`, inside of an instance method, references the instance (object) that called the method - the calling object. Therefore, `self.weight=` is the same as `sparky.weight=`, in our example.

2. `self`, outside of an instance method, references the class and can be used to define class methods. Therefore if we were to define a name class method, def `self.name=(n)` is the same as `def GoodDog.name=(n)`.

- [More About self](https://launchschool.com/books/oo_ruby/read/classes_and_objects_part2#moreaboutself)
