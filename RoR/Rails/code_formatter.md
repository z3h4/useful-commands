# Rubocop

## Steps to add in Rubocop in a Project

1. Add Gems to Gemfile

   ```Ruby
   group :development, :test do
     gem 'rubocop', require: false
     gem 'rubocop-performance', require: false
     gem 'rubocop-rails', require: false
   end
   ```

2. Add Configuration Files

   ```CMD
   cd /path/to/our/project
   $ touch .rubocop.yml
   $ touch .rubocop-performance.yml
   $ touch .rubocop-rails.yml
   ```

3. Add Rules to Configuration files

   - For .rubocop-rails.yml

   ```Ruby
   inherit_from:
     - http://shopify.github.io/ruby-style-guide/rubocop.yml

     AllCops:
       Exclude:
       - 'db/**/*'
       - 'node_modules/**/*'
       - 'public/**/*'
       - 'tmp/**/*'
       TargetRubyVersion: '2.5'

     Layout/LineLength:
       Max: 180

     Style/FrozenStringLiteralComment:
       EnforcedStyle: never

     Style/WordArray:
       MinSize: 2

     Style/MethodCallWithArgsParentheses:
       Enabled: false

     require: rubocop-rails
   ```

## Use Rubocop with RubyMine

- https://www.jetbrains.com/help/ruby/rubocop.html

## Documentation

- [Rubocop](https://docs.rubocop.org/rubocop/)
- [Shopify Ruby Style Guide](https://ruby-style-guide.shopify.dev/)

# Prettier

## Use Prettier with RubyMine

- https://www.jetbrains.com/help/ruby/prettier.html

# Emmet

## Use Emmet with RubyMine

- https://www.jetbrains.com/help/idea/using-zen-coding-support.html
