### www.theodinproject.com

### Installing Ruby

To install Ruby use a tool called `rbenv`, which makes it easy to install and manage Ruby versions.

    brew install rbenv ruby-build

- To see all the installed Ruby versions run

        rbenv versions

- Set to a specific ruby version

        rbenv global 2.4.2

### Install Rails

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

### capybara

- Acceptance testing
