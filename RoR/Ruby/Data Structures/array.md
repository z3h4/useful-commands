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

## `map`

- The main use for map is to transform data.
- Invokes the given block once for each element of `self`.
- Creates a new array containing the values returned by the block.
- If no block is given, an `Enumerator` is returned instead.

      a = [ "a", "b", "c", "d" ]
      a.collect { |x| x + "!" }         #=> ["a!", "b!", "c!", "d!"]
      a.map.with_index { |x, i| x * i } #=> ["", "b", "cc", "ddd"]
      a                                 #=> ["a", "b", "c", "d"]

## `map!`

- Invokes the given block once for each element of `self`, replacing the element with the value returned by the block.
- If no block is given, an `Enumerator` is returned instead.

      a = [ "a", "b", "c", "d" ]
      a.map! {|x| x + "!" }
      a #=> [ "a!", "b!", "c!", "d!" ]
      a.collect!.with_index {|x, i| x[0...i] }
      a #=> ["", "b", "c!", "d!"]

## `map` vs `collect`

- They are the same.
