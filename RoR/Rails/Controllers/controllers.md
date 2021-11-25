# What Does a Controller Do?

- The router determines which controller and action to run for a request.
  - Then Rails creates an instance of that controller and runs the method with the same name as the action.
- The controller is responsible for making sense of the request, and producing the appropriate output.
- A controller is a Ruby class which inherits from `ApplicationController` and has methods just like any other class.
- A controller can be thought of as a middleman between models and views. It makes the model data available to the view so it can display that data to the user, and it saves or updates user data to the model.

# Controller Naming Convention

- Pluralize the last word in the controller's name.
  - For example, `ClientController`, `SiteAdminsController`.
  - Exception: `ApplicationController`
- Following this convention will allow you to use the default route generators (e.g. `resources`, etc) without needing to qualify each `:path` or `:controller`.

# Parameters

- Both **query string parameters** and **POST parameters** are available in the `params` hash in the controller.
- **Parameter values are always strings.**
- The params object acts like a Hash, but lets us use symbols and strings interchangeably as keys.
- If the `Content-Type` header of the request is set to `application/json`, Rails will automatically load the parameters into the `params` hash.
- The params hash contains the `:controller` and `:action` keys, but you should use the methods `controller_name` and `action_name` instead to access these values.

## Strong Parameters

- If you try to use mass assignment without the `permit` step, we'll get `ActiveModel::ForbiddenAttributesError` error.
- If we use `permit` and there is any required paraeter missing, it'll throw `ActionController::ParameterMissing` exception, which will get caught by `ActionController::Base` and turned into a 400 Bad Request error.

### `permit` method

Returns a new `ActionController::Parameters` instance that includes only the given filters and sets the `permitted` attribute for the object to true. This is useful for limiting which attributes should be allowed for mass updating.

- Example

      params = ActionController::Parameters.new(user: { name: "Francesco", age: 22, role: "admin" })

      params.require(:user).permit(:name, :age)

- To declare that the value in params must be an array of permitted scalar values, map the key to an empty array:

      params.permit(id: [])

- Sometimes it is not possible or convenient to declare the valid keys of a hash parameter or its internal structure. Just map to an empty hash:

      params.permit(preferences: {})

### Using `permit` on Nested Parameters

