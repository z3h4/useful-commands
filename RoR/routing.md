- Consider a listing of clients where the list can show either active or inactive clients. We can add a route which captures the `:status` parameter in a "pretty" URL:

      get '/clients/:status', to: 'clients#index', foo: 'bar'

- When a user opens the URL `/clients/active`
  - `params[:status]` will be set to "active"
  - `params[:foo]` will be set to "bar", as if it were passed in the query string
  - Your controller will also receive `params[:action]` as "index" and `params[:controller]` as "clients".
