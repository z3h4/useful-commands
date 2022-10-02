# The Purpose of the Rails Router

- Recognize URLs and dispatche them to a controller's action, or to a Rack application.
- Generate paths and URLs, so that you don't have to hardcode strings in your views.

### Routing example

- Consider a listing of clients where the list can show either active or inactive clients. We can add a route which captures the `:status` parameter in a "pretty" URL:

      get '/clients/:status', to: 'clients#index', foo: 'bar'

- When a user opens the URL `/clients/active`

  - `params[:status]` will be set to "active"
  - `params[:foo]` will be set to "bar", as if it were passed in the query string
  - Your controller will also receive `params[:action]` as "index" and `params[:controller]` as "clients".

# Resource Routing: the Rails Default

- It allows us to declare all of the common routes for a given resourceful controller.
- A single call to `resources` can declare all of the necessary routes for your `index`, `show`, `new`, `edit`, `create`, `update`, and `destroy` actions.
- A single entry in the routing file, such as:

      resources :photos

creates seven different routes in your application, all mapping to the Photos controller.

| HTTP Verb |       Path       | Controller#Action |
| :-------: | :--------------: | :---------------: |
|    GET    |     /photos      |   photos#index    |
|    GET    |   /photos/new    |    photos#new     |
|   POST    |     /photos      |   photos#create   |
|    GET    |   /photos /:id   |    photos#show    |
|    GET    | /photos/:id/edit |    photos#edit    |
| PATCH/PUT |   /photos/:id    |   photos#update   |
|  DELETE   |   /photos/:id    |  photos#destroy   |

- Because the router uses the HTTP verb and URL to match inbound requests, four URLs map to seven different actions.
- Rails routes are matched in the order they are specified, so if you have a `resources :photos` above a `get 'photos/poll'`, the show action's route for the resources line will be matched before the get line. To fix this, move the get line above the resources line so that it is matched first.
- https://guides.rubyonrails.org/routing.html#crud-verbs-and-actions

## Path and URL Helpers

- If we reate a resourceful route i.e. `resources :photos`, we can use a number of path and URL helpers

- `photos_path` returns `/photos`
- `new_photo_path` returns `/photos/new`
- `edit_photo_path(:id)` returns `/photos/:id/edit`
- `photo_path(:id)` returns `/photos/:id`

## Defining Multiple Resources at the Same Time

    resources :photos, :books, :videos

## Singular Resources

- Sometimes, you have a resource that clients always look up without referencing an ID. For example, you would like `/profile` to always show the profile of the currently logged in user. In this case, you can use a singular resource to map `/profile` (rather than `/profile/:id`) to the show action:

      get 'profile', to: 'users#show'

We can also use the following, which is the same

      get 'profile', action: :show, controller: 'users'

- This resourceful route:

      resource :geocoder

creates six different routes in your application:

| HTTP Verb |      Path      | Controller#Action |
| :-------: | :------------: | :---------------: |
|    GET    | /geocoder/new  |   geocoders#new   |
|   POST    |   /geocoder    | geocoders#create  |
|    GET    |   /geocoder    |  geocoders#show   |
|    GET    | /geocoder/edit |  geocoders#edit   |
| PATCH/PUT |   /geocoder    | geocoders#update  |
|  DELETE   |   /geocoder    | geocoders#destroy |

- A singular resourceful route generates these helpers:
  - `new_geocoder_path` returns `/geocoder/new`
  - `edit_geocoder_path` returns `/geocoder/edit`
  - `geocoder_path` returns `/geocoder`

## Controller Namespaces and Routing

### `namespace`

- You may wish to organize groups of controllers under a namespace.

  - For example, you might group a number of administrative controllers under an `Admin::` namespace, and place these controllers under the `app/controllers/admin` directory.
  - You can route to such a group by using a namespace block:

        namespace :admin do
          resources :articles, :comments
        end

  - In this case, `admin_articles_path` helper will route to `/admin/articles` path and `admin/articles#index` action.

