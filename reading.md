# Including a css file in a HTML

- Include it in the `<head>` tag

      <link rel="stylesheet" href="index.css" />

## Imperative Programming

- Is a programming paradigm (style of programming).
- In imperative programming we have statements that specify how something should be done.
- Here, we implement the logic using instructions.
- For example, whenever we have `for` loops or `if/else` or `switch/case`, we are writing code in imperative style.

## Declarative programming

- In declarative programming we express logic in terms of what should be done.
- For example, SQL is an example of declarative language.

  - We write a query to express what we need to get from a database.
  - But, we don’t write the actual logic for pulling up data and filtering it.
  - Instead of using instructions (`for`, `if/else` etc.) to specify how something should be done, we specify what needs to be done.

# Declarative vs Imperative programming

- When a program is declarative, we can simply tell it what should be done.
- More specifically, it's like the computer saying just tell me what to do and I'll worry about all the details about how to get it done.
- It's opposite imperative is when we need to tell the program how it should be done.
- Like the computer saying I need you to describe to me every step along the way how to do something and then I'l do it.
- If you use vanilla js to create something on the page it is an imperative way of programming.

      const h1 = document.createElement("h1")
      h1.textContent = "This is an imperative way to program"
      h1.className = "header"
      document.getElementById("root").append(h1)

- React allows to to write our code declaratively.
- The declarative way of writing the above code

      ReactDOM.render(<h1 className="header">Hello, React!</h1>, document.getElementById("root"))

- Here, we are relying on React how to turn what we have declaratively written as `<h1>` into the vanill js code above needed to append it to the DOM.

# JSX (Javascript XML)

- It is a flavour of javascript that looks a lot like HTML.
- JSX helps to write code in a declarative way.
- With JSX we can just write the HTML that we are used to writing.
- JSX returns a plain JS object.

# ReactDOM

- ReactDOM.render method's job is to take React elements and interpret them in a way that that turns them into real DOM elements that the browser can understand.

# See the contents of [object Object] in Javascript

      JSON.stringify(navbar)

## Important Lessions

- Why React? It's declarative
- JSX
