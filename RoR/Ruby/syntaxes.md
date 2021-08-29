# [||= (Double Pipe / Or Equals)](http://www.rubyinside.com/what-rubys-double-pipe-or-equals-really-does-5488.html)

-  `a ||= b` is NOT equivalent to `a = a || b`, it is actually `a || a = b`
  -  `a` is only set if `a` is logically false (i.e. if it's `nil` or `false`) because `||` is 'short circuiting'. That is, if the left hand side of the `||` comparison is `true`, there's no need to check the right hand side.