- **Options**

  - **Changing URLs only**

    - When you want to namespace your controller classes but leave the corresponding routes unaffected

          namespace :admin, path: "sekret" do
            resources :posts
          end

    - Accessible through `/sekret/posts` rather than `/admin/posts`
    - URL: `/sekret/posts`
    - Route helper: `admin_posts_path`
    - Controller class: `Admin::PostsController`

- maps to `Sekret::PostsController` rather than `Admin::PostsController`

      namespace :admin, module: "sekret" do
        resources :posts
      end

- generates `sekret_posts_path` rather than `admin_posts_path`

      namespace :admin, as: "sekret" do
        resources :posts
      end

### `scope`

- If instead you want to route `/articles` (without the prefix `/admin`) to `Admin::ArticlesController`, you can specify the module with a scope block:

      scope module: 'admin' do
        resources :articles, :comments
      end

- This can also be done for a single route:

      resources :articles, module: 'admin'

- If instead you want to route `/admin/articles` to `ArticlesController` (without the `Admin::` module prefix), you can specify the path with a scope block:

      scope '/admin' do
        resources :articles, :comments
      end

- This can also be done for a single route:

      resources :articles, path: '/admin/articles'

- In both of these cases, the named route helpers remain the same as if you did not use `scope`.
- In the last case, the following paths map to `ArticlesController`:

| HTTP Verb |           Path           | Controller#Action |   Named Route Helper   |
| :-------: | :----------------------: | :---------------: | :--------------------: |
|    GET    |     /admin/articles      |  articles#index   |     articles_path      |
|   POST    |     /admin/articles      |  articles#create  |     articles_path      |
|    GET    |   /admin/articles/new    |   articles#new    |    new_article_path    |
|    GET    | /admin/articles/:id/edit |   articles#edit   | edit_article_path(:id) |
|    GET    |   /admin/articles/:id    |   articles#show   |   article_path(:id)    |
| PATCH/PUT |   /admin/articles/:id    |  articles#update  |   article_path(:id)    |
|  DELETE   |   /admin/articles/:id    | articles#destroy  |   article_path(:id)    |

- **Options**

  - **Changing URLs only**

    - When you want to namespace some paths but leave the corresponding controllers and url helpers unaffected, you can use the `scope` method like follows:

          scope path: "/admin" do
            resources :posts
          end

    - Prefix the posts resource's requests with `/admin`
    - URL: `/admin/posts`
    - Route helper: `posts_path`
    - Controller class: `PostsController`
    - A typical use case is the customer asking you to change some URLs.

  - route `/posts` (without the prefix `/admin`) to `Admin::PostsController`

        scope module: "admin" do
          resources :posts
        end

  - prefix the routing helper name: `sekret_posts_path` instead of `posts_path`

        scope as: "sekret" do
          resources :posts
        end

- https://makandracards.com/makandra/38773-rails-route-namespacing-in-different-flavors

## Nested Resources

- **Best Practice:** resources should never be nested more than 1 level deep.

### Shallow Nesting

- Avoid deep nesting by generating the collection actions scoped under the parent, but not nest the member actions.

### Adding More RESTful Actions

- Other than the seven RESTful routing Rails creates by default, you may add additional routes that apply to the collection or individual members of the collection. For example,

      resources :articles do
        resources :comments, only: [:index, :new, :create]
      end
      resources :comments, only: [:show, :edit, :update, :destroy]

- The shorthand syntax is:

      resources :articles do
        resources :comments, shallow: true
      end

- You can also specify the `:shallow` option in the parent resource, in which case all of the nested resources will be shallow:

      resources :articles, shallow: true do
        resources :comments
        resources :quotes
        resources :drafts
      end

