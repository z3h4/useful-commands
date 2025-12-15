### Javascript vs Ecmascript

- Ecmascript is just a specification. Javascript is a programming language that conforms to this specification.

### Where should we add the script element?

The best practice is to put the script element at the end of the `body` section after all the existing elements.

# Arrays

- If we declare an array as a constant, we cannot reassign it to something else. But it does not stop us from modifying the contents of that array.

## Count number of elements in an array

```javascript
numbers.length;
```

## Adding Elements

- Beginning of an array
  ```javascript
  numbers.unshift(1, 2);
  ```
- End of an array
  ```javascript
  numbers.push(5, 6);
  ```
- Middle of an array

  ```javascript
  numbers.splice(2, 0, 3, 3);
  ```

  - Using splice method we can add/remove items at a given position.
    - First argument is the index.
    - Second argument is the number of items we want to delete.
    - Third argument is the new items we want to add.

## Removing Elements

- Beginning of an array
  ```Javascript
  numbers.shift();
  ```
- End of an array
  ```Javascript
  numbers.pop();
  ```
- Middle of an array

  ```Javascript
  numbers.splice(2, 1);   // Second argument is the number of items we want to delete.
  ```

## Finding Elements

### Finding Primitives

```Javascript
numbers.indexOf(1)
numbers.lastIndexOf(1)
// Check to see if an item is in the array
if (numbers.indexOf(1) != -1)
if (numbers.includes(1))    // better alternative
```

### Finding Reference Types (Objects)

- Find an element

  ```Javascript
  const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
  ];

  const course = courses.find(function(course) {
    // This function is called a predicate or a callback function
    return course.name === 'a'
  })

  // Or we can use the arrow function
  const course = courses.find(course => course.name === 'a')
  ```

  - It returns the object if found, else returns `undefined`.

- Find the index of an element

  ```Javascript
  const index = courses.findIndex(function(course) {
    // This function is called a predicate or a callback function
    return course.name === 'a'
  })
  ```

### Testing the Elements of an Array

- Use `every()` method to check if all the elements matches a criteria

  ```Javascript
  const numbers = [1, 2, 3];
  const allPositive = numbers.every(value => value >= 0); //=> Returns a boolean
  ```

- Use `some()` method to check if at least one element in the array matches a criteria.

  ```Javascript
  const numbers = [1, 2, 3];
  const atLeastOnePositive = numbers.some(value => value >= 0); //=> Returns a boolean
  ```

### Concat Two Arrays

```Javascript
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);  // This will return a new array. `first` will not be affected.
const combined = [...first, ...second]  // Better
```

### Slicing an Array

- We can slice an array into two parts.

  ```Javascript
  const array = [1, 2, 3, 4, 5, 6];
  // start and end index. End index is exclusive.
  combined.slice(2, 4);  //=> [3, 4]
  // only the start index
  combined.slice(2);     //=> [3, 4, 5, 6]
  // In the following case we'll get a copy of the original array
  const copy = combined.slice();     //=> [1, 2, 3, 4, 5, 6]
  const copy = [...combined];    // Better
  ```

- In case of both `concat()` and `slice()` methods, if the content of the array is of primitive type, the values will be copied into the target array. But if we have objects in our array, the references of those objects will be copied in the target array.

### Iterating an Array

```Javascript
const numbers = [1, 2, 3, 4, 5, 6];

for (let number of numbers)
  console.log(number);

// Alternative
numbers.forEach(number => console.log(number));
```

- The callback function can optionally take a second parameter for index.

  ```Javascript
  numbers.forEach((number, index) => console.log(index, number));
  ```

### Get the Maximum and Minimum Value

```javascript
Math.max(a, b);
Math.min(a, b);
```

### Convert an Array to a String

```Javascript
const numbers = [1, 2, 3];
const joined = numbers.join();    //=> '1,2,3'
const joined = numbers.join('');    //=> '123'
```

### Convert a String to an Array

```Javascript
const message = 'This is a message';
const array = message.split(' ');    //=> ['This', 'is', 'a', 'message']
```

### Sorting an Array

- For sorting numbers and strings, we can use the `sort()` method.

  ```Javascript
  const numbers = [2, 3, 1];
  numbers.sort();    //=> [1, 2, 3], changes the original array
  ```

- Sorting an array of objects:

```Javascript
const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'Javascript' },
];

courses.sort((a,b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});
```

### Reversing an Array

