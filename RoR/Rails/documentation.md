# Ruby

## Ruby language Tutorial

- [The Odin Project](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/ruby)
- [LaunchSchool](https://launchschool.com/books/ruby/read/basics)

## Class

- [How to Use `attr_accessor`, `attr_writer` & `attr_reader`](https://www.rubyguides.com/2018/11/attr_accessor/)
- [How to Use Mixins and Modules in Your Ruby on Rails Application](https://blog.appsignal.com/2021/01/13/using-mixins-and-modules-in-your-ruby-on-rails-application.html)
- [Unraveling Classes, Instances and Metaclasses in Ruby](https://blog.appsignal.com/2019/02/05/ruby-magic-classes-instances-and-metaclasses.html)
- [Syntactic sugar methods in Ruby](https://blog.appsignal.com/2018/02/20/ruby-magic-syntactic-sugar-methods.html)
- [The Magic of Class-level Instance Variables](https://blog.appsignal.com/2018/10/02/ruby-magic-class-level-instance-variables.html)

## OOP

- [Building Reusable Object-Oriented Systems: Inheritance](https://thoughtbot.com/blog/reusable-oo-inheritance)
- [Building Reusable Object-Oriented Systems: Modules](https://thoughtbot.com/blog/reusable-oo-modules)
- [Building Reusable Object-Oriented Systems: Composition](https://thoughtbot.com/blog/reusable-oo-composition)
- [Composition vs Inheritance](https://thoughtbot.com/blog/reusable-oo-composition-vs-inheritance)
- [Understanding Inheritance and Composition in Ruby](https://engineering.entelo.com/understanding-inheritance-and-composition-in-ruby-edc46c0f96c7)
- [Inheritance vs. Composition](https://github.com/pruett/ruby-patterns/blob/master/concepts/inheritance-vs-composition.md)
- [Refactoring From Inheritance To Composition To Data](https://www.rubypigeon.com/posts/refactoring-inheritance-composition-data/)

## Misc

- [Ruby Literals](https://docs.ruby-lang.org/en/2.0.0/syntax/literals_rdoc.html)
- [Regexp](https://docs.ruby-lang.org/en/2.0.0/Regexp.html)
- [A Deep Dive into Memory Leaks in Ruby](https://blog.appsignal.com/2022/08/10/a-deep-dive-into-memory-leaks-in-ruby)
- [Closures in Ruby: Blocks, Procs and Lambdas](https://blog.appsignal.com/2018/09/04/ruby-magic-closures-in-ruby-blocks-procs-and-lambdas.html)

---

# Rails

# Controller

- [Ordering of Filters in Rails Controllers](https://reganchan.ca/blog/ordering-of-filters-in-rails-controllers/)

## Misc

- [Client-side caching in Rails: conditional GET requests](https://blog.appsignal.com/2018/05/01/client-side-caching-in-rails-conditional-get-requests.html)

# Model

## Class and OOP

- [Rails Concerns: To Concern Or Not To Concern](https://blog.appsignal.com/2020/09/16/rails-concers-to-concern-or-not-to-concern.html)
- [An Introduction to Polymorphism in Ruby on Rails](https://blog.appsignal.com/2022/05/25/an-introduction-to-polymorphism-in-ruby-on-rails.html)

## Association

### Loading Association Data

- [Preload, Eagerload, Includes and Joins](https://www.bigbinary.com/blog/preload-vs-eager-load-vs-joins-vs-includes)
- [Making sense of ActiveRecord joins, includes, preload, and eager_load](https://scoutapm.com/blog/activerecord-includes-vs-joins-vs-preload-vs-eager_load-when-and-where)
- [Eager Loading Associations](https://guides.rubyonrails.org/active_record_querying.html#eager-loading-associations)
- [Joins vs Preload vs Includes vs Eager load in Rails](https://tadhao.medium.com/joins-vs-preload-vs-includes-vs-eager-load-in-rails-5f721c44b3a9)
- [Improving Database performance and overcoming common N+1 issues in Active Record using includes, preload, eager_load, pluck, select, exists?](https://blog.saeloun.com/2020/01/08/activerecord-database-performance-n-1-includes-preload-eager-load-pluck.html)

### N + 1 Query

- [ActiveRecord performance: the N+1 queries antipattern](https://blog.appsignal.com/2018/04/24/active-record-performance-the-n-1-queries-antipattern.html)
- [Faster Rails: Eliminating N+1 queries](https://semaphoreci.com/blog/2017/08/09/faster-rails-eliminating-n-plus-one-queries.html)
- [**4 Non-standard Ways to Fix N+1 SQL Queries in Rails**](https://pawelurbanek.com/rails-n-1-queries)
- [Ruby's Hidden Gems: Bullet](https://blog.appsignal.com/2021/08/11/ruby-hidden-gems-bullet-and-how-it-integrates-with-appsignal.html)

### Database Constraints

- [How and when to add foreign key constraints](https://dev.to/kevincolemaninc/how-and-when-to-add-foreign-key-constraints-1aji)
- [Add a foreign key constraint to an existing column](https://docs.gitlab.com/ee/development/database/add_foreign_key_to_existing_column.html)
- [The Perils of Uniqueness Validations](https://thoughtbot.com/blog/the-perils-of-uniqueness-validations)
- [Validation, Database Constraint, or Both?](https://thoughtbot.com/blog/validation-database-constraint-or-both)
- [A Deep Dive into Active Record Validations](https://www.honeybadger.io/blog/active-record-validations/)

### Polymorphic Association

- [Polymorphic Association](https://guides.rubyonrails.org/association_basics.html#polymorphic-associations)
- [Rails Techniques: Using Polymorphic Associations](https://semaphoreci.com/blog/2017/08/16/polymorphic-associations-in-rails.html)
- [Polymorphic Associations in Rails](https://betterprogramming.pub/polymorphic-associations-in-rails-72a91ae1a9dd)
- [Comments With Polymorphic Associations](https://gorails.com/episodes/comments-with-polymorphic-associations?autoplay=1)

### Single-Table Inheritance (STI)

- [Single Table Inheritance (STI)](https://guides.rubyonrails.org/association_basics.html#single-table-inheritance-sti)
- [Single table inheritance](https://api.rubyonrails.org/classes/ActiveRecord/Inheritance.html)
- [When To Use Single Table Inheritance vs Multiple Table Inheritance](https://user3141592.medium.com/when-to-use-single-table-inheritance-vs-multiple-table-inheritance-db7e9733ae2e)
- [Single-Table Inheritance vs. Polymorphism in Rails](https://www.netguru.com/blog/single-table-inheritance-rails)
- [Single-table inheritance vs. polymorphic associations in Rails: find what works for you](https://www.freecodecamp.org/news/single-table-inheritance-vs-polymorphic-associations-in-rails-af3a07a204f2/)

## Locking

- [Locking Records for Update](https://guides.rubyonrails.org/active_record_querying.html#locking-records-for-update)

### Optimistic Locking

- [What is Optimistic Locking](https://api.rubyonrails.org/v7.0.4/classes/ActiveRecord/Locking/Optimistic.html)
- [**Preventing Conflicts with Optimistic Lockin**g](https://gorails.com/episodes/optimistic-locking-with-rails)
- [**Optimistic Locking in Rails REST APIs**](https://blog.appsignal.com/2021/10/20/optimistic-locking-in-rails-rest-apis.html)

### Pessimistic Locking

- [ActiveRecord::Locking::Pessimistic](https://api.rubyonrails.org/v7.0.4/classes/ActiveRecord/Locking/Pessimistic.html)
- [Rails: Pessimistic Locking](https://dev.to/nodefiend/rails-pessimistic-locking-45ak)
- [Handle Race Conditions with Pessimistic Locking](https://gorails.com/episodes/handle-race-conditions-with-pessimistic-locking)
- [**Pessimistic Locking in Rails by Example**](https://www.peterdebelak.com/blog/pessimistic-locking-in-rails-by-example/)

### Optimistic vs. Pessimistic Locking

- [Rails 7 adds optional transaction arguments to with_lock](https://blog.saeloun.com/2022/03/23/rails-7-adds-lock_with.html)
- [**Optimistic vs. Pessimistic locking - When to use**](https://stackoverflow.com/questions/129329/optimistic-vs-pessimistic-locking)

## ActiveRecord::Enum

- [Enums](https://guides.rubyonrails.org/active_record_querying.html#enums)
- [How to Use Enums in Rails](https://blog.saeloun.com/2022/01/05/how-to-use-enums-in-rails.html)
- [ActiveRecord::Enum](https://edgeapi.rubyonrails.org/classes/ActiveRecord/Enum.html)
- [Rails 7 introduces new syntax for enum](https://blog.saeloun.com/2021/02/26/rails-introduces-new-syntax-for-enum)
- [Ruby on Rails - How to Create Perfect Enum in 5 Steps](https://naturaily.com/blog/ruby-on-rails-enum)
- [Enum dropdown with readable values in rails](https://dev.to/masroorhussainv/enum-dropdown-with-capitalized-values-in-rails-144j)

## Migration

- [Dissecting Rails Migrations](https://blog.appsignal.com/2020/04/14/dissecting-rails-migrationsl.html)

## Database Querying

- [Querying with Aggregations](https://thoughtbot.com/upcase/videos/advanced-querying-aggregations)

## Database Indexing

- [Effective Queries with Rails and PostgreSQL](https://www.honeybadger.io/blog/rails-postgresql-queries/)

## Rails Scopes

- [Should You Use Scopes or Class Methods?](https://www.justinweiss.com/articles/should-you-use-scopes-or-class-methods/)
- [**How to Preload Rails Scopes**](https://www.justinweiss.com/articles/how-to-preload-rails-scopes/)

## Rails Transactions

- [5 Tips to Design Ruby on Rails Transactions the Right Way](https://blog.appsignal.com/2022/03/30/5-tips-to-design-ruby-on-rails-transactions-the-right-way.html)
- [ActiveRecord Transactions in depth](https://www.bigbinary.com/books/learn-rubyonrails-book/activerecord-transactions-in-depth)
- [Understanding Database Transactions in Rails](https://www.honeybadger.io/blog/database-transactions-rails-activerecord/)

## Performance

- [**Differences Between #nil?, #empty?, #blank?, and #present?**](https://blog.appsignal.com/2018/09/11/differences-between-nil-empty-blank-and-present.html)
- [**Faster Rails: How to Check if a Record Exists**](https://semaphoreci.com/blog/2017/03/14/faster-rails-how-to-check-if-a-record-exists.html)
- [ActiveRecord `exists?` and `blank?` under the hood](https://marouenbousnina.com/tutorials/2018-08-26-activerecord-exists-and-blank-under-the-hood/)
- [How to Improve ActiveRecord Query Performance with Subquery Caching](https://pawelurbanek.com/rails-query-caching)
- [Caching counters with ActiveRecord's counter caches](https://blog.appsignal.com/2018/06/19/activerecords-counter-cache.html)
- [Track Down and Fix Slow ActiveRecord SQL Query Performance in Rails](https://pawelurbanek.com/slow-rails-queries)

## Best Practices

### Null Object Pattern

- [The Null Object pattern](https://mitrev.net/ruby/2015/06/07/the-null-object-pattern/)
- [Simplifying Ruby on Rails with the Null Object pattern](https://medium.com/@kelseydh/using-the-null-object-pattern-with-ruby-on-rails-b645ebf79785)
- [Null Object pattern in practice](https://blog.arkency.com/2015/08/null-pattern-in-practice-ruby/)
- [Rails Refactoring Example: Introduce Null Object](https://thoughtbot.com/blog/rails-refactoring-example-introduce-null-object)
- [Null Object in Factory Bot](https://thoughtbot.com/blog/design-patterns-in-the-wild-null-object)
- [Handling deletes with Null Object Pattern in Ruby](https://reinteractive.com/articles/Handling-deletes-with-Null-Object-Pattern-in-Ruby)

## Misc

- [Sharing Query Logic Within ActiveRecord Models](https://thoughtbot.com/blog/sharing-query-logic-within-activerecord-mdoels)
- [ActiveRecord Store](https://www.honeybadger.io/blog/rails-activerecord-store/)
- [State Machines in Ruby: An Introduction](https://blog.appsignal.com/2022/06/22/state-machines-in-ruby-an-introduction)

# View

- [**Rails is Fast: Optimize Your View Performance**](https://blog.appsignal.com/2020/01/22/rails-is-fast-optimize-your-view-performance.html)

# Design Patterns

- [Rails Patterns: Builders and Models](https://www.kcoleman.me/rails,/ruby/2015/06/03/rails-patterns-builders-and-models.html)
- [General Ruby on Rails Problems and Takeaways](https://blog.appsignal.com/2021/07/07/general-ruby-on-rails-problems-and-takeaways.html)
- [Facade Pattern in Rails for Performance and Maintainability](https://blog.appsignal.com/2020/03/18/facade-pattern-in-rails-for-performance-and-maintainability.html)
- [Configurable Ruby Modules: The Module Builder Pattern](https://blog.appsignal.com/2019/11/29/configurable-ruby-modules-the-module-builder-pattern.html)
- [Small Rails design patterns that make a big difference](https://www.paweldabrowski.com/articles/small-rails-design-patterns)
- [A Decorator vs. a Subclass](https://www.justinweiss.com/articles/a-decorator-vs-a-subclass/)

## Controller

- [Ruby on Rails Controller Patterns and Anti-patterns](https://blog.appsignal.com/2021/04/14/ruby-on-rails-controller-patterns-and-anti-patterns.html)
- [How to Reduce Controller Bloat with Interactors in Ruby](https://semaphoreci.com/community/tutorials/how-to-reduce-controller-bloat-with-interactors-in-ruby)

### Query Object

- [A Case for Query Objects in Rails](https://thoughtbot.com/blog/a-case-for-query-objects-in-rails)
- [Design Patterns with Ruby on Rails part 2: Query Object](https://dev.to/renatamarques97/design-patterns-with-ruby-on-rails-part-2-query-object-1h65)

### Service Object

- [Using Service Objects in Ruby on Rails](https://blog.appsignal.com/2020/06/17/using-service-objects-in-ruby-on-rails.html)
- [Rails Service Objects: A Comprehensive Guide](https://www.toptal.com/ruby-on-rails/rails-service-objects-tutorial)
- [Services - what are they and why we need them?](https://blog.arkency.com/2013/09/services-what-they-are-and-why-we-need-them/)
- [Service Objects: beyond fat models and skinny controllers](https://www.ombulabs.com/blog/rails/service-objects.html)

### Policy Object

- [Design Patterns with Ruby on Rails part 1: Introduction and Policy Object](https://dev.to/renatamarques97/design-patterns-with-ruby-on-rails-part-1-introduction-and-policy-object-1c37)
- [Complete Guide To Managing User Permissions In Rails Apps](https://www.honeybadger.io/blog/complete-guide-to-managing-user-permissions-in-rails-apps/)
- [Rails: Policy Objects Implementation](https://dev.to/kputra/rails-policy-objects-implementation-50ni)

# System Design

- [System Design Interview Format - 6 Steps to passing](https://www.kcoleman.me/2020/06/14/system-design-interview-format.html)
- [SSO / SAML to JWT: A system design problem](https://www.kcoleman.me/2020/05/02/sso-to-jwt.html)
- [Designing a distributed web crawler](https://www.kcoleman.me/2020/06/14/designing-a-distrubute-web-crawler.html)

# Performance

- [**How to Scale Ruby on Rails Applications**](https://blog.appsignal.com/2022/11/09/how-to-scale-ruby-on-rails-applications.html)
- [Faster Rails: Is Your Database Properly Indexed?](https://semaphoreci.com/blog/2017/05/09/faster-rails-is-your-database-properly-indexed.html)
- [Faster Rails: Indexing Large Database Tables Without Downtime](https://semaphoreci.com/blog/2017/06/21/faster-rails-indexing-large-database-tables.html)

# Exception Handling

- [Exceptions in Ruby](https://blog.appsignal.com/2018/03/13/exceptions-in-ruby.html)
- [Rescuing exceptions in Ruby](https://blog.appsignal.com/2018/04/10/rescuing-exceptions-in-ruby.html)
- [Ensuring execution, retrying failures and reraising exceptions in Ruby](https://blog.appsignal.com/2018/05/16/ensure-retry-and-reraise-exceptions-in-ruby.html)

# Testing

- [Performance, Stress, and Load Tests in Rails](https://blog.appsignal.com/2021/06/09/performance-stress-and-load-tests-in-rails.html)
- [How to Test Rails Models with RSpec](https://semaphoreci.com/community/tutorials/how-to-test-rails-models-with-rspec)
- [Rails Testing Antipatterns: Models](https://semaphoreci.com/blog/2014/01/21/rails-testing-antipatterns-models.html)
- [The Perils of Parallel Testing in Ruby on Rails](https://blog.appsignal.com/2022/03/16/the-perils-of-parallel-testing-in-ruby-on-rails.html)

# Misc

## Security

- [Rails security guide](https://guides.rubyonrails.org/security.html)
- [Security Best Practices for Your Rails Application](https://blog.appsignal.com/2022/10/05/security-best-practices-for-your-rails-application)
- [Extensive set of examples of what not to do when it comes to SQL injection](https://rails-sqli.org/)
- [OWASP Rails Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Ruby_on_Rails_Cheat_Sheet.html)

## Linting and Code Formatting

- [Linting Ruby Code](https://blog.appsignal.com/2021/04/28/ruby-linting.html)
- [Linting and Auto-formatting Ruby Code With RuboCop](https://www.honeybadger.io/blog/linting-formatting-ruby/)

## Database Management

- [Test and Optimize Your Ruby on Rails Database Performance](https://blog.appsignal.com/2022/01/26/test-and-optimize-your-ruby-on-rails-database-performance.html)
- [How to Keep Database Table Sizes Down and Prevent Data Bloat](https://blog.appsignal.com/2022/02/03/how-to-keep-database-table-sizes-down-and-prevent-data-bloat.html)

# Useful Gems

- Find `N+1` queries
  - [Bullet](https://github.com/flyerhzm/bullet)
- Find indexes that are missing
  - [lol_dba](https://github.com/plentz/lol_dba)
- Find missing foreign key constraints
  - [yeet_dba](https://github.com/kevincolemaninc/yeet_dba)
- Detect missing unique indexes
  - [consistency_fail](https://github.com/trptcolin/consistency_fail)
- [Improve Code in Your Ruby Application with RubyCritic](https://blog.appsignal.com/2022/10/19/improve-code-in-your-ruby-application-with-rubycritic.html)
- [Using Scientist to Refactor Critical Ruby on Rails Code](https://blog.appsignal.com/2022/05/18/using-scientist-to-refactor-critical-ruby-on-rails-code.html)

# Blogs

- [AppSignal](https://blog.appsignal.com/category/ruby.html)
- [Semaphore](https://semaphoreci.com/search?s=rails)
- [The Ruby and Rails community linklog](https://rubyflow.com/)
- [Honeybadger](https://www.honeybadger.io/blog/tags/ruby/)
- [Scout APM](https://scoutapm.com/blog/search/rails)
- [BigBinary](https://www.bigbinary.com/blog/categories)
- [Saeloun](https://blog.saeloun.com/)
- [OmbuLabs Blog](https://www.ombulabs.com/blog/authors/cleiviane)
- [Pawel Urbanek](https://pawelurbanek.com/blog)
- [Marouen Bousnina](https://marouenbousnina.com/)
