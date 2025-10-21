Consider the following model

```Ruby
class BlogPost < ApplicationRecord
  validates :title, :body, presence: true
end
```

### `create` vs `create!`

- `create` creates an object and saves it in the database (if validation passes).

  - It returns the resulting object whether the object was saved successfully to the database or not.

  ```Ruby
  BlogPost.create(title: "Title")

  # <BlogPost:0x000000012cc97868
  #  id: nil,
  #  title: "Title",
  #  body: nil,
  #  created_at: nil,
  #  updated_at: nil>
  ```

- `create!` is the same as `create` except that it raises a `ActiveRecord::RecordInvalid` error if validations fails instead of returning the resulting object.

### `update` vs `update!`

- Both returns true if if update was successful.
- If validation fails, `update` returns false. But, `update!` raises a `ActiveRecord::RecordInvalid` error if validations fails.

### `save` vs `save!`

- Both returns true if the object is saved in the database.
- If validation fails, `save` returns false but `save!` raises a `ActiveRecord::RecordInvalid` error.
