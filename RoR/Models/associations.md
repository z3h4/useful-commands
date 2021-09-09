# Rails Associations
## `belongs_to` association
- In database terms, the `belongs_to` association says that this model's table contains a column which represents a reference to another table. 
- This can be used to set up one-to-one or one-to-many relations.
- If the table of the other class contains the reference in a one-to-one relation, then you should use has_one instead.
- `belongs_to` does not ensure reference consistency, so depending on the use case, you might also need to add a database-level foreign key constraint on the reference column, like this:

    create_table :books do |t|
      t.belongs_to :author, foreign_key: true
      # ...
    end

### Methods Added by belongs_to
- When you declare a belongs_to association, the declaring class automatically gains 6 methods related to the association.
- In all of these methods, association is replaced with the symbol passed as the first argument to belongs_to. For example, given the declaration:

      class Book < ApplicationRecord
        belongs_to :author
      end

  | Name | Example |
  ------ | :--------:
  | association | author |
  | association=(associate) | author= |
  | build_association(attributes = {}) | build_author
  | create_association(attributes = {}) | create_author
  | create_association!(attributes = {}) | create_author!
  | reload_association | reload_author

- When initializing a new `has_one` or `belongs_to` association you must use the `build_` prefix to build the association.
- To create one, use the `create_` prefix.

### Options for belongs_to
- We can customize the behavior of the `belongs_to` association by passing options and scope blocks when we create the association.
- The belongs_to association supports these options:
  1. `:autosave`
      - If you set the `:autosave` option to true, Rails will save any loaded association members and destroy members that are marked for destruction whenever you save the parent object.
      - Setting `:autosave` to false is not the same as not setting the `:autosave` option. If the `:autosave` option is not present, then new associated objects will be saved, but updated associated objects will not be saved.
  2. `class_name`
      - If the name of the other model cannot be derived from the association name, you can use the `:class_name` option to supply the model name.
  3. `counter_cache`
      - The `:counter_cache` option can be used to make finding the number of belonging objects more efficient. 
      - https://guides.rubyonrails.org/association_basics.html#options-for-belongs-to-counter-cache
  4. `dependent`
      - If you set the :dependent option to:
        - `:destroy`, when the object is destroyed, destroy will be called on its associated objects.
        - `:delete`, when the object is destroyed, all its associated objects will be deleted directly from the database without calling their destroy method.
        - `:destroy_async` when the object is destroyed, an `ActiveRecord::DestroyAssociationAsyncJob` job is enqueued which will call destroy on its associated objects. Active Job must be set up for this to work.
  5. `foreign_key`
      - By convention, Rails assumes that the column used to hold the foreign key on this model is the name of the association with the suffix `_id` added.
      - The `:foreign_key` option lets you set the name of the foreign key directly:

            class Book < ApplicationRecord
              belongs_to :author, class_name: "Patron",
                                  foreign_key: "patron_id"
            end
      - **In any case, Rails will not create foreign key columns for you. You need to explicitly define them as part of your migrations.**
  6. `primary_key`
      - By convention, Rails assumes that the `id` column is used to hold the primary key of its tables. The `:primary_key` option allows you to specify a different column.
      - For example, given we have a users table with guid as the primary key. If we want a separate todos table to hold the foreign key user_id in the guid column, then we can use `primary_key` to achieve this like so:

            class User < ApplicationRecord
              self.primary_key = 'guid' # primary key is guid and not id
            end

            class Todo < ApplicationRecord
              belongs_to :user, primary_key: 'guid'
            end
        - When we execute `@user.todos.create` then the `@todo` record will have its user_id value as the guid value of @user.
---------------------------------------------------------------------------

## `has_one` association

Depending on the use case, you might also need to create a unique index and/or a foreign key constraint on the `supplier` column for the `accounts` table. In this case, the column definition might look like this:

    create_table :accounts do |t|
      t.belongs_to :supplier, index: { unique: true }, foreign_key: true
      # ...
    end

---------------------------------------------------------------------------

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