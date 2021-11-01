## Methods

### `compact_blank!()`

- Removes all blank elements from the `Array` in place and returns `self`.
- Uses `Object#blank?` for determining if an item is blank.
- Available on Rails version > v6.1.3.1

      a = [1, "", nil, 2, " ", [], {}, false, true]
      a.compact_blank!    # =>  [1, 2, true]
      a                   # =>  [1, 2, true]