```Javascript
const numbers = [1, 2, 3];
numbers.reverse();    //=> [3, 2, 1], changes the original array
```

### Filtering an Array

```Javascript
const numbers = [-1, 1, 2, 3];
numbers.filter(number => number >= 0);   //=> [1, 2, 3]
```

### Mapping an Array

```Javascript
const numbers = [1, 2, 3];
numbers.map(number => number * number);   //=> [1, 4, 9]
```

- If we want to map our items to an object

  ```Javascript
  const numbers = [1, 2, 3];
  const items = numbers.map(number => {
    return { value: number };
  })

  // or if we want to use inline, we need to use a parenthesis. Because by default curly braces in an arrow function represents a code block.
  const items = numbers.map(number => ({ value: number }));
  ```

- Both `map()` and `filter()` methods return an array. So they are chainable.

  ```Javascript
  const numbers = [-1, 1, 2, 3];
  const items = numbers
    .filter(number => number > 0)
    .map(number => ({ value: number }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);
  ```

### Reducing an Array

- Reduce the items of an array to a single value.

  ```Javascript
  const numbers = [1, 2, 3];
  const sum = numbers.reduce((accumulator, number) => {
    return accumulator + number;
  }, 0);  // the second argument is the initial value of the accumulator.
  ```

- The second argument is optional. If we don't pass it, the initial value of the accumulator will be set to the first item of the array.

  ```Javascript
  const numbers = [1, 2, 3];
  const sum = numbers.reduce((accumulator, number) => accumulator + number);
  ```

# String

## Substrings

### `substring()` method

```Javascript
string.substring(startIndex, endIndex);
"Hello".substring(0, 4);  //=> "Hell"
"Hello".substring(2);     //=> "llo" (from index 2 to the end)
```

- `startIndex` → required
- `endIndex` → optional (non-inclusive)
- If `endIndex` is omitted, substring goes until the end of the string.
- If `startIndex` is greater than `endIndex`, `substring()` automatically **swaps** the two arguments internally.

  ```javascript
  "Hello".substring(3, 1); //=> "el"
  ```

- **No negative indexes allowed** - if you use negative values, they are treated as 0.
  ```Javascript
  "Hello".substring(-3, 1); //=> "H"
  "Hello".substring(1, -1); //=> "H"
  "Hello".substring(1, -2); //=> "H"
  "Hello".substring(-3);    //=> "Hello"
  ```
- If start and end indices are the same, an empty string is returned.
  ```javascript
  "Hello".substring(3, 3); //=> ""
  ```
- If `endIndex` is greater than the length of the string, it'll return till the end of the string.
  ```javascript
  "Hello".substring(3, 10); //=> "lo"
  ```

### `substring()` vs `substr()`

- The `substring()` method has distinct differences from the deprecated `substr()` method.
- `substring()` takes start and end indices, while `substr()` takes a start index and a length (number of characters to extract). `substr()` is a legacy function and should be avoided in new code.

### `slice()` method

The `slice()` method is similar to `substring()`. But, `slice()` is more predictable and more powerful.

- `slice()` supports negative indices. So, if you ever need "last N characters", use `slice()`.

  ```Javascript
  "Hello".slice(-3);      //=> "llo"
  "Hello".substring(-3);  //=> "Hello" (negative becomes 0)
  ```

- `substring()` swaps arguments if the start is greater than the end. `slice()` returns an empty string if the start index is greater than the end index.

  ```Javascript
  "Hello".substring(4, 1);    //=> "ell" (same as substring(1,4))
  "Hello".slice(4, 1);        //=> "" (empty string)
  ```

