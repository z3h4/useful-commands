# Dealing with Basic Forms

- The main form helper is `form_with`.
  - Default method is `POST`.
  - For every form input, an ID attribute is generated from its name.
  - Use `GET` as the method for search forms.
    - This allows users to bookmark a specific search and get back to it.

## `fields_for` helper

- This is useful for editing additional model objects with the same form.

## Form Helpers vs Form Tag Helpers

- Form helpers provides a number of methods for creating form and rely on an `ActiveRecord` object. They are used with `form_with`/`form_for`.
  - `text_field`
  - `check_box`
- Form Tag Helpers provides a number of methods for creating form tags that don’t rely on an Active Record object.
  - They are used outside the context of a form builder. For example,
    - `button_tag`
    - `text_field_tag`
