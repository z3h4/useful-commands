# React

- React is a Javascript library for building dynamic and interactive user interfaces.
- Currently, this is the most popular js library for building user interfaces.
- Developed by Facebook.

- **Library vs Framework**

  - React is a library, Angular and Vue are frameworks.
  - A library is a tool that provides a specific functionality.
  - A framework provides a set of tools and guidelines for building apps.
  - So, a library is like a tool, and a framework is like a toolset.

- Since React is just a library and not a framework like Angular or Vue, we often need other tools for concerns such as routing, state management, internationalization, form validation, etc.

## Why was React Created?

- When a webpage is loaded in a browser, the browser takes the HTML code and creates a tree like structure called the Document Object Model (DOM).
- This allows us to use Javascript and change the page content in response to user actions.
- Vanilla JS means plain JS code without any third party tools.
- As our application grow, working with the DOM can become quite complex and challenging to manage.
  - This is where React comes into play.
  - **With React we no longer need worry about querying and updating DOM elements.**
  - Instead, we describe a webpage using small, reusable components, and React will take care of efficiently creating and updating DOM elements.
- So, components help us write reusable, modular, and better organized code.
- Essentially a React application is a tree of components with the `App` being the root bringing everything together.

## How React Works?

- When our application starts, React takes a tree of components and builds a JavaScript data structure called the virtual DOM.
  - This virtual DOM is different from the actual DOM in the browser.
  - It’s a lightweight, in-memory representation of our component tree.
- When the state or the data of a component changes, React updates the corresponding node in the virtual DOM to reflect the new state.
- Then, it compares the current version of virtual DOM with the previous version to identify the nodes that should be updated. It’ll then update those nodes in the actual DOM.
- In browser-based apps, updating the DOM is done by a companion library called ReactDOM. In mobile apps, React Native uses native components to render the user interface.

## JSX

- JSX stands for JavaScript XML.
- It is a syntax that allows us to write components that combine HTML and JavaScript in a readable and expressive way, making it easier to create complex user interfaces.
- With JSX we can easily describe the user interface of our application with HTML and Javascript.
- The great thing about JSX is that it allows us to easily create dynamic contents.

# Creating a React App

- There are 2 ways to create a React app
  1. Create React App (CRA)
  - Official tool provided by the React team.
  2. Vite
  - It is much fastet and gives us smaller bundle sizes.

## Creating a React App Using Vite

```npm
npm create vite@latest
npm create vite@4.1.0
```

## Running a server

```npm
npm run dev
```

## Project Structure

### `packege.json`

- `package.json` file that includes metadata about the application.
- It includes basic info about the app or project
  - Name of the application
  - It’s version
  - It’s dependencies etc.
- To create a `package.json` file, run
  `npm init` (Then answers some questions)
  `npm init --yes` (Create project with default values)

### `node_modules`

- All the installed packages and their dependencies are stored under `node_modules` folders.
  - This folder should be excluded from the source control.

### tsconfig.json

- This file contains bunch of settings for telling the Typescript compiler how to compile our code to Javascript.

## Component

- At the heart of all react applications are components.
- **A Component is essentially a piece of the UI.**
  - **So, when building applications with react, we build a bunch of independent, isolated and reusable components and then compose them to build complex user interfaces.**
- Every react application has at least one component which we refer to as the root component.
  - This component represents the entire application and contains other child components.
  - So, every react app is essentially a tree of components.
  - We can build each component in isolation and then put them together to build a complex UI.
- React keeps a lightweight representation of the DOM in memory which we refer to as the **virtual DOM**.

### Fragment

- In React apps, a component can only return a single element.
- To return multiple elements, we wrap them in a fragment, which is represented by empty angle brackets.
- To use a Fragment we have to import it.

  ```Javascript
  import { Fragment } From 'React';

  <Fragment>
    <h1>List</h1>
    <div>List Content</div>
  </Fragment>
  ```

- If we use empty angle brackets, we don't have to import Fragment from React.

### Handling Events

- To pass a parameter of type event to a Javascript method in Typescript we have to specify the event type.

  ```Javascript
  import { MouseEvent } from 'React';

  const handleClick = (event: MouseEvent) => console.log(event);
  ```

- This is called type annotation in Typescript. With type annotation we can specify type of our variables, parameters and so on.

### Props

- Components can optionally have props (short for properties) to accept input.
- We can pass data and functions to a component using props.
- Functions are used to notify the parent (consumer) of a component about certain events that occur in the component, such as an item being clicked or selected.

### Props vs State

- Props are the inputs or arguments passed to a component.
  - We should treat props as immutable (read-only) and not modify them.
- State is the internal data managed by a component that can change over time.
- When the state or props of a component change, React will re-render the component and update the DOM accordingly.
  - This is the common behaviour between states and props.

### Passing Children

- `children` is a special prop that all components support.
- Using this prop we can pass children to a component.

  ```Typescript
  interface Props {
    children: string;   // if the children does not contain any HTML component
    //or
    children: ReactNode;    // if the children contains HTML component
  }
  ```

### Prop Interface

To set a default value

1. Make that prop optional using ?

   ```Typescript
   interface Props {
     color?: 'primary' | 'secondary' | 'danger';
     children: string;
     onClick: () => void;
   }
   ```

2. Set the default value

   ```Typescript
    const Button = ({ color = 'primary', children, onClick }: Props) => {
      ...
    }
   ```