- There exist two options for `scope` to customize shallow routes. `:shallow_path` prefixes member paths with the specified parameter:

      scope shallow_path: "sekret" do
        resources :articles do
          resources :comments, shallow: true
        end
      end

| HTTP Verb |                Path                |    Named Route Helper    |
| :-------: | :--------------------------------: | :----------------------: |
|    GET    |   /articles/:article_id/comments   |  article_comments_path   |
|   POST    |   /articles/:article_id/comments   |  article_comments_path   |
|    GET    | /articles/:article_id/comments/new | new_article_comment_path |
|    GET    |     /sekret/comments/:id/edit      |    edit_comment_path     |
|    GET    |        /sekret/comments/:id        |       comment_path       |
| PATCH/PUT |        /sekret/comments/:id        |       comment_path       |
|  DELETE   |        /sekret/comments/:id        |       comment_path       |

- The `:shallow_prefix` option adds the specified parameter to the named route helpers:

      scope shallow_prefix: "sekret" do
        resources :articles do
          resources :comments, shallow: true
        end
      end

| HTTP Verb |                Path                |    Named Route Helper    |
| :-------: | :--------------------------------: | :----------------------: |
|    GET    |   /articles/:article_id/comments   |  article_comments_path   |
|   POST    |   /articles/:article_id/comments   |  article_comments_path   |
|    GET    | /articles/:article_id/comments/new | new_article_comment_path |
|    GET    |         /comments/:id/edit         | edit_sekret_comment_path |
|    GET    |           /comments/:id            |   sekret_comment_path    |
| PATCH/PUT |           /comments/:id            |   sekret_comment_path    |
|  DELETE   |           /comments/:id            |   sekret_comment_path    |

- https://guides.rubyonrails.org/routing.html#shallow-nesting

### Routing Concerns

- Using routing concerns we can declare common routes and use them inside other resources and routes.
- To define a concern, use a `concern` block.

      concern :commentable do
        resources :comments
      end

      concern :image_attachable do
        resources :images, only: :index
      end

- These concerns can be used in resources to **avoid code duplication** and **share behavior across routes**:

      resources :messages, concerns: :commentable

      resources :articles, concerns: [:commentable, :image_attachable]

- The above is equivalent to:

      resources :messages do
        resources :comments
      end

      resources :articles do
        resources :comments
        resources :images, only: :index
      end

- You can also use them anywhere by calling `concerns`. For example, in a `scope` or `namespace` block:

      namespace :articles do
        concerns :commentable
      end

### Creating Paths and URLs from Objects

https://guides.rubyonrails.org/routing.html#creating-paths-and-urls-from-objects

- **Adding Member Routes**

  - Defining a member block inside a resource creates a route that can act on an individual member of that resource-based route.
  - Use `member` block

        resources :photos do
          member do
            get 'preview'
          end
        end

  - This will recognize `/photos/1/preview` with `GET`, and route to the `preview` action of `PhotosController`, with the resource id value passed in `params[:id]`. It will also create the `preview_photo_url` and `preview_photo_path` helpers.
  - If you don't have multiple `member` routes, you can also pass `:on` to a route, eliminating the block:

        resources :photos do
          get 'preview', on: :member
        end

- **Adding Collection Routes**

  - Collection routes allow for creating routes that can act on a collection of resource objects.
  - Use `collection` block

        resources :photos do
          collection do
            get 'search'
          end
        end

  - This will enable Rails to recognize paths such as `/photos/search` with `GET`, and route to the `search` action of `PhotosController`. It will also create the `search_photos_url` and `search_photos_path` route helpers.
  - Just as with member routes, you can pass `:on` to a route:

        resources :photos do
          get 'search', on: :collection
        end

  - Note: If you're defining additional resource routes with a symbol as the first positional argument, be mindful that it is not equivalent to using a string. **Symbols infer controller actions while strings infer paths.**

## Non-Resourceful Routes

- Used for routing arbitrary URLs to actions.
- Here, you set up each route separately within your application.

