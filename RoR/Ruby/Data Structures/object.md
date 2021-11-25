# Methods

## `send(*args)`

- Invokes the method identified by symbol, passing it any arguments specified.
- When the method is identified by a string, the string is converted to a symbol.

      class Klass
        def hello(*args)
          "Hello " + args.join(' ')
        end
      end
      k = Klass.new
      k.send :hello, "gentle", "readers"   #=> "Hello gentle readers"