- To allow a set of accepted values, specify those values (e.g. color)

# Styling Components

### Inline Styles

- Inline CSS makes our code hard to read and maintain. We should avoid them.

  ```Javascript
  <ul style={{ backgroundColor: 'yellow' }}>
  </ul>
  ```

### Icons

We can add icons to our applications using the `react-icons` library.

# State Management

- A hook is a function that allows us to tap into built-in features in React.
- Using the state hook we can tell React that this component can have data or state that will change over time.
- The state hook allows us to add state to function components.
- Three important points about state hooks

  1. React updates states asynchronously. (for performance reasons)

     - So updates are not applied immediately. Instead, they’re batched and applied at once after all event handlers have finished execution. Once the state is updated, React re-renders our component.

  2. State variables are stored outside of a component in memory.

     - State variables, unlike local variables in a function, stay in memory as long as the component is visible on the screen. This is because state is tied to the component instance, and React will destroy the component and its state when it is removed from the screen.

  3. Hooks can only be called at the top level of components.
     - We cannot use hooks inside for loops, if statements or nested functions. Because these constructs can impact the order in which the state hook is called.

- Understanding the state hooks (Mosh React 18 course) \*\*\*

## `useState` best practices

- To keep state as minimal as possible, avoid redundant state variables that can be computed from existing variables.
- Group related state variables into an object to keep them organized.

  ```Javascript
  const [person, setPerson] = useState({
    firstName: '',
    lastName: ''
  });
  ```

- Avoid deeply nested state objects as they can be hard to update and maintain.

## Purity

- A pure function is one that given the same input, always returns the same result.
- React expects our function components to be pure. A pure component should always return the same JSX given the same input.
  - This is for performance reasons. So, if the inputs of a component have not changed, React can skip re-rendering that components.
- To keep our components pure, we should avoid making changes during the render phase.

## `React.StrictMode`

- This is one of the built in components of React.
- It does not have a visual representation.
- It's only purpose is to catch potential problems.
  - One of the potential problems is impure components.
  - When the strict mode is enabled, in development, React renders each component twice.
    - The first render is used to primarily for detecting and reporting potential issues with our code.
    - The second render is used to actually update the UI.
  - In production, the strict mode checks are not included, and the components are rendered only once.
- Starting from React 18, it is enabled by default.

## Updating Objects/Arrays

- When updating objects or arrays, we should treat them as immutable objects.
- Instead of mutating them, we should create new objects or arrays to update the state.
  - `Immer` is a library that can help us update objects and arrays in a more concise and mutable way.

# Form

## Accessing Input Fields

- We can use `useRef` hook to reference a DOM element.

  ```JavaScript
  // 1. Use the ref hook to create a reference
  const nameRef = useRef<HTMLInputElement>(null);
  // 2. Use that reference in our HTML element
  <input ref={nameRef} id="name" type="text" className="form-control" />

  // 3. Get the value of a HTML element in our event handler
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null)
      console.log(nameRef.current.value);
  };
  ```

- Accessing Input Fields (Mosh React 18 course) \*\*\*

## React Hook Form

- React Hook Form is a popular library that helps us build forms quickly with less code.
- With React Hook Form, we no longer have to worry about using the ref or state hooks to manage the form state.

## Schema-based Validation

- We can validate our forms using schema-based validation libraries such as joi, yup, zod, etc.
- With these libraries, we can define all our validation rules in a single place called a schema.

## Higher Order Components

- A higher-order component is a function that takes a component and returns a new component.
- We use higher order components to reuse logic across components.
- A HOC doesn’t modify the input component, nor does it use inheritance to copy its behavior. Rather, a HOC composes the original component by wrapping it in a container component. A HOC is a pure function with zero side-effects.
- https://reactjs.org/docs/higher-order-components.html

## Hooks

- A hook is a function that allows us to hook into React features like working with state or lifecycle methods from functional components.
- So, we no longer need to use classes to use these React features.
- It does not work inside classes.
- All the function names that start with `use` are the examples of hooks in React.
- We can use `useState` hook to hook into React state.
- We can use `useEffect` hook to hook into our components lifecycle methods.

### The `useState` Hook

- It returns an array with 2 items:
  - The first item is our state variable
  - The second item is a function to update the state variable.

### Hook Rules

We need to follow two rules while using hooks.

1. We cannot call hooks inside loops, conditions or nested functions.

   - React relies on the order in which Hooks are called.
   - As long as the order of the Hook calls is the same between renders, React can associate some local state with each of them.
   - By following this rule, we ensure that Hooks are called in the same order each time a component renders.
   - It allows React to correctly preserve the state of Hooks between multiple `useState` and `useEffect` calls.

2. We cannot call hooks from regular JavaScript functions. Instead, we can call Hooks from React function components. Hooks can also be called from custom Hooks.

- https://reactjs.org/docs/hooks-rules.html

### The `useEffect` Hook

- By using this Hook, we tell React that our component needs to do something after render.
- If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.

### Prop Drilling

- React passes data to child components via props from top to bottom.
- When need to access data from a top component in a deeply nested components, we can pass that data as props through middle components, whether those component use that props or not. This is called prop drilling.
- Using context, we can avoid passing props through intermediate elements:

### Context

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

### When to Use Context

- Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.
- Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.

# Installing Libraries

### Bootstrap

- See React 18 Course, Creating a ListGroup component lesson
