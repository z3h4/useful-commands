# What is a literal in programming?

- A literal is "any notation for representing a value within source code".

  - In contrast identifiers refer to a value in memory.

- Examples:

      "hey" (a string)
      false (a boolean)
      3.14 (a real number)
      [1,2,3] (a list of numbers)
      (x) => x*x (a function)
      /^1?$|^(11+?)\1+$/ (a regexp)

- Some things that are not literals:

      std::cout (an identifier)
      foo = 0; (a statement)
      1+2 (an expression)

- Literals are never mutable because they are literally written in the source code and compiled into the final binary. Your program does not change your source code!
- An example showing that you cannot modify a literal:

      fn main() {
        1 += 2;
      }

- On the other hand, a literal can be copied into a variable and then the variable can be changed, but we still are not mutating the literal 1:

      fn main() {
        let mut a = 1;
        a += 2;
      }

- https://stackoverflow.com/questions/48411196/what-is-the-difference-between-literals-and-non-literals-other-than-the-fact-th

### difference between variable, constant, and literal

- A **variable** is a name that can represent different values during the execution of the program.
- A **constant** is a name that represents the same value throughout a program.
- But a **literal** is not a name — it is the value itself.

  - A literal can be a number, a character, or a string. For example, in the expression,

        x = 3

  x is a variable, and 3 is a literal.

# Rails Literals

- Literals create objects you can use in your program. Literals include:

  - Booleans and nil
  - Numbers
  - Strings
  - Symbols
  - Arrays
  - Hashes
  - Ranges
  - Regular Expressions
  - Procs

## Booleans and nil

- All objects except `nil` and `false` evaluate to a true value in conditional expressions.

## Numbers

- The underscore may be used to enhance readability for humans.
- You may place an underscore anywhere in the number.

      1234
      1_234

- The following numbers have the same value, 12.34. You may use underscores in floating point numbers as well.

      12.34
      1234e-2
      1.234E1

- You can use a special prefix to write numbers in decimal, hexadecimal, octal or binary formats.
- For decimal numbers use a prefix of `0d`, for hexadecimal numbers use a prefix of `0x`, for octal numbers use a prefix of `0` or `0o`, for binary numbers use a prefix of `0b`.
- The alphabetic component of the number is not case-sensitive.
- Example:

      0d170
      0D170

      0xaa
      0xAa
      0xAA
      0Xaa
      0XAa
      0XaA

      0252
      0o252
      0O252

      0b10101010
      0B10101010

- All these numbers have the same decimal value, 170. Like integers and floats you may use an underscore for readability.

## Strings

- Double-quote strings allow escaped characters such as `\n` for newline, `\t` for tab, `\\` for single backslash etc.
- Double-quote strings allow interpolation of other values using #{...}.
  - Any expression may be placed inside the interpolated section, but it's best to keep the expression small for readability.
- Interpolation may be disabled by escaping the “#” character or using single-quote strings:

      '#{1 + 1}' #=> "\#{1 + 1}"

### Percent Strings

- Besides `%(...)` which creates a String, The `%` may create other types of object.
- **As with strings, an uppercase letter allows interpolation and character escaping while a lowercase letter disables them.**
- These are the types of percent strings in ruby:

-**`%i`: Array of Symbols**

      %i(test)
      # => [:test]

      str = "other"
      %I(test_#{str})
      # => [:test_other]

- **`%q`**: String

  - `%q(...)` behaves like a single-quote string (no interpolation or character escaping) while `%Q` behaves as a double-quote string.

        x = "hi"
        %Q[#{x} Bob!]           #=> "hi Bob!"
        %q[#{x} Bob!]           #=> "\#{x} Bob!"
        %Q(1 + 1 is #{1 + 1})   #=> "1 + 1 is 2"
        %q(1 + 1 is #{1 + 1})   #=> "1 + 1 is \#{1 + 1}"

- **`%r`**: Regular Expression

  - `%r` (r lowercase is already interpolated, so, no `%R`)

- **`%s`** : Non-interpolated symbols

      %s[foo]
      => :foo

      %s[foo bar]
      => :"foo bar"

- **`%w`**: Array of Strings

      %w[Ruby Javascript Coffeescript]
      => ["Ruby", "Javascript", "Coffeescript"]

      language = 'Ruby'
      %W[#{language} Javascript Coffeescript]
      => ["Ruby", "Javascript", "Coffeescript"]

  - If you wish to include a space in one of the array entries you must escape it with a “\” character

        %w[one one-hundred\ one]
        #=> ["one", "one-hundred one"]

- **`%x`**: Interpolated shell command

  - Uses the ` (backtick) method and returns the standard output of running the command in a subshell.

        %x[echo language: #{language}]

  - **Backtick method**: Backticks (``) call a system program and return its output.

        `date`
        => Wed Sep 4 22:22:51 CEST 2013

- **Best Practice**

  - PreferredDelimiters:
    - default: `[]`
    - `%i`: `()`
  - https://www.rubydoc.info/gems/rubocop/RuboCop/Cop/Style/PercentLiteralDelimiters

- **`%[]`, `%q[]` and `%Q[]` all creates string. What are the differences?**

  - `%q`(no interpolation)
  - `%Q`(interpolation and backslashes)
  - `%`(interpolation and backslashes)
