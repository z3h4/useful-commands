# Create a Model

- The model and scaffold generators will create migrations appropriate for adding a new model.

      rails generate model Product name:string description:text

  genarates

      class CreateProducts < ActiveRecord::Migration[6.0]
        def change
          create_table :products do |t|
            t.string :name
            t.text :description

            t.timestamps
          end
        end
      end

---

## Create a Table

- Use migration name of the form **"CreateXXX"** followed by a list of column names and types.

      rails generate migration CreateProducts name:string part_number:string

  generates

      class CreateProducts < ActiveRecord::Migration[6.0]
        def change
          create_table :products do |t|
            t.string :name
            t.string :part_number

            t.timestamps
          end
        end
      end

- By default, `create_table` will create a primary key called `id`.
  - You can change the name of the primary key with the `:primary_key` option.
  - If you don't want a primary key at all, you can pass the option `id: false`.
- If you need to pass database specific options you can place an SQL fragment in the `:options` option.

      create_table :products, options: "ENGINE=BLACKHOLE" do |t|
        t.string :name, null: false
      end

  will append `ENGINE=BLACKHOLE` to the SQL statement used to create the table.

- Also you can pass the `:comment` option with any description for the table that will be stored in database itself and can be viewed with database administration tools, such as MySQL Workbench or PgAdmin III.
  - It's highly recommended to specify comments in migrations for applications with large databases as it helps people to understand data model and generate documentation.

## Create a join table

- Use `JoinTable` as part of the name of the migration

      rails generate migration CreateJoinTableCustomerProduct customer product

  generates

      class CreateJoinTableProductCategory < ActiveRecord::Migration[6.0]
        def change
          create_join_table :products, :categories do |t|
            t.index :product_id
            t.index :category_id
          end
        end
      end

- Which creates a `categories_products` table with two columns called `category_id` and `product_id`. These columns have the option `:null` set to `false` by default. This can be overridden by specifying the `:column_options` option:

      create_join_table :products, :categories, column_options: { null: true }

- The migration method `create_join_table` creates an HABTM (has and belongs to many) join table.
- By default, the name of the join table comes from the union of the first two arguments provided to `create_join_table`, in alphabetical order. To customize the name of the table, provide a `:table_name` option:

      create_join_table :products, :categories, table_name: :categorization

## Changing a Table

- `change_table` method is used for changing existing tables.

      change_table :products do |t|
        t.remove :description, :name                             # Remove a column
        t.string :part_number                                    # Add a column
        t.column :name, :string, limit: 60                       # Add a column
        t.integer :width, :height, null: false, default: 0       # Add 2 integer columns
        t.index :part_number                                     # Add an index
        t.rename :upccode, :upc_code                             # Rename a column
        t.change :metadata, :json                                # Change type of a column
        t.timestamps                                             # Add created_at/updated_at columns
        t.references :company                                    # Add a foreign key column
        t.belongs_to :company, polymorphic: true                 # Add a polymorphic foreign key column, creates `company_type(varchar)` and `company_id(bigint)` columns.
        t.remove_index :company_id                               # Remove an index
      end

- [`change_table` method](https://api.rubyonrails.org/v6.1.4/classes/ActiveRecord/ConnectionAdapters/SchemaStatements.html#method-i-change_table)

## Add a column to a table

- If the migration name is of the form **"AddColumnToTable"** and is followed by a list of column names and types then a migration containing the appropriate `add_column` statement will be created.

      rails generate migration AddPartNumberToProducts part_number:string

  will generate

      class AddPartNumberToProducts < ActiveRecord::Migration[6.0]
        def change
          add_column :products, :part_number, :string
        end
      end

- If you'd like to add an index on the new column, you can do that as well.

      rails generate migration AddPartNumberToProducts part_number:string:index

  will generate the appropriate add_column and add_index statements:

      def change
        add_column :products, :part_number, :string
        add_index :products, :part_number
      end

## Remove a column from a table

- If the migration name is of the form **"RemoveColumnFromTable"** and is followed by a list of column names and types then a migration containing the appropriate `remove_column` statement will be created.

      rails generate migration RemovePartNumberFromProducts part_number:string

  generates

      def change
        remove_column :products, :part_number, :string
      end

## Change a Column

- Changes the column's definition according to the new options.
- **`change_column` command is irreversible.**

      change_column :products, :part_number, :text

### [`change_column_default`](https://api.rubyonrails.org/v6.1.4/classes/ActiveRecord/ConnectionAdapters/SchemaStatements.html#method-i-change_column_default)

- Sets a new default value for a column:

      change_column_default :suppliers, :qualification, 'new'
      change_column_default :accounts, :authorized, 1

- Setting the default to `nil` effectively drops the default:

      change_column_default :users, :email, nil

- **Passing a hash containing `:from` and `:to` will make this change reversible in migration:**

      change_column_default :posts, :state, from: nil, to: "draft"

### [`change_column_null`](https://api.rubyonrails.org/v6.1.4/classes/ActiveRecord/ConnectionAdapters/SchemaStatements.html#method-i-change_column_null)

- Sets or removes a `NOT NULL` constraint on a column. The `null` flag indicates whether the value can be `NULL`. For example

      change_column_null :users, :nickname, false

  says nicknames cannot be `NULL` (adds the constraint), whereas

      change_column_null :users, :nickname, true

  allows them to be `NULL` (drops the constraint).

- The method accepts an optional fourth argument to replace existing `NULL`s with some other value. Use that one when enabling the constraint if needed, since otherwise those rows would not be valid.
  - Please note the fourth argument does not set a column's default.

### [`change_column_comment`](https://api.rubyonrails.org/v6.1.4/classes/ActiveRecord/ConnectionAdapters/SchemaStatements.html#method-i-change_column_comment)

- Changes the comment for a column or removes it if `nil`.
- Passing a hash containing `:from` and `:to` will make this change reversible in migration:

      change_column_comment(:posts, :state, from: "old_comment", to: "new_comment")

## Add reference

- Add a `belongs_to` association using `references`

      rails generate migration AddUserRefToProducts user:references

  generates

      class AddUserRefToProducts < ActiveRecord::Migration[6.0]
        def change
          add_reference :products, :user, foreign_key: true
        end
      end

  This migration will create a `user_id` column and appropriate index.

- Add a polymorphc association if we pass `polymorphic: true` option

      add_reference :products, :supplier, polymorphic: true

---

# Column Modifiers

- Column modifiers can be applied when creating or changing a column:

  - `limit` Sets the maximum size of the `string/text/binary/integer` fields.

        add_column :users, :picture, :binary, limit: 2.megabytes

  - `precision` Defines the precision for the `:decimal, :numeric, :datetime`, and `:time` columns, representing the total number of digits in the number.
  - `scale` Defines the scale for the `:decimal` and `:numeric` columns, representing the number of digits after the decimal point.

        bin/rails generate migration AddDetailsToProducts 'price:decimal{5,2}' supplier:references{polymorphic}

        add_column :products, :price, :decimal, precision: 5, scale: 2

  - `polymorphic` Adds a type column for `belongs_to` associations.
  - `null` Allows or disallows `NULL` values in the column.
  - `default` - The column's default value. Use `nil` for `NULL`.

        add_column :articles, :status, :string, limit: 20, default: 'draft', null: false

  - `comment` Adds a comment for the column.

- `null` and `default` cannot be specified via command line.