- [When to prefer `slice()` over `substring()`](https://chatgpt.com/s/t_693a96e79c148191b2f5ebe5fa22931e)

## String Length

```Javascript
"Hello".length;    //=> 5 (no parenthesis in the method name)
```

## Accessing Characters

```Javascript
let text = "Hello";
console.log(text[0]);           //=> "H"
console.log(text.charAt(1));    //=> "e"
console.log(text.charAt(5));    //=> "" (empty string)
console.log(text.charAt(-1));   //=> "" (empty string)
```

The `charAt()` method returns:

- A new string containing a single character if the index is within the valid range (0 to string.length - 1).
- An empty string (`""`) if the specified index is out of the valid range.
- An empty string (`""`) if the index is negative.

## Convert to Uppercase/Lowercase

```javascript
str.toLowerCase();
str.toUpperCase();
```

## Searching Within Strings

```Javascript
let text = "Hello World";

console.log(text.indexOf("World"));   //=> 6
console.log(text.includes("Hello"));  //=> true
console.log(text.startsWith("H"));    //=> true
console.log(text.endsWith("d"));      //=> true
```

## Check if a String is Empty

- [Explain null/empty checking in javascript](https://chatgpt.com/s/t_693a98d632a08191928d71b444a894bf)

## Remove Leading/Trailing Spaces from a String

- `trim()`: Removes whitespace (spaces, tabs, and line terminators) from both ends.
- `trimStart()`: Removes whitespace from the beginning (left) of the string.
- `trimEnd()`: Removes whitespace from the end (right) of the string.

  ```Javascript
  let str = "  Hello, World! \n ";

  str.trim(); //=> "Hello, World!"
  str.trimStart() //=> "Hello, World! \n "
  str.trimEnd() //=> "  Hello, World!"
  ```

- All of these methods return a new string, without modifying the original string.

## Replacing Strings

```Javascript
let text = "Hello World";
console.log(text.replace("World", "JS"));             //=> "Hello JS"
console.log(text.replace(/l/, "*"));                  //=> "He*lo World"
console.log(text.replace(/l/g, "*"));                 //=> "He**o Wor*d"
console.log("HelLo World".replace(/l/ig, "*"));       //=> "He**o Wor*d"
console.log(text.replaceAll("l", "*"));               //=> "He**o Wor*d"
```

- Both `replace()` and `replaceAll()` methods return a new string and do not modify the original string, as strings are immutable in JavaScript.
- The `/g` in a regular expression is a flag (or modifier) that stands for **global search**. It instructs the regular expression engine to find all occurrences of a pattern within a string, rather than stopping after the first match.
- `i` (ignore casing): Makes the search case-insensitive (e.g., `/a/i` matches "a" or "A")
- The `replaceAll()` method is a newer, more direct method that replaces all occurrences of a substring without needing a regular expression, making it the preferred choice for simple global replacements.

## Misc

- [Explain the difference between == and === in javascript](https://chatgpt.com/s/t_693a9ee942ec8191a945ac74a1ad00be)
  - Coercion vs. Conversion in programming (especially JavaScript) refers to how data types change: Coercion (or implicit conversion) is automatic, hidden type changes by the engine (e.g., '5' - 2 becomes 3), while Conversion (explicit conversion) is manually controlled by the developer using functions like Number() or String() (e.g., Number('5') becomes 5).

# Objects

- Objects are collections of key-value pairs.
- If we have properties that are highly related, we want to encapsulate them inside of an object.
- The object literal syntax (using curley braces) to create an object:

  ```Javascript
  const circle = {
    radius: 1,
    location: {
      x: 1,
      y: 1
    },
    isVisible: true,
    draw: function() {
      console.log('draw');
    }
  }

  circle.draw();        //=> "draw"
  ```

- There are 2 ways to create an object -
  1. Factory function
  2. Constructor.

## Factory Function

- Creating object with the object literal syntax is an issue if the object has behaviour (one or more methods).
- **Factory functions produce objects**, just like a factory producing products.
- The above object literal syntax can be written as:

  ```Javascript
  function createCircle(radius) {
    return {
      radius,   // this is equivalent to `radius: radius`, as the key and the value are the same
      draw() {
        console.log('draw');
      }
    }
  }

  const circle = createCircle(1);
  ```

- We can simply call a factory function to create an object.
- Naming convention of factory functions: Camel notation

## Constructor Functions

- The job of the constructor function is to construct or create an object.
- Naming convention of constructor functions: Pascal notation
- There is no explicit `return` statement.

  ```Javascript
    function Circle(radius) {
      this.radius = radius;
      this.draw = function() {
        console.log('draw');
      }
    }

  const circle = new Circle(1);
  ```

## Constructor Property

- Every object in JS has a property called constructor which references the function that was used to create that object.

## Functions are Objects

- In JS, functions are Objects.

## Value vs Reference Types

- Primitive/Value types in JS
  - Number
  - String
  - Boolean
  - Symbol
  - undefined
  - null
- Reference Types
  - Objects
  - Functions
  - Arrays
- Primitives are copied by their value. Objects are copied by their reference.

# React

### Adding React to your project

- Add React and ReactDOM from here

  - https://reactjs.org/docs/cdn-links.html

- Add Babel to use JSX

  - https://reactjs.org/docs/add-react-to-a-website.html#quickly-try-jsx
