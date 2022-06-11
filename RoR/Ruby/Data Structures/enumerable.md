- Enumeration refers to traversing over objects.
- In Ruby, we call an object enumerable when it describes a set of items and a method to loop over each of them.
- The Enumerable module relies on a method named `#each`, which needs to be implemented in any class it’s included in.
- If we call the `#each` method on an array without passing a block to execute for each of its elements, we’ll receive an instance of Enumerator.

      irb> [1,2,3].each
      => #<Enumerator: [1, 2, 3]:each>

## `with_index`

- Iterates the given block for each element with an index, which starts from offset.
- If no block is given, returns a new `Enumerator` that includes the index, starting from offset
- offset is the starting index.

      a=[11,22,31,224,44].to_enum
      => #<Enumerator: [11, 22, 31, 224, 44]:each>
      a.with_index { |val,index| puts "index: #{index} for #{val}" }
      index: 0 for 11
      index: 1 for 22
      index: 2 for 31
      index: 3 for 224
      index: 4 for 44

      a=[11,22,31,224,44].to_enum
      => #<Enumerator: [11, 22, 31, 224, 44]:each>
      a.with_index(2){ |val,index| puts "index: #{index} for #{val}" if val > 30 }
      index: 4 for 31
      index: 5 for 224
      index: 6 for 44
      => [11, 22, 31, 224, 44

## `each_with_index()`

- Same as `Enumerator#with_index(0)`, i.e. there is no starting offset.
- If no block is given, a new `Enumerator` is returned that includes the index.

      a=[11,22,31,224,44].each_with_index { |val,index| puts "index: #{index} for #{val}" if val < 30}
      index: 0 for 11
      index: 1 for 22
      => [11, 22, 31, 224, 44]

- Below couldn’t produce the output, as `with_index` couldn’t work on the array. To make it workble, we need to first convert it to enumerator. And that can be done via the help of `.to_enum`, `.each`, or `.map`.

      a = [11,22,31,224,44].with_index { |val,index| puts "index: #{index} for #{val}" if val < 30}
      =>NoMethodError: undefined method `with_index' for [11, 22, 31, 224, 44]:Array

- Here is the working version with `with_index`:

      a = [11,22,31,224,44].each.with_index { |val,index| puts "index: #{index} for #{val}" if val < 30}
      index: 0 for 11
      index: 1 for 22
      => [11, 22, 31, 224, 44]

## `with_object()`

- Iterates the given block for each element with an arbitrary object, obj, and returns obj.
- If no block is given, returns a new `Enumerator`.

      to_three = Enumerator.new do |y|
        3.times do |x|
          y << x
        end
      end

      to_three_with_string = to_three.with_object("foo")
      to_three_with_string.each do |x, string|
        puts "#{string}: #{x}"
      end

      # => foo:0
      # => foo:1
      # => foo:2

## `each_with_object()`

- With `each_with_object`, the array'll be converted to Enumerator first, then works on the `with_object`.
- With `with_object`, we need to first convert the array to Enumerator. You can use `.to_enum`, `.each`, or `.map` to convert the array.

      %w(foo bar).map.with_object({}) { |str, hsh| hsh[str] = str.upcase }
      => {"foo"=>"FOO", "bar"=>"BAR"}

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
