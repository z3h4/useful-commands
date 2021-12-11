# What is Rspec?

- https://semaphoreci.com/community/tutorials/getting-started-with-rspec
- RSpec is a testing tool for Ruby, created for behavior-driven development (BDD).
- It is the most frequently used testing library for Ruby in production applications.

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
