## [||= (Double Pipe / Or Equals)](http://www.rubyinside.com/what-rubys-double-pipe-or-equals-really-does-5488.html)

- `a ||= b` is NOT equivalent to `a = a || b`, it is actually `a || a = b`
- `a` is only set if `a` is logically false (i.e. if it's `nil` or `false`) because `||` is 'short circuiting'. That is, if the left hand side of the `||` comparison is `true`, there's no need to check the right hand side.

## [Difference between "and" and && in Ruby?](https://stackoverflow.com/questions/1426826/difference-between-and-and-in-ruby)

- [And/Or](https://graceful.dev/courses/the-freebies/modules/ruby-language/topic/episode-125-and-or/)
- [Using “and” and “or” in Ruby](https://avdi.codes/using-and-and-or-in-ruby/)

## [Understanding Ruby - Triple Equals](https://dev.to/baweaver/understanding-ruby-triple-equals-2p9c)
