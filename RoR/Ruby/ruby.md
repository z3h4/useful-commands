# How to run Ruby code from terminal?

- If Ruby is installed, then

      ruby yourfile.rb

# Start the interactive Ruby environment from terminal

- run

      irb

# Data Types

## Integers and Floats

- When doing arithmetic with two integers in Ruby, the result will always be an integer.

      17 / 5    #=> 3, not 3.4

- To obtain an accurate answer, just replace one of the integers in the expression with a float.

      17 / 5.0  #=> 3.4

- When Ruby converts a float to an integer, the decimal places are simply cut off. Ruby doesn’t do any rounding in this conversion.

      13.0.to_i #=> 13
      13.9.to_i #=> 13

## Ranges

A range represents an interval of values. The range may include or exclude its ending value.

      (1..2)  # includes its ending value
      (1...2) # excludes its ending value

## `require` vs `require_relative`

- Use `require` for installed gems or external files.
- Use `require_relative` for referring to files within your directory.

  - files should be "within" the current directory tree as opposed to "up", e.g. don't use

         require_relative '../../../filename'

- `require` uses your `$LOAD_PATH` to find the files. `require_relative` uses the current location of the file using the statement.
