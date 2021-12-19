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

# Rails Command Line

- https://guides.rubyonrails.org/command_line.html
- All Rails console utilities have help text. As with most \*nix utilities, you can try adding `--help` or `-h` to the end, for example `bin/rails server --help`.

## Create a new rails project

    rails new app-name --webpack=react --database=postgresql

- If you wish to skip some files or components from being generated, you can append the corresponding arguments to your `rails new` command:

      rails new app-name --skip-turbolinks --skip-test

## Run the server

- The `bin/rails server` command launches a web server named Puma which comes bundled with Rails.
- You can also use the alias "s" to start the server: `bin/rails s`.
- The server can be run on a different port using the `-p` option. The default development environment can be changed using `-e`.

      bin/rails server -e production -p 4000

- The `-b` option binds Rails to the specified IP, by default it is `localhost`. You can run a server as a daemon by passing a `-d` option.

## Rails Genarator

- The `bin/rails generate` command uses templates to create a whole lot of things.
- Running `bin/rails generate` by itself gives a list of available generators.
- You can also use the alias "g" to invoke the generator command: `bin/rails g`.
- Using generators will save you a large amount of time by writing boilerplate code.

### Genarating a Controller

- The controller generator is expecting parameters in the form of `bin/rails generate controller ControllerName action1 action2`.
- This will generate-
  - a controller file
  - a view file
  - a functional test file
  - a helper for the view
  - a JavaScript file
  - and a stylesheet file.

### Genarating a Model

    bin/rails generate model model_name [field[:type][:index] field[:type][:index]] [options]

        rails g model Model-name column_name:type table-name:belongs_to

- Models in Rails use a singular name, and their corresponding database tables use a plural name.

### Genarating a Scaffold

- A scaffold generates a controller, views, model, database migration for that model, a test suite for each of the above and takes care of the route for the resource.
- We will set up a simple resource called "HighScore" that will keep track of our highest score on video games we play.

      bin/rails generate scaffold HighScore game:string score:integer

## Rails Migration

- Rails `migrate` command run some Ruby code to modify the schema of our database.

      bin/rails db:migrate

## Rails Console

- The `console` command lets you interact with your Rails application from the command line.
- On the underside, `bin/rails console` uses IRB.
- You can also use the alias "c" to invoke the console: `bin/rails c`.
- You can specify the environment in which the `console` command should operate.

      bin/rails console -e staging

- If you wish to test out some code without changing any data, you can do that by invoking `bin/rails console --sandbox`.
  - Any modifications you make will be rolled back on exit.
  - Sandbox mode doesn't just rollback, it creates an enclosing transaction for all of the commands you do while in that instance of the console. If you change database rows in that transaction, updates to the tables and rows affected can block for other users. This can cause lockups for other users if used in production.
  - Any rails console actions on production should be done carefully, and should (IMHO) never use `--sandbox`. Sandbox mode is really useful for development and other non-critical systems.

### [The `app` and `helper` objects](https://guides.rubyonrails.org/command_line.html#the-app-and-helper-objects)

- Inside the `bin/rails console` you have access to the `app` and `helper` instances.
- With the `app` method you can access named route helpers, as well as do requests.
  - The `app` method reference the global “app” instance.
- With the `helper` method it is possible to access Rails and your application's helpers.

## Database Console

- Use `bin/rails dbconsole` command.
- You can also use the alias "db" to invoke the dbconsole: `bin/rails db`.
- If you are using multiple databases, you can specify which database to connect to using `--database` or `--db`.

      bin/rails dbconsole --database=animals

## `rails runner`

- `runner` runs Ruby code in the context of Rails non-interactively.
- Use it like the `ruby` command to execute Ruby code in the context of your Rails environment. For instance:

      bin/rails runner "Model.long_running_method"

- You can also use the alias "r" to invoke the runner: `bin/rails r`.
- You can specify the environment in which the runner command should operate using the `-e` switch.

      bin/rails runner -e staging "Model.long_running_method"

- You can even execute ruby code written in a file with runner.

      bin/rails runner lib/code_to_be_run.rb

- It also runs Ruby code right in the terminal

      rails r "puts Developer.count"

## `rails destroy`

- `destroy` is the opposite of `generate`. It'll figure out what `generate` did, and undo it.
- You can also use the alias "d" to invoke the destroy command: `bin/rails d`.
-     rails d controller lalala
      rails d model yadayada
      rails d scaffold hohoho
      rails g model welcome message:string

- If you add `-p` flag to the command it will simply do a "test" run and show you what files will be deleted without actually deleting them.

      rails d controller welcome -p

  - If you're happy with it, run the command again without the `-p` flag.

## `rails about`

- `bin/rails about` gives information about version numbers for Ruby, RubyGems, Rails, the Rails subcomponents, your application's folder, the current Rails environment name, your app's database adapter, and schema version.
- It is useful when you need to ask for help, check if a security patch might affect you, or when you need some stats for an existing Rails installation.

## `rails assets:`

- You can precompile the assets in `app/assets` using `bin/rails assets:precompile`, and remove older compiled assets using `bin/rails assets:clean`.
- The `assets:clean` command allows for rolling deploys that may still be linking to an old asset while the new assets are being built.
- If you want to clear `public/assets` completely, you can use `bin/rails assets:clobber`.

## `rails db:`

- The most common commands of the `db:` rails namespace are `migrate` and `create`, and it will pay off to try out all of the migration rails commands (`up`, `down`, `redo`, `reset`).
- `bin/rails db:version` is useful when troubleshooting, telling you the current version of the database.

## `rails notes`

- `bin/rails notes` searches through your code for comments beginning with a specific keyword.
- By default, it will search in `app`, `config`, `db`, `lib`, and `test` directories for `FIXME`, `OPTIMIZE`, and `TODO` annotations in files with extension `.builder`, `.rb`, `.rake`, `.yml`, `.yaml`, `.ruby`, `.css`, `.js`, and `.erb`.

### Annotations

- You can pass specific annotations by using the `--annotations` argument. By default, it will search for `FIXME`, `OPTIMIZE`, and `TODO`. Note that annotations are case sensitive.

      bin/rails notes --annotations FIXME RELEASE

### Tags

- You can add more default tags to search for by using `config.annotations.register_tags`. It receives a list of tags.

      config.annotations.register_tags("DEPRECATEME", "TESTME")

### Directories

- You can add more default directories to search from by using `config.annotations.register_directories`. It receives a list of directory names.

      config.annotations.register_directories("spec", "vendor")

### Extensions

- You can add more default file extensions to search from by using `config.annotations.register_extensions`. It receives a list of extensions with its corresponding regex to match it up.

      config.annotations.register_extensions("scss", "sass") { |annotation| /\/\/\s*(#{annotation}):?\s*(.*)$/ }

### Create a new database

    rails db:create

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

# Rack

- https://www.rubyguides.com/2018/09/rack-middleware/
- Rack is an interface between web server and web framework.
  - It’s the glue that allows them to communicate.
- Why do we use Rack?
  - We use Rack because that allows different frameworks & servers to be interchangeable.
    - They become components that you can plug-in.
    - This means you can use Puma with Rails, Sinatra & any other Rack-compatible framework. It doesn’t matter what framework or server you are using if they implement the Rack interface.

## What is Rack Middleware?

- Rack sits in the middle of every web request & response.
- As a result, it can act as a guardian, by denying access to unwanted requests, or it can act as a historian, by keeping track of slow responses.
