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

### Concat two arrays

```Javascript
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
const combined = [...first, ...second]  // Better
```

# React

### Adding React to your project

- Add React and ReactDOM from here

  - https://reactjs.org/docs/cdn-links.html

- Add Babel to use JSX

  - https://reactjs.org/docs/add-react-to-a-website.html#quickly-try-jsx
