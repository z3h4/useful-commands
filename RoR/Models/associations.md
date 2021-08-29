# Rails Associations
## `belongs_to` association
`belongs_to` does not ensure reference consistency, so depending on the use case, you might also need to add a database-level foreign key constraint on the reference column, like this:

    create_table :books do |t|
      t.belongs_to :author, foreign_key: true
      # ...
    end

## `has_one` association

Depending on the use case, you might also need to create a unique index and/or a foreign key constraint on the `supplier` column for the `accounts` table. In this case, the column definition might look like this:

    create_table :accounts do |t|
      t.belongs_to :supplier, index: { unique: true }, foreign_key: true
      # ...
    end

## `has_many` association

Depending on the use case, it's usually a good idea to create a non-unique index and optionally a foreign key constraint on the author column for the books table:

    create_table :books do |t|
      t.belongs_to :author, index: true, foreign_key: true
      # ...
    end

## `has_many :through` association
- used to set up a many-to-many connection with another model.

## Choosing Between `has_many :through` and `has_and_belongs_to_many`

- Use `has_many :through` relationship if you need to work with the relationship model as an independent entity.
- If you don't need to do anything with the relationship model, it may be simpler to set up a `has_and_belongs_to_many` relationship.
- You should use `has_many :through` if you need validations, callbacks, or extra attributes on the join model.

## Polymorphic Associations

- With polymorphic associations, a model can **belong to** more than one other model, on a single association.
- For example, you might have a picture model that belongs to either an employee model or a product model.

      class Picture < ApplicationRecord
        belongs_to :imageable, polymorphic: true
      end

      class Employee < ApplicationRecord
        has_many :pictures, as: :imageable
      end

      class Product < ApplicationRecord
        has_many :pictures, as: :imageable
      end
- You can think of a polymorphic `belongs_to` declaration as setting up an interface that any other model can use.
- From an instance of the `Employee` model, you can retrieve a collection of pictures: `@employee.pictures`.
- Similarly, you can retrieve `@product.pictures`.
- If you have an instance of the `Picture` model, you can get to its parent via `@picture.imageable`.

### Delete child record when parent record is deleted

- Use `dependent: :destroy`. 

      class Author < ApplicationRecord
        has_many :books, dependent: :destroy
      end

      class Book < ApplicationRecord
        belongs_to :author
      end
  - Now, delete an author and all of its books:

        @author.destroy

- Create new book

      @book = @author.books.create(published_at: Time.now)

## Syntax

- The name of the other model is pluralized when declaring a `has_many` association.

      has_many :books

- `has_one` associations must use the singular term.

      has_one :account

- `belongs_to` associations must use the singular term.

      belongs_to :author