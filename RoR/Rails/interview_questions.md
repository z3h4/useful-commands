# What is a transaction?

- Transaction is a group of SQL statements that represent a single unit of work.
- So, all these statements should be completed successfully, or the transaction will fail.

# Why locking is necessary?

To protect data consistency. When locking is in place, it will not allow two concurrent processes to update the same object at the same time.

# Optimistic vs Pessimistic Locking

## Optimistic Locking

- Optimistic locking allows multiple users to access the same record for edits, and assumes a minimum of conflicts with the data.
- It does this by checking whether another process has made changes to a record since it was opened, an ActiveRecord::StaleObjectError exception is thrown if that has occurred and the update is ignored.
- Active Record supports optimistic locking if the lock_version field is present. Each update to the record increments the lock_version column and the locking facilities ensure that records instantiated twice will let the last one saved raise a StaleObjectError if the first was also updated.
- The use case for optimistic locking is preventing users from overwriting changes made by other users.
- multiple users can access the same object to read its value but if two users perform the conflicting update, only one user will succeed and the other one will get exception.
- An advantage of the optimistic locking model is that it avoids the overhead of locking a record for the duration of the action. If there are no simultaneous updates, then this model provides fast updates.

## Pessimistic Locking

- Pessimistic locking prevents concurrent transactions from updating the same row.
- The second transaction waits for the first transaction to finish before it even reads the data.
- The great **advantage** here is that it is impossible to operate on stale data.
- The major **disadvantage**, though, is that it also blocks reading the data from a given row.

Pessimistic locking assumes that database transaction conflict is very likely to happen. It locks the record until the transaction is done. If the record is currently lock and the other user make a transaction, that second transaction will wait until the lock in first transaction is release.

With this kind of locking, only the first user accesses to the object will be able to update it. All other users will be excluded from even reading the object (remember that in Optimistic locking, we only lock it when updating the data and users are still able to read it).

An advantage of the pessimistic locking model is that it avoids the issue of conflict resolution by preventing conflicts. Updates are serialized and each subsequent update starts with the committed record changes from the previous user.

### Questions

- New Rails 7 fetures
- Favourite gems

# Migration & Database-Safety Questions

## How would you rename a database column in a production-safe way?

### **Why You Can't Just Rename**

❌ **Dangerous Approach**:

```ruby
rename_column :users, :email, :email_address
# Deploy code that uses :email_address
```

**Problem**: During deployment, some servers have old code (expects `:email`) and some have new code (expects `:email_address`). When the rename runs, old servers crash immediately.

Directly renaming a database column in a single migration is dangerous in a production environment because it can lead to application failure, data corruption, and service downtime due to a fundamental mismatch between the application code and the database schema.

### Key Dangers of Direct Renaming

### 1. Zero-Downtime Deployment Failure (Race Condition)

- **Deployment Steps:** When you deploy, the database migration runs first, renaming the column (e.g., from `old_name` to `new_name`).
- **The Gap:** For a brief period (seconds to minutes, depending on the number of servers and deployment speed), some application servers are still running the old code (which references `old_name`) while the database schema has already been updated to use `new_name`.
- **Failure:** Any query from the old code will immediately fail with a database error (e.g., "Unknown column 'old_name' in 'field list'"), resulting in 500 errors and service downtime until all servers are running the new code.
- **Inverse Failure:** If you try to deploy the new code first, it will fail because the database doesn't yet have `new_name`.

### 2. Broken Background Jobs and Long-Running Processes

Background processing systems (like Sidekiq, Delayed Job) are less predictable than web servers.

- **Old Jobs:** Jobs enqueued before the deployment might reference the model attributes using the `old_name`. When these jobs eventually run after the column has been renamed, they will fail.

- **Serialization Issues:** If you serialize an entire ActiveRecord object into a job payload, and the underlying column name changes, deserialization or subsequent persistence attempts can fail, potentially corrupting the job queue or leaving records in an inconsistent state.

### 3. Rollback Complexity

If you discover a bug after the deployment and need to roll back to the previous application version:

- The rollback application code expects the old column name (`old_name`).
- The database now only has the new column name (`new_name`).
- The rollback will fail immediately, leaving you with no easy recovery path and extended downtime. To recover, you would need to manually rename the column back in the database, which is messy and risky.