### Bound Parameters

- When you set up a regular route, you can supply a series of symbols that Rails maps to parts of an incoming HTTP request. For example, consider this route:

      get 'photos(/:id)', to: 'photos#display'

- If an incoming request of `/photos/1` is processed by this route, then the result will be to invoke the `display` action of the `PhotosController`, and to make the final parameter "1" available as `params[:id]`.
- This route will also route the incoming request of `/photos` to `PhotosController#display`, since `:id` is an optional parameter, denoted by parentheses.

### Dynamic Segments

- You can set up as many dynamic segments within a regular route as you like.
- Any segment will be available to the action as part of `params`. If you set up this route:

      get 'photos/:id/:user_id', to: 'photos#show'

- An incoming path of `/photos/1/2` will be dispatched to the `show` action of the `PhotosController`. `params[:id]` will be "1", and `params[:user_id]` will be "2".
- By default, dynamic segments don't accept dots - this is because the dot is used as a separator for formatted routes. If you need to use a dot within a dynamic segment, add a constraint that overrides this – for example, `id: /[^\/]+/` allows anything except a slash.

### Static Segments

- You can specify static segments when creating a route by not prepending a colon to a segment:

      get 'photos/:id/with_user/:user_id', to: 'photos#show'

- This route would respond to paths such as `/photos/1/with_user/2`. In this case, `params` would be `{ controller: 'photos', action: 'show', id: '1', user_id: '2' }`.

### The Query String

- The params will also include any parameters from the query string. For example, with this route:

      get 'photos/:id', to: 'photos#show'

- An incoming path of `/photos/1?user_id=2` will be dispatched to the show action of the `Photos` controller. params will be `{ controller: 'photos', action: 'show', id: '1', user_id: '2' }`.

### Defining Defaults

- The `defaults` option allows you to set default parameters for a route.
- The `:defaults` option takes a hash.

      get 'photos/:id', to: 'photos#show', defaults: { format: 'jpg' }

- Rails would match `photos/12` to the `show` action of `PhotosController`, and set `params[:format]` to "jpg".
- You can also use a `defaults` block to define the defaults for multiple items:

      defaults format: :json do
        resources :photos
      end

- Another example:

      defaults id: 'home' do
        match 'scoped_pages/(:id)', to: 'pages#show'
      end

  - Using this, the `:id` parameter here will default to 'home'.

- You cannot override `defaults` via query parameters - this is for security reasons. The only defaults that can be overridden are dynamic segments via substitution in the URL path.

### Naming Routes

- You can specify a name for any route using the `:as` option:

      get 'exit', to: 'sessions#destroy', as: :logout

- This will create `logout_path` and `logout_url` as named route helpers in your application. Calling `logout_path` will return `/exit`.
- You can also use this to override routing methods defined by resources by placing custom routes before the resource is defined, like this:

      get ':username', to: 'users#show', as: :user
      resources :users

- This will define a `user_path` method that will be available in controllers, helpers, and views that will go to a route such as `/bob`. Inside the `show` action of `UsersController`, `params[:username]` will contain the username for the user.

### HTTP Verb Constraints

- In general, you should use the get, post, put, patch, and delete methods to constrain a route to a particular verb.
- You can use the `match` method with the `:via` option to match multiple verbs at once:

      match 'photos', to: 'photos#show', via: [:get, :post]

- You can match all verbs to a particular route using `via: :all`:

      match 'photos', to: 'photos#show', via: :all

- Routing both GET and POST requests to a single action has security implications. In general, you should avoid routing all verbs to an action unless you have a good reason to.
- GET in Rails won't check for CSRF token. You should never write to the database from GET requests.

### Segment Constraints

- You can use the `:constraints` option to enforce a format for a dynamic segment:

      get 'photos/:id', to: 'photos#show', constraints: { id: /[A-Z]\d{5}/ }

