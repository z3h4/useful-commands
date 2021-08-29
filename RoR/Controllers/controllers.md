# Parameters

- Both **query string parameters** and **POST parameters** are available in the `params` hash in the controller.
- Parameter values are always strings.
- The params object acts like a Hash, but lets us use symbols and strings interchangeably as keys.
- If the `Content-Type` header of the request is set to `application/json`, Rails will automatically load the parameters into the `params` hash.
- The params hash contains the `:controller` and `:action` keys, but you should use the methods `controller_name` and `action_name` instead to access these values.

## Strong Parameters

### `permit` method
Returns a new `ActionController::Parameters` instance that includes only the given filters and sets the permitted attribute for the object to true. This is useful for limiting which attributes should be allowed for mass updating.

- Example

      params = ActionController::Parameters.new(user: { name: "Francesco", age: 22, role: "admin" })
      
      params.require(:user).permit(:name, :age)

- To declare that the value in params must be an array of permitted scalar values, map the key to an empty array:

      params.permit(id: [])

- Sometimes it is not possible or convenient to declare the valid keys of a hash parameter or its internal structure. Just map to an empty hash:

      params.permit(preferences: {})

### Using `permit` on Nested Parameters

- Consider the following parameter

      person: {
        name: "Francesco",
        age:  22,
        contact: {
          email: "none@test.com",
          phone: "555-1234"
        },
        pets: [{
          name: "Purplish",
          category: "dogs"
        }]
      }

  We can declare `permit` as following

      params.require(:person).permit(:contact)
      params.require(:person).permit(contact: :phone)
      params.require(:person).permit(contact: [ :email, :phone ])
      params.permit(person: [ :name, { pets: :name } ])

### `permitted?()` method

  - Returns `true` if the parameter is permitted, `false` otherwise.

        person_params = params.require(:person).permit(:name, :age)
        person_params.permitted?

### `permit!` method
- To permit an entire hash of parameters, the `permit!` method can be used:

      params.require(:log_entry).permit!


### [`require(key)`](https://api.rubyonrails.org/v6.1.4/classes/ActionController/Parameters.html#method-i-require) method

- This method accepts both a single key and an array of keys.
- Example
    - **Single key**

          params.require(:person)

    - **Array of keys**

      When given an array of keys, the method tries to require each one of them in order. If it succeeds, an array with the respective return values is returned:

          user_params, profile_params = params.require([:user, :profile])

- If the key does not exists, `require` will throw `ActionController::ParameterMissing` exception. 


- If the key we are trying to access in the `params` hash is absent, it'll raise an `ActionController::ParameterMissing` exception, which will get  caught by ActionController::Base and turned into a 400 Bad Request error.
