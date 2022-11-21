# Basic Data Type

- [The Odin Project](https://www.theodinproject.com/lessons/ruby-basic-data-types)

### String vs Symbols

- Strings can be changed, so every time a string is used, Ruby has to store it in memory even if an existing string with the same value already exists. Symbols, on the other hand, are stored in memory only once, making them faster in certain situations.
- One common application where symbols are preferred over strings are the keys in hashes.
- Basically, a symbol is used when you want to reference something like a string but don't ever intend to print it to the screen or change it. It is often referred to as an immutable (i.e. unchangeable) string. While not 100% technically correct, it is a useful mnemonic device for now.

### Substrings

```Ruby
"hello"[0]      #=> "h"

"hello"[0..1]   #=> "he"

"hello"[0, 4]   #=> "hell"

"hello"[-1]     #=> "o"
```

### Why `puts` method returns `nil`?

- Everything in Ruby has a return value. When a piece of code doesn’t have anything to return, it will return `nil`.
- The `puts` method prints out a string and returns nothing, so we see `nil` being returned after the string is displayed.

### What is an expression?

- **An expression is anything that can be evaluated**, and pretty much everything you write in Ruby is an expression.
- An expression in Ruby always returns something, even if that's an error message or nil.

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
puts a
```

`a` is assigned to the value returned by `puts "stuff"`, which is `nil`. Therefore, `puts a` results in `nil` being printed out.

# Variables

### What is a method?

- methods as pieces of reusable code that your program can execute many times during its run.

### Variable Scopes

- [LaunchSchool](https://launchschool.com/books/ruby/read/variables#variablescope)
- [Variables as pointer](https://launchschool.com/books/ruby/read/more_stuff#variables_as_pointers)
- [A visual guide to variables](http://ruby.bastardsbook.com/chapters/variables/#visual-guide)
- [The classic variable swap](http://ruby.bastardsbook.com/chapters/variables/#h-2-6)
