### www.theodinproject.com

### Installing Ruby

To install Ruby use a tool called `rbenv`, which makes it easy to install and manage Ruby versions.

    brew install rbenv ruby-build

- To see all the installed Ruby versions run

        rbenv versions

- Set to a specific ruby version

        rbenv global 2.4.2

### Install Rails

    rbenv local 2.4.2
    gem install rails -v x.x.x

### After that run

    rbenv rehash

### Create a new rails project

    rails new app-name --webpack=react --database=postgresql

### Create a new database

    rails db:create

### Create a model

    rails g model Model-name column_name:type table-name:belongs_to

- Models in Rails use a singular name, and their corresponding database tables use a plural name.

### Serialization

    gem 'fast_jsonapi'

### httparty

- HTTParty makes it extremely easy to ingest Restful services, converting them to Ruby Hashes
- Supports JSON and XML formats

### Better Error Handling and Debugging

Install these 2 gems in the `development` group

- `better_errors` shows a more useful error page.
- `binding_of_caller` allows us to inspect the variables.

### Monitor File changes

https://medium.com/@josemarmolejos/adding-livereload-to-your-rails-development-workflow-a43f62771df2
Install these 3 gems in the `development` group

- `guard`
- `guard-livereload`

  - Don't forget to add `require: false`

        gem 'guard-livereload', '~> 2.5', require: false

  - Add guard definition to the `Guardfile` by running this command:

        guard init livereload

- `rack-livereload`

  - Then add the middleware to your Rails middleware stack by editing your `config/environments/development.rb`

        config.middleware.insert_after ActionDispatch::Static, Rack::LiveReload

  - Run `bundle exec guard` in a dedicated tab in the console in order to run `livereload` monitor.

## Test Driven Development

### RSpec

### Installation

- Add RSpec to the `Gemfile`

      rspec-rails

- Generate the Rspec files

      rails genarate rspec:install

  - `spec_helper.rb` is for specs which don't depend on Rails (such as specs for classes in the lib directory).
  - `rails_helper.rb` is for specs which do depend on Rails.

- To use the documentation format in the `.rspec` file add

      --format doc

  - It outputs all the info from the `describe` and the examples.

### Testing Models

- Prepare test database

      rake db:test:prepare

- Create a `models` directory inside `spec` directory.

### Important Rspec Commands

- Only run the failing tests

      bundle exec rspec --only-failures

- `spec/examples.txt` file contains a short summary of all our specs

  - We should add this file to `.gitignore`

    .sqlite3
    spec/examples.txt

- Output the slowest tests

      bundle exec rspec --profile

- Prepare test database

      rake db:test:prepare

- Use `shoulda-matchers` gem for simplifying tests

### capybara

- Acceptance testing
