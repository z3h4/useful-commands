## Methods

### `compact_blank()`

- Returns a new `Hash` without the blank values.
- Uses `Object#blank?` for determining if a value is blank.
- Available on Rails version > v6.1.3.1

      h = { a: "", b: 1, c: nil, d: [], e: false, f: true }
      h.compact_blank      # => { b: 1, f: true }
      h                    # => { a: "", b: 1, c: nil, d: [], e: false, f: true }

### `compact_blank!()`

- Removes all blank values from the `Hash` in place and returns `self`.
- Uses `Object#blank?` for determining if a value is blank.
- Available on Rails version > v6.1.3.1

      h = { a: "", b: 1, c: nil, d: [], e: false, f: true }
      h.compact_blank!      # => { b: 1, f: true }
      h                     # => { b: 1, f: true }
