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

## Updating the Schema based on the association

- Associations are extremely useful, but they are not magic. You are responsible for maintaining your database schema to match your associations.
- In practice, this means two things, depending on what sort of associations you are creating.
  1. For `belongs_to` associations you need to create foreign keys
  2. For `has_and_belongs_to_many` associations you need to create the appropriate join table.

1. **Creating Foreign Keys for belongs_to Associations**
When you declare a belongs_to association, you need to create foreign keys as appropriate. For example, consider this model:

        class Book < ApplicationRecord
          belongs_to :author
        end

This declaration needs to be backed up by a corresponding foreign key column in the books table. For a brand new table, the migration might look something like this:

      class CreateBooks < ActiveRecord::Migration[6.0]
        def change
          create_table :books do |t|
            t.datetime   :published_at
            t.string     :book_number
            t.references :author
          end
        end
      end

Whereas for an existing table, it might look like this:

    class AddAuthorToBooks < ActiveRecord::Migration[6.0]
      def change
        add_reference :books, :author
      end
    end

If you wish to enforce referential integrity at the database level, add the foreign_key: true option to the ‘reference’ column declarations.

      class CreateBooks < ActiveRecord::Migration[6.0]
        def change
          create_table :books do |t|
            t.datetime   :published_at
            t.string     :book_number
            t.references :author, foreign_key: true 
          end
        end
      end

**Creating Join Tables for has_and_belongs_to_many Associations**

- If you create a has_and_belongs_to_many association, you need to explicitly create the joining table.
- Unless the name of the join table is explicitly specified by using the `:join_table` option, Active Record creates the name by using the lexical order of the class names. So a join between author and book models will give the default join table name of "authors_books".
- Whatever the name, you must manually generate the join table with an appropriate migration. For example, consider these associations:

      class Assembly < ApplicationRecord
        has_and_belongs_to_many :parts
      end

      class Part < ApplicationRecord
        has_and_belongs_to_many :assemblies
      end
- These need to be backed up by a migration to create the `assemblies_parts` table. **This table should be created without a primary key:**

      class CreateAssembliesPartsJoinTable < ActiveRecord::Migration[6.0]
        def change
          create_table :assemblies_parts, id: false do |t|
            t.bigint :assembly_id
            t.bigint :part_id
          end

          add_index :assemblies_parts, :assembly_id
          add_index :assemblies_parts, :part_id
        end
      end

  - We pass `id: false` to create_table because that table does not represent a model. That's required for the association to work properly.
- We can also use the method `create_join_table`

      class CreateAssembliesPartsJoinTable < ActiveRecord::Migration[6.0]
        def change
          create_join_table :assemblies, :parts do |t|
            t.index :assembly_id
            t.index :part_id
          end
        end
      end




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