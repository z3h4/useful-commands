# The Purpose of the Rails Router

- The Rails router recognizes URLs and dispatches them to a controller's action, or to a Rack application.
- It can also generate paths and URLs, avoiding the need to hardcode strings in your views.

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

- https://guides.rubyonrails.org/routing.html#crud-verbs-and-actions

- Rails routes are matched in the order they are specified, so if you have a resources `:photos` above a get `'photos/poll'` the show action's route for the resources line will be matched before the get line. To fix this, move the get line above the resources line so that it is matched first.

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

### `_path` vs `_url`

- `_path` returns the url relative to your domain.
- `_url` returns an absolute path, including protocol and server name.
- For instance, `root_path` returns `/` while `root_url` returns http://mydomain.com/.
- You should always use `_url` for redirects and `_path` for hyperlinks unless you have a good reason not to do so.

### `resource` vs `resources`

- `resources` generates one extra route for the `index` action.
- Singular routes don’t have ID of resource being worked on.
- Both singular and plural resource routes route request to pluralized controller.
