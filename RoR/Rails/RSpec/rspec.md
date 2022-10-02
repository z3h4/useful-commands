# What is RSpec?

- https://semaphoreci.com/community/tutorials/getting-started-with-rspec
- RSpec is a testing tool for Ruby, created for behavior-driven development (BDD).
- It is the most frequently used testing library for Ruby in production applications.

# RSpec Installation

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

# TDD

- The first step of TDD is - we have a failing test and we want to make it pass.
- https://semaphoreci.com/community/tutorials/getting-started-with-rspec
- https://semaphoreci.com/community/tutorials/behavior-driven-development

# BDD

- https://semaphoreci.com/community/tutorials/getting-started-with-rspec
- https://semaphoreci.com/community/tutorials/behavior-driven-development
- Behavior-driven development is an idea built on top of TDD.
- The idea is to write tests as specifications of system behavior.
- It is about a different way of approaching the same challenge, which leads us to think more clearly and write tests that are easier to understand and maintain.
- This in turn helps us write better implementation code.

# Example Groups

- RSpec is a DSL for creating executable examples of how code is expected to behave, organized in groups.
- It uses the words `describe` and `it` so we can express concepts like a conversation.
- Under the hood, an example group is a class in which the block passed to `describe` or `context` is evaluated.
  - The blocks passed to `it` are evaluated in the context of an instance of that class.

## Example Group vs Example

- RSpec has two scopes:
  1. **Example Group**: Example groups are defined by a `describe` or `context` block, which is eagerly evaluated when the spec file is loaded.
  2. **Example**: Examples - typically defined by an `it` block -- and any other blocks with per-example semantics -- such as a `before(:example)` hook -- are evaluated in the context of an instance of the example group class to which the example belongs.

## `describe`

- The `describe` method creates an example group.
- Within the block passed to `describe` you can declare nested groups using the `describe` or `context` methods, or you can declare examples using the `it` or `specify` methods.

## `describe` vs `context`

- According to the rspec source code, `context` is just a alias method of `describe`.
  - There is no functional difference between these two methods.
  - However, there is a contextual difference that’ll help to make your tests more understandable (redable) by using both of them.
- The purpose of `describe` is to wrap a set of tests against one functionality.
- The purpose of `context` is to wrap a set of tests against one functionality under the same state.
- **Use `context` when you want to separate specs based on conditions. Use `describe` to separate methods being tested or behavior being tested.**
- In the latest RSpec is that `context` can no longer be used as a top-level method.

## `shared_examples`

- https://railsware.com/blog/using-configurable-shared-examples-in-rspec/
- https://relishapp.com/rspec/rspec-core/v/3-8/docs/example-groups/shared-examples
- Shared examples are created and configured at the “compile time”, while let-bindings can be used only at “run time”.

## `shared_examples` vs `shared_contexts`

- `shared_examples` are tests written in a way that you can run them in multiple settings; extracting common behavior between objects.

      it_behaves_like "a correct object remover" do
          ...
      end

- `shared_contexts` is any setup code that you can use to prepare a test case . This allows you to include test helper methods or prepare for the tests to run.

      include_context "has many users to begin with"

- https://stackoverflow.com/a/21121961

## `subject`

- RSpec's `subject` is a special variable that refers to the object being tested.
- You can give the `subject` a name when you define it:

      subject(:a) { A.new }

- The `subject` is instantiated lazily. That is, the implicit instantiation of the described class or the execution of the block passed to `subject` doesn't happen until `subject` or the named `subject` is referred to in an example. If you want your explict `subject` to be instantiated eagerly (before an example in its group runs), say `subject!` instead of `subject`.
- Expectations can be set on it implicitly (without writing `subject` or the name of a named `subject`):

      describe A do
        it { is_expected.to be_an(A) }
      end

## `let`

- `let` is a way for you to create instance variables in your test that are available between tests.
- It is lazy, meaning it's not actually assigned until it's called in a test.
- Use `let` to reduce duplication among examples.
- https://stackoverflow.com/a/38459039
- https://github.com/rubocop/rspec-style-guide/issues/6

# Testing boolean methods

- Test true:

      expect(order).to be_nil

- Test false

      expect(order).to_not be_nil

# Request Specs

- Create the files in `spec/requests` directory.

# Testing Collections

      example 'Collections' do
        expect([1, 2, 3]).to include(1, 3)
        expect([1, 2, 3]).to contain_exactly(3, 2, 1) # order not important
        expect({ a: 1, b: 2 }).to include(b: 2)
      end

- Use `contain_exactly` to check if the array contains all the values. The orders are not important.
- Use `include` to check if the array contains some of the values.

# VCR

- VCR is a gem that you can use to intercept network requests in your specs/tests and records them as yml file and replays them back when you run your tests.
- So, everytime you run your test suite it does not make actual network requests to a live API because that API could have rate limiting. Also, making actual network requests make your test slow considerably.

## Installation

- https://relishapp.com/vcr/vcr/v/6-0-0/docs/getting-started
- https://relishapp.com/vcr/vcr/v/6-0-0/docs/test-frameworks/usage-with-rspec-metadata
