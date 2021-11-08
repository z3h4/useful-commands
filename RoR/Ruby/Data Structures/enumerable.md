- Enumeration refers to traversing over objects.
- In Ruby, we call an object enumerable when it describes a set of items and a method to loop over each of them.
- The Enumerable module relies on a method named `#each`, which needs to be implemented in any class it’s included in.
- If we call the `#each` method on an array without passing a block to execute for each of its elements, we’ll receive an instance of Enumerator.

      irb> [1,2,3].each
      => #<Enumerator: [1, 2, 3]:each>

# `detect`

- Finds and returns the first element matching condition.
- Return `nil` if nothing is matched
- `detect` stops iterating after the condition returns true for the first time.

      [1,2,3,4,5,6,7].detect { |x| x.between?(3,4) } 		#=> 3

# `select`

- Finds and returns all the elements matching the condition.
- `select` will iterate until the end of the input list is reached and returns all of the items where the block returned true. 
- Thus, `select` returns an array.
- Returns empty array if no matched element is found.

      [1,2,3,4,5].select { |num| num.even? }   #=> [2, 4]

# `find`

- `find` is an alias for `detect` method.
- Finds and returns the first element matching condition. Internally calls `detect`.

		(1..100).find    { |i| i % 5 == 0 and i % 7 == 0 }   #=> 35

# `find_all`

- `find_all` is an alias for `setect` method.

		(1..10).find_all { |i|  i % 3 == 0 }   #=> [3, 6, 9]

# `reject`

- It is the opposite of `select`.
- Returns an array for all elements of `enum` for which the given block returns false.

		[1, 2, 3, 4, 5].reject { |num| num.even? } #=> [1, 3, 5]
