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

## `join`

- Returns a string created by converting each element of the array to a string, separated by the given separator.

      [ "a", "b", "c" ].join        #=> "abc"
      [ "a", "b", "c" ].join("-")   #=> "a-b-c"

- For nested arrays, join is applied recursively:

      [ "a", [1, 2, [:x, :y]], "b" ].join("-")   #=> "a-1-2-x-y-b"
