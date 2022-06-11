# Validations

- Validations are used to ensure that only valid data is saved into your database.
- Model-level validations are the best way to ensure that only valid data is saved into your database.

  - They are database agnostic, cannot be bypassed by end users, and are convenient to test and maintain.

- There are several other ways to validate data before it is saved into your database
  - **Database constraints** and/or **stored procedures** make the validation mechanisms database-dependent and can make testing and maintenance more difficult.
    - However, if your database is used by other applications, it may be a good idea to use some constraints at the database level.
  - **Client-side validations** can be useful, but are generally unreliable if used alone.
    - If they are implemented using JavaScript, they may be bypassed if JavaScript is turned off in the user's browser.
  - **Controller-level validations** can be tempting to use, but often become unwieldy and difficult to test and maintain.
    - Whenever possible, it's a good idea to keep your controllers skinny, as it will make your application a pleasure to work with in the long run.

# Common Validations

## String

### Validate presence of an attribute

    validates :name, presence: true

### Validate password confirmation

    validates_confirmation_of :password, message: "doesn't match."

### Validate checkbox checked

    validates_acceptance_of :terms

### Use condition in validation

    validates_presence_of :affiliate_id, if: :accepted?

## Numericality

- https://guides.rubyonrails.org/active_record_validations.html#numericality

### Validate value in a range

      validates :score, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 10 }

## Methods that trigger validations

- The following methods trigger validations, and will save the object to the database only if the object is valid:

  - `create/create!`
  - `save/save!`
  - `update/update!`

- The bang versions (e.g. `save!`) raise `ActiveRecord::RecordInvalid` exception if the record is invalid. The non-bang versions don't.
- `save` and `update` return false, and `create` returns the object.

## Skipping Validations

- The following methods skip validations, and will save the object to the database regardless of its validity.
  - `insert`/`insert!`
  - `insert_all`/`insert_all!`
  - `update_all`
  - `update_attribute`
  - `update_column`
  - `update_columns`
- `save` method also has the ability to skip validations if passed `validate: false` as an argument.

      save(validate: false)

# Essential Methods

### `valid?`

`valid?` triggers your validations and returns `true` if no errors were found in the object, and `false` otherwise.

    validates :name, presence: true

    Person.create(name: "John Doe").valid?    => true
    Person.create(name: nil).valid?           => false

### `invalid?`

`invalid?` is the inverse of valid?.

### `errors`

- After Active Record has performed validations, any errors found can be accessed through the `errors` instance method, which returns a collection of errors.
- By definition, an object is valid if this collection is empty after running validations.
- Note that an object instantiated with `new` will not report errors even if it's technically invalid, because validations are automatically run only when the object is saved, such as with the `create` or `save` methods.

      p = Person.new
      p.valid?    => false
      p.errors.objects.first.full_message   => "Name can't be blank"

### `errors[:attribute]`

- To verify whether or not a particular attribute of an object is valid, you can use `errors[:attribute]`.

  - It returns an array of all the error messages for `:attribute`.
  - If there are no errors on the specified attribute, an empty array is returned.
  - This method is only useful after validations have been run, because it only inspects the errors collection and does not trigger validations itself. It's different from the `ActiveRecord::Base#invalid?` method explained above because it doesn't verify the validity of the object as a whole. It only checks to see whether there are errors found on an individual attribute of the object.

        Person.new.errors[:name].any?     => false
        Person.create.errors[:name].any?  => true

### `new_record?`

Active Record uses the `new_record?` instance method to determine whether an object is already in the database or not.

    p = Person.new(name: "John Doe")
    p.new_record?   => true
    p.save
    p.new_record?   => false
