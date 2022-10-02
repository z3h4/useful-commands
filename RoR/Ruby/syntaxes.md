## [||= (Double Pipe / Or Equals)](http://www.rubyinside.com/what-rubys-double-pipe-or-equals-really-does-5488.html)

- `a ||= b` is NOT equivalent to `a = a || b`, it is actually `a || a = b`
- `a` is only set if `a` is logically false (i.e. if it's `nil` or `false`) because `||` is 'short circuiting'. That is, if the left hand side of the `||` comparison is `true`, there's no need to check the right hand side.

## [What is the Ruby <=> (spaceship) operator?](https://stackoverflow.com/questions/827649/what-is-the-ruby-spaceship-operator)

Basically instead of returning 1 (true) or 0 (false) depending on whether the arguments are equal or unequal, the spaceship operator will return 1, 0, or −1 depending on the value of the left argument relative to the right argument.

    a <=> b :=
      if a < b then return -1
      if a = b then return  0
      if a > b then return  1
      if a and b are not comparable then return nil

It's useful for sorting an array.

- **Sort by zip code, ascending**

      my_objects.sort! { |a, b| a.zip <=> b.zip }

- **Sort by zip code, descending**

      my_objects.sort! { |a, b| b.zip <=> a.zip }

- **Sort by last name, then first**

      my_objects.sort! { |a, b| 2 * (a.last <=> b.last) + (a.first <=> b.first) }

## [Difference between "and" and && in Ruby?](https://stackoverflow.com/questions/1426826/difference-between-and-and-in-ruby)

- [And/Or](https://graceful.dev/courses/the-freebies/modules/ruby-language/topic/episode-125-and-or/)
- [Using “and” and “or” in Ruby](https://avdi.codes/using-and-and-or-in-ruby/)