### 4. Data Loss Risk

Using a simple `rename_column` operation in Rails (which uses the database's `RENAME COLUMN` command) is generally safe regarding data preservation, as the data simply moves with the name change. However, if the operation is interrupted or if you attempt to combine the rename with type changes or other complex schema modifications, the risk of data loss or corruption increases significantly.

### ✅ The Safe Solution: The Three-Step Process

### 1. Expand: Add the New Column

The first step is to add the new column alongside the old one in a migration. The application still uses the old column at this stage.

- **Migration:** Create a migration to add the new column with the desired name and type.

  ```Ruby
  class AddEmailAddressToUsers < ActiveRecord::Migration[7.0]
    def change
      # Add new column with same type and attributes
      add_column :users, :email_address, :string

      # Copy constraints if any
      add_index :users, :email_address

      # Optional: Add NOT NULL later
    end
  end
  ```

- **Deploy (Deployment 1)**: Run the migration and deploy this change. The application remains fully functional, reading and writing to the old column. The new column exists but is unused.

### 2. Transition: Dual-Write and Dual-Read

In this step, you modify your application code to use both columns simultaneously.

- **Application Code Changes:** Update your model to read from the new column if present, but fall back to the old one. Crucially, writes must go to both columns. This is often achieved using `alias_attribute` or by manually overriding accessors.

  - **Model Example (Using manual accessors for clarity):**

    ```Ruby
    # app/models/my_table.rb
    class User < ApplicationRecord
      # Read from the new column, fallback to the old
      def email
          email_address.presence || email
      end

      # Write to both columns
      def email=(value)
          self.email = value
          self.email_address = value
      end
    end
    ```

  - **Alternative: Using `alias_attribute`**

    ```Ruby
    class User < ApplicationRecord
      alias_attribute :email, :email_address
    end

    # Now these all work:
    user.email = "test@example.com"  # writes to email_address
    user.email_address = "..."       # writes to email_address
    user.email                       # reads from email_address
    user.email_address               # reads from email_address
    ```

- **Backfill Data:** Since the new column is initially empty, you must run a separate backfill script (or a data migration) to copy all existing data from `old_column_name` to `new_column_name`. This ensures data consistency.

  ```Ruby
  class BackfillEmailAddressColumn < ActiveRecord::Migration[7.0]
    disable_ddl_transaction!  # For large tables

    def up
      # Backfill in batches to avoid locking table
      User.in_batches(of: 1000).update_all('email_address = email')

      # Or use safer approach with find_each
      # User.where(email_address: nil).find_each do |user|
      #   user.update_column(:email_address, user.email)
      # end
    end

    def down
      # Can be empty or reverse
    end
  end

  # -------------------------------------------------------
  # Verify backfill completed:
  # User.where(email_address: nil).count  # Should be 0
  ```

- **Deploy (Deployment 2)**: Deploy the application code with the dual-write/dual-read logic. At this point, all data is being saved to both columns, and the application can safely read from either.

### 3. Cleanup: Remove the Old Column (Contract)

After the second deployment has been running successfully for a while (and you are confident all background jobs and application processes are using the new logic), you can perform the final cleanup.

- **Application Code Changes:**

  - Remove the dual-write/dual-read logic from the model.
  - Update all application code, serializers, forms, validations, views, controllers, background jobs and tests to reference only the `new_column_name`.
    ```Ruby
    # Search codebase for old column name:
    # grep -r "\.email" app/
    # Replace with .email_address
    ```
  - Add Constraints (Optional)
    ```Ruby
    change_column_null :users, :email_address, false
    ```

- **Deploy (Deployment 3):**

  - I would like to deploy here. Just in case anything happens we can rollback.

- **Migration:** Create a migration to remove the old column.

  ```Ruby
  class RemoveEmailFromUsers < ActiveRecord::Migration[7.0]
    def change
      # Safety check: ensure new column is being used
      # Only drop after confirming no errors in production

      remove_column :users, :email, :string
    end
  end
  ```

- **Deploy (Deployment 4):** Deploy the final code changes and run the migration. The database and application are now exclusively using the newly named column.

This three-step process ensures that there is never a mismatch between the database schema and the running application code, allowing for **zero-downtime deployment**.

### How to handle the data backfill safely during the column rename process?

We can achieve this in 2 ways

1. **Using a Dedicated Data Migration (Recommended)**

   For changes to data that need to be tracked and versioned alongside schema changes, using a tool like the data-migrate gem or simply creating a separate, non-schema-altering migration is ideal.

   **Migration File** (`db/data/YYYYMMDDHHMMSS_backfill_new_column.rb`)

   This approach uses `find_each` or `find_in_batches`, which are crucial for high-volume tables to avoid loading all records into memory at once.

   ```Ruby
    # db/data/YYYYMMDDHHMMSS_backfill_new_column.rb
    class BackfillNewColumn < ActiveRecord::Migration[7.1]
      # IMPORTANT: Disable transaction for long-running data updates
      disable_ddl_transaction!

      def up
        puts "Starting backfill for MyTable..."

        # Define a scope to select records that need updating
        records_to_update = MyTable.where.not(old_column_name: [nil, ''])

        # Use 'find_each' to process records in batches (default batch size is 1000)
        # This prevents memory exhaustion and keeps the transactions small.
        records_to_update.find_each do |record|
          # Check if the old column has data AND the new column is empty
          if record.old_column_name.present? && record.new_column_name.blank?
            # Update the new column with the old column's value
            record.update_column(:new_column_name, record.old_column_name)
          end
        end

        puts "Backfill complete."
      end

      # The down method can be a NO-OP or log a message, as this is a forward-moving change.
      def down
        # Intentionally blank or just log a rollback warning
      end
    end
   ```

   We use `update_column` instead of `save` to skip ActiveRecord validations, callbacks, and timestamp updates (like `updated_at`), which are unnecessary and would create additional overhead for a simple data copy.

2. **Using a Rake Task (Manual but Flexible)**
   For very large, mission-critical tables where you need more fine-grained control over batch size and throttling, a Rake task is a good choice.

   **Rake Task File** (`lib/tasks/data.rake`)

   ```Ruby
   namespace :data do
     desc "Backfills data from old_column_name to new_column_name in MyTable"
     task backfill_my_table: :environment do
       batch_size = 500
       delay_seconds = 0.1 # Optional throttling to reduce database load

       puts "Starting backfill for MyTable in batches of #{batch_size}..."

       # Use 'find_in_batches' for maximum efficiency and control
       MyTable.where.not(old_column_name: [nil, '']).find_in_batches(batch_size: batch_size) do |batch|
         ActiveRecord::Base.transaction do
           batch.each do |record|
             if record.old_column_name.present? && record.new_column_name.blank?
               record.update_column(:new_column_name, record.old_column_name)
             end
           end
         end

         # Throttle: pause briefly between batches to allow the DB to catch up
         sleep(delay_seconds) if delay_seconds > 0
         puts "Processed a batch of #{batch.size} records."
       end
       puts "Backfill complete."
     end
   end
   ```

   You would then run this task manually after the second deployment (with dual-write logic) is complete:

   ```Ruby
   $ rails data:backfill_my_table
   ```

   **Why This is Safe?**

- **Batching** (`find_each`/`find_in_batches`): Prevents the memory from being exhausted by processing too many records simultaneously.
- **Small Transactions:** By processing updates in small batches, the database lock on the table is only held for a very short time per batch, preventing service disruption.
- **Decoupling:** By separating the backfill from the `add_column` step, the database is never locked while performing a complex schema change and a large data update simultaneously.
- **Dual-Write Safety:** Since the application is already running the dual-write logic, any new data created during the backfill process is already written to both columns, guaranteeing consistency throughout the entire transition.

### **Timeline**

- **Week 1**: Add column, deploy dual-write
- **Week 2**: Backfill, switch reads
- **Week 3**: Remove old references, stop dual-write
- **Week 4**: Monitor, then drop old column

**Don't rush!** Each step needs time to verify it works.

### **Key Principles**

✅ **Never break old code** - Always be backward compatible
✅ **Deploy in small steps** - Each deploy should be independently safe
✅ **Monitor between steps** - Catch issues early
✅ **Wait before dropping** - Old column is your safety net
✅ **Test rollback** - Know how to undo each step

### **For Large Tables**

Use tools like `pt-online-schema-change` (MySQL) or PostgreSQL's concurrent operations to avoid table locks.

### ** Key Points to Emphasize**

- Understanding of **zero-downtime deployments**
- **Multi-version compatibility** (old and new code running simultaneously)
- **Risk mitigation** through gradual rollout
- **Monitoring and verification** at each step
- **Rollback strategy** if something goes wrong

## Explain The "Expand-Contract" Pattern

The **Expand-Contract Pattern** (or Expand-Contract Rollout) is the generalized, production-safe methodology used for making non-backward-compatible changes to a system while maintaining **zero downtime** and allowing for **instant rollbacks**.

### Overview of the Pattern

The Expand-Contract pattern is broken down into three logical phases that are executed across multiple, independent deployments. It ensures that the old and new versions of the system can coexist successfully at every step.

**Phase 1: Expand (Zero-Downtime Introduction)**

The goal here is to introduce the new element without removing the old one.

- **Database (Column Rename Example):** Add the `new_column` while the `old_column` remains.
- **API (Endpoint Rename Example):** Deploy the `/v2/users` endpoint while keeping the `/v1/users` endpoint active.
- **Code Change:** Introduce **dual-write** logic. All application code continues to read from the old source, but any new writes are mirrored to both the old and new sources.
- **Backfill:** Run an offline, batched process to copy all existing data from the old source to the new source, ensuring data parity.
- **Rollback Safety:** At this stage, a rollback to the old code is safe because the old elements are still fully functional and being kept up-to-date.

**Phase 2: Transition (The Switch)**

Once the new element has data parity and has been running reliably for a time (the "soak period"), the application is switched to rely entirely on the new element.

- Code Change: Switch the application logic to **read and write only to the new element**. The dual-write logic is removed or modified, and all references to the old element are updated.
- **Database (Column Rename Example):** The model now only interacts with `new_column`.
- **API (Endpoint Rename Example):** Start directing all clients (or internal calls) to the `/v2/users` endpoint. The old endpoint remains active but sees zero traffic.
- **Rollback Safety:** A rollback is still possible—if a critical bug is found, you can roll back to the previous code (Phase 1 dual-write), which still ensures consistency, or even back to the original code, as the old element still exists in the database.

**Phase 3: Contract (The Cleanup)**

This is the final, non-breaking cleanup phase, executed only after the new element has been proven stable and reliable.

- **Code Change:** Remove any remaining dead code or deprecated configuration related to the old element.
- **Database/System Change:** Create a final migration or change management ticket to permanently remove the old element.
- **Database (Column Rename Example):** Drop the old_column.
- **API (Endpoint Rename Example):** Retire and shut down the /v1/users endpoint.

### Why is it so Effective?

- **Zero Downtime:** Changes are always additive first. No consumer is broken by a sudden removal or renaming.
- **Safe Rollbacks:** Because the old element is only removed in the very last step, you can always revert to the previous application version and rely on the existing schema/API to continue working.
- **Clear Separation of Concerns:** It separates the risk of changing the schema (Expand) from the risk of changing the application code (Transition), making debugging and testing much simpler.

### Examples

- Renaming columns - name → full_name
- Changing data formats - Integer cents → Decimal dollars
- Splitting columns - Single address → street, city, state, zip
- API changes - Support both old and new response formats
  - [How Expand-Contract pattern is specifically applied to API versioning](https://chatgpt.com/s/t_69216758f9c8819180c66c18b15b24f7)
- Microservices - Dual-read from monolith and new service

## How do you add a NOT NULL constraint on a large table without downtime?

Adding a `NOT NULL` constraint on a large production table without downtime is achieved by using the database's non-blocking mechanisms, primarily the `NOT VALID` and `VALIDATE CONSTRAINT` features available in PostgreSQL.

The process requires a safe, **three-step, multi-deployment** approach to prevent table locking and service disruption.

### Production-Safe Method Overview

The safest method involves:

**Backfill:** Update all existing `NULL` values to a non-null default value (batched process).

**Schema (Non-Blocking):** Add the `NOT NULL` constraint using `NOT VALID` (instantaneous metadata change).

**Validation (Concurrent):** Validate the constraint concurrently (`VALIDATE CONSTRAINT`), which checks existing data without blocking writes for the duration of the scan.

### Step 1: Add the column (Deployment 1)

Add the column first, ensuring it is nullable to start.

```Ruby
# db/migrate/YYYYMMDDHHMMSS_add_status_to_products.rb
class AddStatusToProducts < ActiveRecord::Migration[7.1]
  def change
    # The new column MUST be nullable initially.
    add_column :products, :status, :string
  end
end
```

**Actions for Deployment 1:**

- Deploy and run the migration first before doing any modification.
- **Why deploying the migration and the application code together is risky?**

  - **Race Condition Risk:** There's a brief window after the migration runs but before the new application code is running on all servers where old application code might try to access the newly added column and fail (though less critical here since the old code wouldn't know about it), or, more critically, the backfill could start before all application servers are using the new model code.
  - **Best Practice:** The safest, most resilient approach is the "**schema first, then code**" deployment pattern. It provides clear separation, easier monitoring, and a safer rollback path at each stage.

### 💾 Step 2: Data Backfill and Code Expansion (Deployment 2)

First, we must ensure data integrity for all existing rows and stop new rows from being created with `NULL` values.

**A. Application Code Changes (Expansion)**

Update your Rails model to provide a default value for the column. This prevents new records from having `NULL` values.

```Ruby
# app/models/product.rb (Example model)
class Product < ApplicationRecord
  # Add a temporary application-level validation and default
  validates :status, presence: true

  # Ensure records are initialized with a default if status is nil
  after_initialize :set_default_status, if: :new_record?

  private

  def set_default_status
    self.status ||= 'available' # Use your desired default value
  end
end
```

**B. Batched Data Backfill**

Run a separate Rake task or data migration to update all existing records with a `NULL` value in the target column (`status`). This must be done in batches to prevent long table locks.

```Ruby
# lib/tasks/data.rake
namespace :data do
  desc "Backfills NULL status values in the products table"
  task backfill_product_status: :environment do
    puts "Starting batched backfill for products..."

    # Use update_all for efficiency, and find_in_batches for safety
    Product.where(status: nil).find_in_batches(batch_size: 2000) do |batch|
      # Get the IDs of the batch
      ids = batch.pluck(:id)

      # Use raw SQL update for speed and to avoid ActiveRecord overhead
      # Set the default value used in your model (e.g., 'available')
      Product.where(id: ids).update_all(status: 'available')

      puts "Processed and updated batch of #{ids.count} products."
      sleep(0.1) # Optional: Throttle to reduce database load
    end

    puts "Backfill complete. All existing NULLs should be set to 'available'."
  end
end
```

**Actions for Deployment 2:**

1. Deploy the code with the new model validation/default.
2. Run the backfill task (`rails data:backfill_product_status`).
3. Monitor your system until the backfill is 100% complete and you have confidence the application is no longer inserting `NULL`s.

### 📝 Step 3: Add and Validate Constraint (Deployment 3)

Once the data is clean, you can add and validate the constraint in a schema migration.

**Schema Migration (PostgreSQL Example)**

This migration uses two separate execute commands to leverage PostgreSQL's non-blocking features.

```Ruby
# db/migrate/YYYYMMDDHHMMSS_add_not_null_to_product_status_safely.rb
class AddNotNullToProductStatusSafely < ActiveRecord::Migration[7.1]
  # IMPORTANT: Disable transaction for safety when running complex DDL/validation
  disable_ddl_transaction!

  def up
    # 1. Add the constraint using NOT VALID.
    # This is an INSTANT operation as it only changes metadata and doesn't scan the table.
    execute <<-SQL
      ALTER TABLE products
      ALTER COLUMN status SET NOT NULL NOT VALID;
    SQL
    puts "Added NOT NULL constraint on status (NOT VALID)."

    # 2. Concurrently validate the constraint.
    # This scans the table but allows DML (INSERT/UPDATE/DELETE) operations to proceed.
    execute <<-SQL
      ALTER TABLE products
      VALIDATE CONSTRAINT products_status_not_null;
    SQL
    puts "Validated NOT NULL constraint on status concurrently."
  end

  def down
    # To reverse, we remove the NOT NULL attribute.
    execute "ALTER TABLE products ALTER COLUMN status DROP NOT NULL;"
  end
end
```

**Actions for Deployment 3:**

1. Deploy this schema migration (rails db:migrate).
2. **Result:** The database now enforces the `NOT NULL` constraint without having locked the table for the duration of the data scan.

**Explanation: Why not use Standard Rails Helper `change_column_null`?**

**`change_column_null` Lacks Non-Blocking Control**

- It executes a single `ALTER TABLE ... ALTER COLUMN ... SET NOT NULL` command.
- By default, this single command is blocking. PostgreSQL will immediately scan the entire table to verify that all existing rows satisfy the `NOT NULL` constraint. For a large table (millions of rows), this scan can take minutes or even hours, during which the table is locked against writes (DML), leading to service disruption.
- The helper does not expose the crucial `NOT VALID` option that allows you to separate the schema change (instantaneous) from the data validation (long-running).

**✅ Why Raw EXECUTE is the Safe Choice**

By using raw SQL with the specific PostgreSQL commands, you gain fine-grained control over the transaction and locking behavior:

1. **The `SET NOT NULL NOT VALID` Step**

   ```SQL
   ALTER TABLE products ALTER COLUMN status SET NOT NULL NOT VALID;
   ```

   - **Safety Feature:** The `NOT VALID` keyword tells PostgreSQL: "The application guarantees the existing data is already clean (because we ran the backfill), so just update the metadata now, and don't check the existing rows yet."
   - **Downtime Impact:** This step is **instantaneous** (a metadata-only change) and **non-blocking**, ensuring zero downtime while the constraint is technically added.

2. **The VALIDATE CONSTRAINT Step**

   ```SQL
   ALTER TABLE products VALIDATE CONSTRAINT products_status_not_null;
   ```

   - **Safety Feature:** This command initiates the long-running scan of the table to verify the constraint against all existing data. However, since the constraint was initially created `NOT VALID`, the subsequent validation step performs the check **without blocking concurrent writes **(DML) for most of the duration. A brief, exclusive lock is only taken at the very end.
   - **Downtime Impact:** This minimizes the write lock time from hours (with the single `change_column_null`) down to milliseconds, making the entire operation production-safe.

In summary, you use execute because it is the only way to access the specialized, non-blocking database features (`NOT VALID` and `VALIDATE CONSTRAINT`) required for a zero-downtime schema change on a large table.

### 🧹 Step 4: Cleanup (Deployment 4)

The constraint is now enforced at the database level. You can remove the temporary application logic.

**Application Code Cleanup**

Remove the temporary application-level validation and default setters from the `Product` model.

```Ruby
# app/models/product.rb
class Product < ApplicationRecord
  # Remove: validates :status, presence: true
  # Remove: after_initialize :set_default_status

  # The database is now responsible for enforcing NOT NULL
end
```

**Actions for Deployment 4:**

1. Deploy the final, cleaned-up application code.
2. **Result:** The constraint is enforced efficiently by the database, and the application code is cleaner.

## [How do you change a column type safely in production in Rails?](https://gemini.google.com/share/09e5edb6f08f)

## [How do you drop a column safely when you have multiple deploys/instances?](https://claude.ai/chat/11028ac1-b92d-46e8-852b-83f4cef1baeb)

## How do you add an index concurrently? Why is it required? (And when NOT to use it.)

- [Gemini](https://gemini.google.com/u/1/app/9e1d5892a9baaffd?pageId=none)
- [Claude](https://claude.ai/chat/36e02dbe-7880-49da-b61c-f2a3e8c2fbf3)

## Explain the safe way to add a unique constraint in a high-traffic table.

- [Claude](https://claude.ai/chat/3214d99d-7488-4930-b491-ffd9359978e8)
- [Gemini](https://gemini.google.com/u/1/app/2e7ab24130ec2af4?pageId=none)

## Why can adding a foreign key lock your table, and how to avoid downtime?

- [Claude](https://claude.ai/chat/12c5c09f-54de-4ca2-bd31-e0af564c5d3c)
- [Gemini](https://gemini.google.com/u/1/app/e5a9cf3f99bc535d?pageId=none)

## What causes long-running transactions and how do you detect them?

- [Claude](https://claude.ai/chat/3100b3e1-9443-49ef-9f3e-416caf3bdc95)
- [Gemini](https://gemini.google.com/u/1/app/abfdb857e21952f3?pageId=none)

## Questions

1. How do you backfill a large table safely in production?
   (Talk about batching, find_in_batches, throttling, avoiding long transactions.)

1. How do you add a NOT NULL constraint on a large table without downtime?
   - [How do you add a NOT NULL constraint on a large table without downtime?](https://chatgpt.com/s/t_69216e55101c8191aafcc5ead1ae32ef)
   - [How do you add a NOT NULL constraint on a large table without downtime?](https://claude.ai/chat/200bb055-a2be-4c47-83d5-2e0a2b7590d9)

# Rails Callbacks, Race Conditions & Data Integrity

## What can cause duplicate record creation in Rails callbacks?

- Race conditions, double-callback triggers, retries, non-idempotent logic.

- [Claude](https://claude.ai/chat/b39a8b31-cf60-43b3-bfd4-a091a7928898)
- [Gemini](https://gemini.google.com/u/1/app/01ef8ff103c8f67c?pageId=none)
- [ChatGPT](https://chatgpt.com/s/t_6921ad50ac888191ae634c37e6131e3d)

## How do you make a create/update operation idempotent?

- [Claude](https://claude.ai/chat/b39a8b31-cf60-43b3-bfd4-a091a7928898)
- [Gemini](https://gemini.google.com/u/1/app/01ef8ff103c8f67c?pageId=none)
- [ChatGPT](https://chatgpt.com/s/t_6921add406f88191ac4b178bcd55edaa)

## Explain the problem with validations + callbacks inside transactions.

- [Claude](https://claude.ai/chat/b39a8b31-cf60-43b3-bfd4-a091a7928898)
- [Gemini](https://gemini.google.com/u/1/app/01ef8ff103c8f67c?pageId=none)
- [ChatGPT](https://chatgpt.com/s/t_6922246e4f9081918c3bc26515f18614)

## Why should you avoid business logic in ActiveRecord callbacks?

- [Claude](https://claude.ai/chat/b39a8b31-cf60-43b3-bfd4-a091a7928898)
- [Gemini](https://gemini.google.com/u/1/app/01ef8ff103c8f67c?pageId=none)
- [ChatGPT](https://chatgpt.com/s/t_692224bf7a8c81918cbbe1e5402716fd)

# API & Integration Questions

## What is an API contract test and why do you need one?

- [Claude](https://claude.ai/chat/aec63009-aa66-4d83-bb7f-9992fce05355)
- [Gemini](https://gemini.google.com/u/1/app/1c9e557da2dd090f?pageId=none)
- [Provide example with code between Rails API and React frontend.](https://gemini.google.com/u/1/app/1c9e557da2dd090f?pageId=none)
- [A full working Rails API with OpenAPI via rswag](https://chatgpt.com/s/t_69224c8bc3408191b05a5a27d8f02f78)

### When to use Consumer-Driven Contract (CDC) Testing vs Provider-Driven Contract Testing

- [Claude](https://claude.ai/chat/aec63009-aa66-4d83-bb7f-9992fce05355)
- [Gemini](https://gemini.google.com/u/1/app/1c9e557da2dd090f?pageId=none)

## How would you version an API in a backward-compatible way?

- [Claude](https://claude.ai/chat/a80477dc-94a0-4905-aad4-c872c08f1c4c)
- [Gemini](https://gemini.google.com/u/1/app/5a57a536dbf77006?pageId=none)

## Explain idempotency keys and give real examples.

- [Claude](https://claude.ai/chat/a80477dc-94a0-4905-aad4-c872c08f1c4c)
- [Gemini](https://gemini.google.com/u/1/app/5a57a536dbf77006?pageId=none)
- [ChatGPT](https://chatgpt.com/s/t_692252b0cba88191be094539624ab684)

## What is the difference between timeout and open_timeout in HTTP clients (e.g., Faraday)?

- [ChatGPT](https://chatgpt.com/s/t_69225325e97881918d05b0780a2fa834)

## How do you safely rotate API keys in production?

- [Claude](https://claude.ai/chat/a80477dc-94a0-4905-aad4-c872c08f1c4c)
- [Gemini](https://gemini.google.com/u/1/app/5a57a536dbf77006?pageId=none)
- [ChatGPT](https://chatgpt.com/s/t_6922562d8564819188063ad1c76684fc)
