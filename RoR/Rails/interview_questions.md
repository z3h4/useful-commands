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