- This route would match paths such as `/photos/A12345`, but not `/photos/893`.
- You can more succinctly express the same route this way:

      get 'photos/:id', to: 'photos#show', id: /[A-Z]\d{5}/

- `:constraints` takes regular expressions with the restriction that regexp anchors can't be used. For example, the following route will not work:

      get '/:id', to: 'articles#show', constraints: { id: /^\d/ }

- However, note that you don't need to use anchors because all routes are anchored at the start and the end.
- For example, the following routes would allow for articles with to_param values like 1-hello-world that always begin with a number and users with to_param values like david that never begin with a number to share the root namespace:

      get '/:id', to: 'articles#show', constraints: { id: /\d.+/ }
      get '/:username', to: 'users#show'

### Request-Based Constraints

- You can also constrain a route based on any method on the Request object that returns a String.
- You specify a request-based constraint the same way that you specify a segment constraint:

      get 'photos', to: 'photos#index', constraints: { subdomain: 'admin' }

- You can also specify constraints by using a constraints block:

      namespace :admin do
        constraints subdomain: 'admin' do
          resources :photos
        end
      end

- Request constraints work by calling a method on the Request object with the same name as the hash key and then comparing the return value with the hash value. Therefore, constraint values should match the corresponding Request object method return type. For example: constraints: { subdomain: 'api' } will match an api subdomain as expected. However, using a symbol constraints: { subdomain: :api } will not, because request.subdomain returns 'api' as a String.

- There is an exception for the format constraint: while it's a method on the Request object, it's also an implicit optional parameter on every path. Segment constraints take precedence and the format constraint is only applied as such when enforced through a hash. For example, get 'foo', constraints: { format: 'json' } will match GET /foo because the format is optional by default. However, you can use a lambda like in get 'foo', constraints: lambda { |req| req.format == :json } and the route will only match explicit JSON requests.

### `_path` vs `_url`

- `_path` returns the url relative to your domain.
- `_url` returns an absolute path, including protocol and server name.
- For instance, `root_path` returns `/` while `root_url` returns http://mydomain.com/.
- You should always use `_url` for redirects and `_path` for hyperlinks unless you have a good reason not to do so.

### `resource` vs `resources`

- `resources` generates one extra route for the `index` action.
- Singular routes don’t have ID of resource being worked on.
- Both singular and plural resource routes route request to pluralized controller.

### `patch` vs `put`

- **_`put`_**

  - In `PUT` method the resource is first identified from the URL and if it exists then it is updated otherwise a new resource is created.
  - For example, if you upload a file to Amazon S3 at some URL, you want either to create the file at that URL or replace an existing file if there’s one. That is PUT.
  - So, when the target resource exists it overwrites that resource with a complete new body. So, PUT method is used to CREATE or UPDATE a resource.
  - Example: Use `PUT` method to update existing order.

- **_`patch`_**

  - A `PATCH` method is used for partial modifications to a resource.
  - `PATCH` method is like a `UPDATE` query in SQL which sets or updates selected columns only and not the whole row.
  - Example: Use PATCH method to update the order_status column.
  - In Ruby on Rails it corresponds naturally to the way we use `update_attributes` for updating records.

- https://stackoverflow.com/a/55790266
- https://weblog.rubyonrails.org/2012/2/26/edge-rails-patch-is-the-new-primary-http-method-for-updates/

- **primary method for updates in Rails**

  - `PATCH` is the the primary method for updates in Rails since v4.0.
  - Because, let’s think about ordinary edit forms in typical Ruby on Rails applications. How many times are we sending a complete representation for replacement? Not always, perhaps we could say that it is even rare in practice that you do so. For example, the conventional `created_at` and `updated_at` timestamps normally can’t be set by end-users, though they are often considered to belong to the representation of resources that map to records.
  - https://weblog.rubyonrails.org/2012/2/26/edge-rails-patch-is-the-new-primary-http-method-for-updates/
