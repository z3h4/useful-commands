## Installation

### Mac

- Download Node from https://nodejs.org/en/ and install it.

### Run a script

        node file_name.js

## Useful Node Packages

### joi

- Used for input validation

### nodemon

- Automatically restarts the node application when file changes in the directory are detected.

### jshint

- Analyses JS code and looks for potential problems/syntactical errors.
- Scan JS code for errors using jshint file_name.js

      jshint file_name.js

### config

- Manages configuration of the application

### pug

- Templating engine

### debug

- Used for debugging

## MongoDB

### mongoose

- Gives us a simple api to work with MongoDB database.

### fawn

- We don’t have transactions in MongoDB. To implement transactions, we use a pattern called “Two Phase Commit”. If you don’t want to manually implement this pattern, use the Fawn NPM package

        npm i fawn

### joi-objectid

- Use it to add support to validate object Id in Joi.

## Authentication and Authorization

### joi-password-complexity

- Enforce password complexity in the application.

### bcrypt

- To hash passwords

### jsonwebtoken

- Use JWT

## Handling and Logging Errors

### express-async-errors

- Adding a try/catch block to every route handler is repetitive and time consuming. Use `express-async-errors` module. This module will monkey-patch your route handlers at runtime. It’ll wrap your code within a try/catch block and pass unhandled errors to your error middleware.

### winston

- Logging library

## Automated Testing

### Unit Testing

- Use `jest` for unit and integration testing

#### `jest` Installation

        npm i jest --save-dev

#### `jest` Configuration

- Change the `scripts` property in `package.json` to

        "test": "jest"

- Monitor the changes and run tests automatically when we save the files

        "test": "jest --watchAll"

- Add `verbose` flag which will help to troubleshoot problems when something goes wrong.

       "test": "jest --watchAll --verbose"

### Integration Testing

- Use `supertest` for integration testing of express applications.

- With `supertest` we can send HTTP request to our endpoints just like Postman.

#### `supertest` Installation

        npm i supertest --save-dev
