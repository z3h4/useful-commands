- Enumeration refers to traversing over objects.
- In Ruby, we call an object enumerable when it describes a set of items and a method to loop over each of them.
- The Enumerable module relies on a method named `#each`, which needs to be implemented in any class it’s included in.
- If we call the `#each` method on an array without passing a block to execute for each of its elements, we’ll receive an instance of Enumerator.

      irb> [1,2,3].each
      => #<Enumerator: [1, 2, 3]:each>
