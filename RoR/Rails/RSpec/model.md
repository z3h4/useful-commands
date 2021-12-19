# Testing Models

- Prepare test database

      rake db:test:prepare

- Create a `models` directory inside `spec` directory.

## Testing Validations

- Use the following format

        RSpec.describe User do
            describe 'validations' do
                describe 'name' do
                    # write validation logic here
                    it 'must be present' do

                    end
                end
            end
        end

- `subject` should be like this

        User.new(name: 'bob')

- While testing validations, We can use `create` instead of `new`.
  - But `create` saves the object to the database. We don't need that for validations.
  - Also, it is a little slower to interact with the database.
  - This is not only true for validations, for testing any method that does not require the object to be saved into the database, use `new`.

## Testing scopes

- Scopes are class methods. So, method names whould start with `.`
- For testing scopes, we need to save the objects in the database. So create objects using `create`.

### Check if an object is valid

        expect(user).to be_valid

### Chek if an object is not valid

        expect(user).to_not be_valid
