## Create a Hash with string keys

- Colon make your key a symbol.
- Use hashrocket instead of colon

```Ruby
    h = { "a" => 123 }
```

## Methods

### `compact()`

- Returns a hash with all `nil` elements removed.

```Ruby
    hash = { a: true, b: false, c: nil }
    hash.compact        # => { a: true, b: false }
    hash                # => { a: true, b: false, c: nil }
    { c: nil }.compact  # => {}
    { c: true }.compact # => { c: true }
```

### `compact!()`

- Replaces current hash with non `nil` values.
- Returns `nil` if no changes were made, otherwise returns the hash.

```Ruby
    hash = { a: true, b: false, c: nil }
    hash.compact!        # => { a: true, b: false }
    hash                 # => { a: true, b: false }
    { c: true }.compact! # => nil
```

### [`delete_if()`](https://apidock.com/ruby/Hash/delete_if)

- Deletes every key-value pair from the hash for which block evaluates to true.

```Ruby
    h = { "a" => 100, "b" => 200, "c" => 300 }
    h.delete_if {|key, value| key < "b" }   #=> {"b"=>200, "c"=>300}
    h                                       #=> {"b"=>200, "c"=>300}
```

### [`reject()`](https://apidock.com/ruby/Hash/reject)

- Same as `delete_if`, but it returns a copy of the hash. Equivalent to `hsh.dup.delete_if`.

```Ruby
    h = { "a" => 100, "b" => 200, "c" => 300 }
    h.reject {|k,v| v > 100}  #=> {"a" => 100}
    h                         #=> { "a" => 100, "b" => 200, "c" => 300 }

```

### [`reject!()`](https://apidock.com/ruby/Hash/reject!)

- Equivalent to `delete_if`, but returns `nil` if no changes were made.
