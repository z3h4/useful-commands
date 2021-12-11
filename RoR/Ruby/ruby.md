# How to run Ruby code from terminal?

- If Ruby is installed, then

      ruby yourfile.rb

# Start the interactive Ruby environment from terminal

- run

      irb

## `require` vs `require_relative`

- Use `require` for installed gems or external files.
- Use `require_relative` for referring to files within your directory.

  - files should be "within" the current directory tree as opposed to "up", e.g. don't use

         require_relative '../../../filename'

- `require` uses your `$LOAD_PATH` to find the files. `require_relative` uses the current location of the file using the statement.

## `==` vs `eq` vs `eql` vs `equal`

- `a.equal?(b)`
  - object identity - `a` and `b` refer to the same object.
- `a.eql?(b)`
  - object equivalence - `a` and `b` have the same value.
- `a == b`

  - object equivalence - `a` and `b` have the same value with type conversions.

          2 == 2.0 # Output: => true

- `eq` uses the `==` operator for comparison, and `eql` ignores type conversions.
- https://medium.com/@khalidh64/difference-between-eql-equal-in-ruby-2ffa7f073532
- https://stackoverflow.com/a/32926980
