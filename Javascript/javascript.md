### Javascript vs Ecmascript

- Ecmascript is just a specification. Javascript is a programming language that conforms to this specification.

### Where should we add the script element?

The best practice is to put the script element at the end of the `body` section after all the existing elements.

# Objects

- Objects are collections of key-value pairs.
- If we have properties that are highly related, we want to encapsulate them inside of an object.
- The object literal syntax to create an object:

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

## Factory Function

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

  const circle = new Circle(1);
  ```

- We can simply call a factory function to create an object.
- Naming convention of factory functions: Camel notation

## Constructor Functions

- The job of the constructor function is to construct or create an object.
- Naming convention of constructor functions: Pascal notation

  ```Javascript
    function Circle(radius) {
      this.radius = radius;
      this.draw = function() {
        console.log('draw');
      }
    }

    const circle = createCircle(1);
  ```

# Arrays

- If we declare an array as a constant, we cannot reassign it to something else. But it does not stop us from modifying the contents of that array.

## Adding Elements

- Beginning of an array
  ```Javascript
  numbers.unshift(1, 2);
  ```
- End of an array
  ```Javascript
  numbers.push(5, 6);
  ```
- Middle of an array

  ```Javascript
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

### Converting to Lowercase/Uppercase

```Javascript
str.toLowerCase();
str.toUpperCase();
```

# React

### Adding React to your project

- Add React and ReactDOM from here

  - https://reactjs.org/docs/cdn-links.html

- Add Babel to use JSX

  - https://reactjs.org/docs/add-react-to-a-website.html#quickly-try-jsx