- Consider the following parameter

      params = ActionController::Parameters.new({
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
      }

  We can declare `permit` as following

      params.require(:person).permit(:contact)
      params.require(:person).permit(contact: :phone)
      params.require(:person).permit(contact: [ :email, :phone ])
      params.permit(person: [ :name, { pets: :name } ])

### `permit!` method

- To permit an entire hash of parameters, the `permit!` method can be used:

      params.require(:log_entry).permit!

- `params.permit!` whitelists all attributes leading to the vulnerabilities of mass assignment.
- It sets the `permitted` attribute to `true`.
- It returns `self`.

      params = ActionController::Parameters.new(name: "Francesco")
      params.permitted?  # => false
      Person.new(params) # => ActiveModel::ForbiddenAttributesError
      params.permit!
      params.permitted?  # => true
      Person.new(params) # => #<Person id: nil, name: "Francesco">

### `permitted?()` method

- Returns `true` if the parameter is permitted, `false` otherwise.

      person_params = params.require(:person).permit(:name, :age)
      person_params.permitted?

- Another example:

      params = ActionController::Parameters.new
      params.permitted? # => false
      params.permit!
      params.permitted? # => true

### [`require(key)`](https://api.rubyonrails.org/v6.1.4/classes/ActionController/Parameters.html#method-i-require) method

- This method accepts both a single key and an array of keys.
- Example

  - **Single key**

        params.require(:person)

  - **Array of keys**

    When given an array of keys, the method tries to require each one of them in order. If it succeeds, an array with the respective return values is returned:

        user_params, profile_params = params.require([:user, :profile])

- If the key does not exists, `require` will throw `ActionController::ParameterMissing` exception.

- If the key we are trying to access in the `params` hash is absent, it'll raise an `ActionController::ParameterMissing` exception, which will get caught by ActionController::Base and turned into a 400 Bad Request error.

# Session

- Your application has a session for each user in which you can store small amounts of data that will be persisted between requests.
- The session is only available in the controller and the view and can use one of a number of different storage mechanisms:

1.  **`ActionDispatch::Session::CookieStore`**

    - **Stores everything on the client.**
    - This cookie-based session store is the Rails default.
      - It is dramatically faster than the alternatives.
    - Sessions typically contain at most a user_id and flash message; both fit within the 4096 bytes cookie size limit.
      - A `CookieOverflow` exception is raised if you attempt to store more than 4096 bytes of data.
    - Your cookies will be encrypted using your apps `secret_key_base`. This goes a step further than signed cookies in that encrypted cookies cannot be altered or read by users. This is the default starting in Rails 4.
    - The `CookieStore` can store around 4kB of data - much less than the others - but this is usually enough.
    - https://api.rubyonrails.org/v6.1.4/classes/ActionDispatch/Session/CookieStore.html

2.  **`ActionDispatch::Session::CacheStore`**

    - Stores the data in the Rails cache.
    - It uses an `ActiveSupport::Cache::Store` to store the sessions.
    - This store is most useful if you don't store critical data in your sessions and you don't need them to live for extended periods of time.
    - If your user sessions don't store critical data or don't need to be around for long periods (for instance if you just use the flash for messaging), you can consider using `ActionDispatch::Session::CacheStore`.
    - This will store sessions using the cache implementation you have configured for your application.
    - The advantage of this is that you can use your existing cache infrastructure for storing sessions without requiring any additional setup or administration.
    - The downside, of course, is that the sessions will be ephemeral and could disappear at any time.
    - https://api.rubyonrails.org/v6.1.4/classes/ActionDispatch/Session/CacheStore.html

3.  **`ActionDispatch::Session::ActiveRecordStore`**

    - Stores the data in a database using Active Record (requires the `activerecord-session_store` gem).

4.  **`ActionDispatch::Session::MemCacheStore`**

    - Stores the data in a memcached cluster (this is a legacy implementation; consider using CacheStore instead)

- All session stores use a cookie to store a unique ID for each session (you must use a cookie, Rails will not allow you to pass the session ID in the URL as this is less secure).
- For most stores, this ID is used to look up the session data on the server, e.g. in a database table. There is one exception, and that is the default and recommended session store - the CookieStore - which stores all session data in the cookie itself (the ID is still available to you if you need it). This has the advantage of being very lightweight and it requires zero setup in a new application in order to use the session. The cookie data is cryptographically signed to make it tamper-proof. And it is also encrypted so anyone with access to it can't read its contents. (Rails will not accept it if it has been edited).
- Storing large amounts of data in the session is discouraged no matter which session store your application uses. You should especially avoid storing complex objects (such as model instances) in the session, as the server might not be able to reassemble them between requests, which will result in an error.
- If you need a different session storage mechanism, you can change it in an initializer:

      Rails.application.config.session_store :active_record_store

- Rails sets up a session key (the name of the cookie) when signing the session data. These can also be changed in an initializer:

      Rails.application.config.session_store :cookie_store, key: '_your_app_session'

- You can also pass a `:domain` key and specify the domain name for the cookie:

      Rails.application.config.session_store :cookie_store, key: '_your_app_session', domain: ".example.com"

- Rails sets up (for the `CookieStore`) a secret key used for signing the session data in `config/credentials.yml.enc`. This can be changed with `bin/rails credentials:edit`.

      secret_key_base: 492f...

- Changing the `secret_key_base` when using the `CookieStore` will invalidate all existing sessions.

## Accessing the Session

- In your controller you can access the session through the `session` instance method.
- Session values are stored using key/value pairs like a hash:

      def current_user
        @_current_user ||= session[:current_user_id] &&
          User.find_by(id: session[:current_user_id])
      end

- Sessions are lazily loaded. If you don't access sessions in your action's code, they will not be loaded. Hence you will never need to disable sessions, just not accessing them will do the job.

## Storing values in the Session

- To store something in the session, just assign it to the key like a hash:

      session[:current_user_id] = user.id

## Remove something from the Session

- To remove something from the session, delete the key/value pair:

      def destroy
        # Remove the user id from the session
        session.delete(:current_user_id)
        # Clear the memoized current user
        @_current_user = nil
        redirect_to root_url
      end

- To reset the entire session, use `reset_session` method.
  - Resets the session by clearing out all the objects stored within and initializing a new session object.

# The Flash

- The flash is a special part of the session which is cleared with each request.
- This means that values stored there will only be available in the next request, which is useful for passing error messages, etc.
- The flash is accessed via the `flash` method. Like the session, the flash is represented as a hash.
- Let's use the act of logging out as an example. The controller can send a message which will be displayed to the user on the next request:

      class LoginsController < ApplicationController
        def destroy
          session.delete(:current_user_id)
          flash[:notice] = "You have successfully logged out."
          redirect_to root_url
        end
      end

- Note that it is also possible to assign a flash message as part of the redirection. You can assign `:notice`, `:alert` or the general purpose `:flash`:

      redirect_to root_url, notice: "You have successfully logged out."
      redirect_to root_url, alert: "You're stuck here!"
      redirect_to root_url, flash: { referral_code: 1234 }

- It's conventional to display any error alerts or notices from the flash in the application's layout:

      <html>
        <!-- <head/> -->
        <body>
          <% flash.each do |name, msg| -%>
            <%= content_tag :div, msg, class: name %>
          <% end -%>

          <!-- more content -->
        </body>
      </html>

- You can pass anything that the session can store; you're not limited to notices and alerts:

      <% if flash[:just_signed_up] %>
        <p class="welcome">Welcome to our site!</p>
      <% end %>

- If you want a flash value to be carried over to another request, use `flash.keep`

  - **`flash.keep`**

    - Keeps either the entire current flash or a specific flash entry available for the next action:

          def index
            # Will persist the entire flash.
            flash.keep

            #  keeps only the "notice" entry, the rest of the flash is discarded
            # flash.keep(:notice)
            redirect_to users_url
          end

- **`flash.now`**

  - By default, adding values to the flash will make them available to the next request, but sometimes you may want to access those values in the same request.
  - For example, if the create action fails to save a resource and you render the new template directly, that's not going to result in a new request, but you may still want to display a message using the flash. To do this, you can use `flash.now` in the same way you use the normal flash:

        def create
          @client = Client.new(client_params)
          if @client.save
            # ...
          else
            flash.now[:error] = "Could not save client"
            render action: "new"
          end
        end

# Cookies

- Your application can store small amounts of data on the client - called cookies - that will be persisted across requests and even sessions.
- Rails provides easy access to cookies via the `cookies` method, which - much like the session - works like a hash:

      class CommentsController < ApplicationController
        def new
          # Auto-fill the commenter's name if it has been stored in a cookie
          @comment = Comment.new(author: cookies[:commenter_name])
        end

        def create
          @comment = Comment.new(comment_params)
          if @comment.save
            flash[:notice] = "Thanks for your comment!"
            if params[:remember_name]
              # Remember the commenter's name.
              cookies[:commenter_name] = @comment.author
            else
              # Delete cookie for the commenter's name cookie, if any.
              cookies.delete(:commenter_name)
            end
            redirect_to @comment.article
          else
            render action: "new"
          end
        end
      end

- Note that while for session values you can set the key to `nil`, to delete a cookie value you should use `cookies.delete(:key)`.
- Rails also provides a signed cookie jar and an encrypted cookie jar for storing sensitive data.
  - The signed cookie jar appends a cryptographic signature on the cookie values to protect their integrity.
  - The encrypted cookie jar encrypts the values in addition to signing them, so that they cannot be read by the end user.
- These special cookie jars use a serializer to serialize the assigned values into strings and deserializes them into Ruby objects on read.

  - You can specify what serializer to use:

        Rails.application.config.action_dispatch.cookies_serializer = :json

- It's advisable that you only store simple data (strings and numbers) in cookies. If you have to store complex objects, you would need to handle the conversion manually when reading the values on subsequent requests.

## `cookies` method

- Read and write data to cookies through `ActionController#cookies`.
- When reading cookie data, the data is read from the HTTP request header, `Cookie`.
- When writing cookie data, the data is sent out in the HTTP response header, `Set-Cookie`.
- Examples:
  - https://api.rubyonrails.org/v6.1.4/classes/ActionDispatch/Cookies.html

---

# Filters

- Filters are methods that are run "before", "after" or "around" a controller action.
- Filters are inherited, so if you set a filter on `ApplicationController`, it will be run on every controller in your application.

## Before filters

- "before" filters are registered via `before_action`. They may halt the request cycle.
- A common "before" filter is one which requires that a user is logged in for an action to be run. You can define the filter method this way:

      class ApplicationController < ActionController::Base
        before_action :require_login

        private

        def require_login
          unless logged_in?
            flash[:error] = "You must be logged in to access this section"
            redirect_to new_login_url # halts request cycle
          end
        end
      end

- If a "before" filter renders or redirects, the action will not run. If there are additional filters scheduled to run after that filter, they are also cancelled.
- You can prevent "before" filter from running before particular actions with `skip_before_action`:

      class LoginsController < ApplicationController
        skip_before_action :require_login, only: [:new, :create]
      end

- Now, the `LoginsController`'s `new` and `create` actions will work as before without requiring the user to be logged in.
- The `:only` option is used to skip this filter only for these actions, and there is also an `:except` option which works the other way.
- These options can be used when adding filters too, so you can add a filter which only runs for selected actions in the first place.

## After Filters

- In addition to "before" filters, you can also run filters after an action has been executed, or both before and after.
- "after" filters are registered via `after_action`.
- They are similar to "before" filters, but because the action has already been run **they have access to the response data** that's about to be sent to the client.
- Obviously, "after" filters cannot stop the action from running.
- **"after" filters are executed only after a successful action, but not when an exception is raised in the request cycle.**

## Around Filters

- Around filters run both before and after an action has been executed.
- "around" filters are registered via `around_action`.
- They are responsible for running their associated actions by yielding, similar to how Rack middlewares work.

---

# Request Forgery Protection

- Cross-site request forgery is a type of attack in which a site tricks a user into making requests on another site, possibly adding, modifying, or deleting data on that site without the user's knowledge or permission.
- The first step to avoid this is to make sure all "destructive" actions (create, update, and destroy) can only be accessed with non-GET requests.
- However, a malicious site can still send a non-GET request to your site quite easily, and that's where the request forgery protection comes in. As the name says, it protects from forged requests.
- The way this is done is to add a non-guessable token which is only known to your server to each request. This way, if a request comes in without the proper token, it will be denied access.
- Rails adds this token to every form that's generated using the form helpers, so most of the time you don't have to worry about it.
  - If you're writing a form manually or need to add the token for another reason, it's available through the method `form_authenticity_token`.
  - The `form_authenticity_token` generates a valid authentication token. That's useful in places where Rails does not add it automatically, like in custom Ajax calls.

---

# Rendering and Redirection

## `redirect_to`

- `redirect_to` another action in the same controller

      redirect_to action: :show

- `redirect_to` another action in different controller

      redirect_to controller: :user action: :show

- `redirect_to` another action and pass params

      redirect_to action: :show, search_term: params['search_term']

- `redirect_to` back to the page that issues the request

      redirect_to :back

- Statements after `redirect_to` in our controller get executed. To terminate the execution of the function use

      redirect_to post_url(@post) and return

- It is also possible to assign a flash message as part of the redirection.

      redirect_to post_url(@post), alert: "Watch it, mister!"
      redirect_to post_url(@post), status: :found, notice: "Pay attention to the road"
      redirect_to post_url(@post), status: 301, flash: { updated_post_id: @post.id }
      redirect_to({ action: 'atom' }, alert: "Something serious happened")

- https://api.rubyonrails.org/classes/ActionController/Redirecting.html#method-i-redirect_to
