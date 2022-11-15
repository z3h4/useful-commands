# Ruby

## Class

- [How to Use `attr_accessor`, `attr_writer` & `attr_reader`](https://www.rubyguides.com/2018/11/attr_accessor/)
- [Unraveling Classes, Instances and Metaclasses in Ruby](https://blog.appsignal.com/2019/02/05/ruby-magic-classes-instances-and-metaclasses.html)
- [Syntactic sugar methods in Ruby](https://blog.appsignal.com/2018/02/20/ruby-magic-syntactic-sugar-methods.html)

## Misc

- [Ruby Literals](https://docs.ruby-lang.org/en/2.0.0/syntax/literals_rdoc.html)

---

# Rails

# Model

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
- [4 Non-standard Ways to Fix N+1 SQL Queries in Rails](https://pawelurbanek.com/rails-n-1-queries)

### Database Constraints

- [How and when to add foreign key constraints](https://dev.to/kevincolemaninc/how-and-when-to-add-foreign-key-constraints-1aji)
- [Add a foreign key constraint to an existing column](https://docs.gitlab.com/ee/development/database/add_foreign_key_to_existing_column.html)
- [The Perils of Uniqueness Validations](https://thoughtbot.com/blog/the-perils-of-uniqueness-validations)
- [Validation, Database Constraint, or Both?](https://thoughtbot.com/blog/validation-database-constraint-or-both)

### Polymorphic Association

- [Polymorphic Association](https://guides.rubyonrails.org/association_basics.html#polymorphic-associations)
- [Rails Techniques: Using Polymorphic Associations](https://semaphoreci.com/blog/2017/08/16/polymorphic-associations-in-rails.html)
- [Polymorphic Associations in Rails](https://betterprogramming.pub/polymorphic-associations-in-rails-72a91ae1a9dd)

### Single-Table Inheritance (STI)

- [Single table inheritance](https://api.rubyonrails.org/classes/ActiveRecord/Inheritance.html)
- [When To Use Single Table Inheritance vs Multiple Table Inheritance](https://user3141592.medium.com/when-to-use-single-table-inheritance-vs-multiple-table-inheritance-db7e9733ae2e)

## Rails Transactions

- [5 Tips to Design Ruby on Rails Transactions the Right Way](https://blog.appsignal.com/2022/03/30/5-tips-to-design-ruby-on-rails-transactions-the-right-way.html)

## Concurrency

### Optimistic Locking

- [What is Optimistic Locking](https://api.rubyonrails.org/v7.0.4/classes/ActiveRecord/Locking/Optimistic.html)
- [Preventing Conflicts with Optimistic Locking](https://gorails.com/episodes/optimistic-locking-with-rails) \*\*\*

### Pessimistic Locking

- [ActiveRecord::Locking::Pessimistic](https://api.rubyonrails.org/v7.0.4/classes/ActiveRecord/Locking/Pessimistic.html)
- [Rails: Pessimistic Locking](https://dev.to/nodefiend/rails-pessimistic-locking-45ak)
- [Handle Race Conditions with Pessimistic Locking](https://gorails.com/episodes/handle-race-conditions-with-pessimistic-locking)
- [Pessimistic Locking in Rails by Example](https://www.peterdebelak.com/blog/pessimistic-locking-in-rails-by-example/)

### Optimistic vs. Pessimistic Locking

- [Rails 7 adds optional transaction arguments to with_lock](https://blog.saeloun.com/2022/03/23/rails-7-adds-lock_with.html)
  - This is a good article for nested transaction.
- [Optimistic Locking vs Pessimistic Locking in Ruby on Rails](https://www.mintbit.com/blog/optimistic-locking-vs-pessimistic-locking-in-ruby-on-rails)
- [Optimistic Locking in Rails REST APIs](https://blog.appsignal.com/2021/10/20/optimistic-locking-in-rails-rest-apis.html)
- [Optimistic vs. Pessimistic locking - When to use](https://stackoverflow.com/questions/129329/optimistic-vs-pessimistic-locking)

## ActiveRecord::Enum

- [How to Use Enums in Rails](https://blog.saeloun.com/2022/01/05/how-to-use-enums-in-rails.html)
- [ActiveRecord::Enum](https://edgeapi.rubyonrails.org/classes/ActiveRecord/Enum.html)
- [Rails 7 introduces new syntax for enum](https://blog.saeloun.com/2021/02/26/rails-introduces-new-syntax-for-enum)
- [Ruby on Rails - How to Create Perfect Enum in 5 Steps](https://naturaily.com/blog/ruby-on-rails-enum)
- [Enum dropdown with readable values in rails](https://dev.to/masroorhussainv/enum-dropdown-with-capitalized-values-in-rails-144j)

# Rails Concerns

- [Rails Concerns: To Concern Or Not To Concern](https://blog.appsignal.com/2020/09/16/rails-concers-to-concern-or-not-to-concern.html)

# Design Patterns

- [Rails Patterns: Builders and Models](https://www.kcoleman.me/rails,/ruby/2015/06/03/rails-patterns-builders-and-models.html)

# System Design

- [System Design Interview Format - 6 Steps to passing](https://www.kcoleman.me/2020/06/14/system-design-interview-format.html)
- [SSO / SAML to JWT: A system design problem](https://www.kcoleman.me/2020/05/02/sso-to-jwt.html)
- [Designing a distributed web crawler](https://www.kcoleman.me/2020/06/14/designing-a-distrubute-web-crawler.html)

# Misc

## Security

- [Rails security guide](https://guides.rubyonrails.org/security.html)
- [Security Best Practices for Your Rails Application](https://blog.appsignal.com/2022/10/05/security-best-practices-for-your-rails-application)
- [Extensive set of examples of what not to do when it comes to SQL injection](https://rails-sqli.org/)
- [OWASP Rails Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Ruby_on_Rails_Cheat_Sheet.html)

# Useful Gems

- Find indexes that are missing
  - [lol_dba](https://github.com/plentz/lol_dba)
- Find missing foreign key constraints
  - [yeet_dba](https://github.com/kevincolemaninc/yeet_dba)
- Detect missing unique indexes
  - [consistency_fail](https://github.com/trptcolin/consistency_fail)

# Blogs

- [AppSignal](https://blog.appsignal.com/category/ruby.html)
- [Semaphore](https://semaphoreci.com/search?s=rails)
- [Scout APM](https://scoutapm.com/blog/search/rails)
- [BigBinary](https://www.bigbinary.com/blog/categories)
- [Saeloun](https://blog.saeloun.com/)
