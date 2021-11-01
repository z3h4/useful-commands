### `compact()`

- Returns a copy of self with all `nil` elements removed.

      [ "a", nil, "b", nil, "c", nil ].compact
        #=> [ "a", "b", "c" ]

### `compact!()`

- Removes `nil` elements from the array.
- Returns `nil` if no changes were made, otherwise returns the array without `nil` values.

      [ "a", nil, "b", nil, "c" ].compact!
         #=> [ "a", "b", "c" ]
      [ "a", "b", "c" ].compact!
         #=> nil
