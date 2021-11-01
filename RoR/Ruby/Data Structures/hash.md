## Create a Hash with string keys

- Colon make your key a symbol.
- Use hashrocket instead of colon

        h = { "a" => 123 }

## Methods

### `compact()`

- Returns a hash with all `nil` elements removed.

      hash = { a: true, b: false, c: nil }
      hash.compact        # => { a: true, b: false }
      hash                # => { a: true, b: false, c: nil }
      { c: nil }.compact  # => {}
      { c: true }.compact # => { c: true }

### compact!()

- Replaces current hash with non `nil` values.
- Returns `nil` if no changes were made, otherwise returns the hash.

      hash = { a: true, b: false, c: nil }
      hash.compact!        # => { a: true, b: false }
      hash                 # => { a: true, b: false }
      { c: true }.compact! # => nil
