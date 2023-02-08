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
