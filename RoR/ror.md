### www.theodinproject.com


<!------------------------------- Installing Ruby and Rails ------------------------------>

## Installing Ruby

To install Ruby use a tool called `rbenv`, which makes it easy to install and manage Ruby versions.

    brew install rbenv ruby-build

- To see all the installed Ruby versions run

        rbenv versions

- Set to a specific ruby version

        rbenv global 2.4.2

### Install Rails

    rbenv install 2.4.2
    gem install rails -v x.x.x

### After that run

    rbenv rehash
<!------------------------------- Installing Ruby and Rails ------------------------------>


## `rbenv` Cheetsheet
    https://devhints.io/rbenv


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

- https://rspec.info/documentation/4.0/rspec-rails/

- Add RSpec to the `Gemfile` and run `bundle install`

- Generate boilerplate configuration files

      rails genarate rspec:install

  - `spec_helper.rb` is for specs which don't depend on Rails (such as specs for classes in the lib directory).
  - `rails_helper.rb` is for specs which do depend on Rails.

- To use the documentation format in the `.rspec` file add

      --format doc

  Or use `bundle exec rspec --format doc file_name.rb` command

  - It outputs all the info from the `describe` and the examples.

- To use default/progress format use

        --format progress

### Testing Models

- Prepare test database

      rake db:test:prepare

- Create a `models` directory inside `spec` directory.

### Testing APIs

- We create these tests in the `spec/requests` directory.

### Important Rspec Commands

- Only run the failing tests

      bundle exec rspec --only-failures

- Only run the next failing test (one failing test at a time)

      bundle exec rspec --next-failure

- `spec/examples.txt` file contains a short summary of all our specs

  - We should add this file to `.gitignore`

        *.sqlite3
        spec/examples.txt

- Output the slowest tests

      bundle exec rspec --profile

- If you find an order dependency and want to debug it, you can fix the order by providing the seed, which is printed after each run.

      bundle exec rspec --seed 22362 --format doc

- Prepare test database

      rake db:test:prepare

- Use `shoulda-matchers` gem for simplifying tests

### RSpec Matchers

- https://relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
- https://relishapp.com/rspec/rspec-rails/v/4-0/docs/matchers

### RSpec `eq` vs `eql` in `expect` tests

    a.equal?(b) # object identity - a and b refer to the same object
    a.eql?(b) # object equivalence - a and b have the same value
    a == b # object equivalence - a and b have the same value with type conversions

- `eq` uses the `==` operator for comparison, and `eql` ignores type conversions.

### capybara

- Acceptance testing

- Steps to use `capybara`

  1.  Update `rails_helper` with

          require 'capybara/rspec'

      This will allow `capybara` DSL to be used with RSpec tests.

  2.  Create a `features` directory inside `spec` directory for the feature tests.
      - Feature tests are high-level acceptance tests that verify the application works in a certain way or certain content is available.
      - Capybara lets us make assertions based on that.

- Methods
  -     visit('url')
  -     click_link('About')
  -     expect(page).to have_content('Game Tracker')
  -     expect(current_path).to eql('/about')
