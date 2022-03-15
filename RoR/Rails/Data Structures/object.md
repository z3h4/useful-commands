# Methods

## `blank?()`

- An object is blank if it’s false, empty, or a whitespace string.
- For example, `false`, ”, ‘ ’, `nil`, [], and {} are all blank.
- This simplifies

      !address || address.empty?

  to

      address.blank?

- The opposite of this method is `present?`

## `present?()`

- An object is `present` if it’s not blank.

## `presence()`

- Returns the receiver if it’s present otherwise returns `nil`.
- `object.presence` is equivalent to

      object.present? ? object : nil

- For example,

      state   = params[:state]   if params[:state].present?
      country = params[:country] if params[:country].present?
      region  = state || country || 'US'

  becomes

      region = params[:state].presence || params[:country].presence || 'US'
