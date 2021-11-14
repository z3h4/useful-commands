# [`helper_method`](https://apidock.com/rails/ActionController/Helpers/ClassMethods/helper_method)
- Declare a controller method as a helper. 
- This is used for any method that you need to access from both controllers and helpers/views (standard helper methods are not available in controllers).
  - For example, the following makes the `current_user` controller method available to the view: 

        class ApplicationController < ActionController::Base
          helper_method :current_user, :logged_in?

          def current_user
            @current_user ||= User.find_by_id(session[:user])
          end

          def logged_in?
            current_user != nil
          end
        end
    
  -  In a view: 

         <% if logged_in? -%>Welcome, <%= current_user.name %><% end -%>

- https://apidock.com/rails/ActionController/Helpers/ClassMethods/helper_method
- https://stackoverflow.com/questions/3992659/what-do-helper-and-helper-method-do