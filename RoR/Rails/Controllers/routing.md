# The Purpose of the Rails Router

- Recognize URLs and dispatche them to a controller's action, or to a Rack application.
- Generate paths and URLs, so that you don't have to hardcode strings in your views.

### Routing example

- Consider a listing of clients where the list can show either active or inactive clients. We can add a route which captures the `:status` parameter in a "pretty" URL:

  ```Ruby
  get '/clients/:status', to: 'clients#index', foo: 'bar'
  ```

- When a user opens the URL `/clients/active`

  - `params[:status]` will be set to "active"
  - `params[:foo]` will be set to "bar", as if it were passed in the query string
  - Your controller will also receive `params[:action]` as "index" and `params[:controller]` as "clients".

# Resource Routing: the Rails Default

- It allows us to declare all of the common routes for a given resourceful controller.
- A single entry in the routing file, such as:

  ```Ruby
  resources :photos
  ```

  creates seven different routes in your application, all mapping to the Photos controller.

- [CRUD, Verbs, and Actions](https://guides.rubyonrails.org/routing.html#crud-verbs-and-actions)

## Path and URL Helpers

If we create a resourceful route i.e. `resources :photos`, we can use a number of path and URL helpers

- `photos_path` returns `/photos`
- `new_photo_path` returns `/photos/new`
- `edit_photo_path(:id)` returns `/photos/:id/edit`
- `photo_path(:id)` returns `/photos/:id`

Each of these helpers has a corresponding `_url` helper (such as `photos_url`) which returns the same path prefixed with the current host, port, and path prefix.

## Defining Multiple Resources at the Same Time

```Ruby
resources :photos, :books, :videos
```

## Singular Resources

- Sometimes, you have a resource that clients always look up without referencing an ID. For example, you would like `/profile` to always show the profile of the currently logged in user. In this case, you can use a singular resource to map `/profile` (rather than `/profile/:id`) to the show action:

  ```Ruby
  get 'profile', to: 'users#show'
  ```

- We can also use the following, which is the same

  ```Ruby
  get 'profile', action: :show, controller: 'users'
  ```

- This resourceful route:

  ```Ruby
  resource :geocoder
  ```

  creates six different routes in your application without the `index` action.

- Because you might want to use the same controller for a singular route (`/account`) and a plural route (`/accounts/45`), singular resources map to plural controllers. So that, for example, **`resource :photo`** and **`resources :photos`** creates both singular and plural routes that map to the same controller (`PhotosController`).

## Controller Namespaces and Routing

### `namespace`

- You may wish to organize groups of controllers under a namespace.
- For example, you might group a number of administrative controllers under an `Admin::` namespace, and place these controllers under the `app/controllers/admin` directory.
- You can route to such a group by using a `namespace` block:

  ```Ruby
  namespace :admin do
    resources :articles, :comments
  end
  ```

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

### Routing Concerns

- Using routing concerns we can declare common routes and use them inside other resources and routes.
- These concerns can be used in resources to **avoid code duplication** and **share behavior across routes**:
- [RoR Guide](https://guides.rubyonrails.org/routing.html#routing-concerns)
- [GitHub Example](https://github.com/rails/routing_concerns)
- [DRY Rails Routes](https://tadhao.medium.com/dry-rails-routes-1b4225864598)

### Adding More RESTful Actions

- **Adding Member Routes**

  - To add a member route, just add a `member` block into the resource block:

    ```Ruby
    resources :photos do
      member do
        get 'preview'
      end
    end
    ```

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

### Defining Defaults

- The `defaults` option allows you to **set default parameters for a route**.
- The `:defaults` option takes a hash.

      get 'photos/:id', to: 'photos#show', defaults: { format: 'jpg' }

- Rails would match `photos/12` to the `show` action of `PhotosController`, and set `params[:format]` to "jpg".
- You can also use a `defaults` block to define the defaults for multiple items:

      defaults format: :json do
        resources :photos
      end

### Naming Routes

- You can specify a name for any route using the `:as` option:

      get 'exit', to: 'sessions#destroy', as: :logout

- This will create `logout_path` and `logout_url` as named route helpers in your application. Calling `logout_path` will return `/exit`.

### HTTP Verb Constraints

- You can use the `match` method with the `:via` option to match multiple verbs at once:

  ```Ruby
  match 'photos', to: 'photos#show', via: [:get, :post]
  ```

- You can match all verbs to a particular route using `via: :all`:

  ```Ruby
  match 'photos', to: 'photos#show', via: :all
  ```

- Routing both `GET` and `POST` requests to a single action has security implications. In general, you should avoid routing all verbs to an action unless you have a good reason to.
- **`GET` in Rails won't check for CSRF token. You should never write to the database from GET requests.**

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

```

```
