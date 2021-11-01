## Methods

### `blank?()`

- An object is blank if it’s false, empty, or a whitespace string.
- For example, `false`, ”, ‘ ’, `nil`, [], and {} are all blank.
- This simplifies

      !address || address.empty?

  to

      address.blank?

- The opposite of this method is `present?`

### `present?()`

- An object is `present` if it’s not blank.
