# Validations
- Use the following format

        RSpec.describe User do
            describe 'validations' do
                describe 'name' do
                    # write validation logic here
                end
            end
        end

- `subject` should be like this

        User.new(name: 'bob')

    - We can use `create` instead of `new`, but `create` saves the object to the database. We don't need that.

### Chek if an object is valid

        expect(user).to be_valid

### Chek if an object is not valid

        expect(user).to_not be_valid