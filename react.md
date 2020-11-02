## Prepare the environment

### Mac

1.  Install Node.js (to get npm)

2.  Create a new project

        npx creare-react-app app-name

- In mac if you get an error about Xcode, run

        xcode-select --install

- If the previous command fails download `Command Line Tools for Xcode` from https://developer.apple.com/download/more/ and install it.

#### VS Code extentions

- `Reactjs code snippets`
  - rcc => React Class Component
  - rsf => React Stateless Function
- `Simple React Snippets`
- `Prettier - Code formatter`
  - Set settings to formats code on save
    - Preferences -> Settings
      - Set `editor.formatOnSave` to `true`
      - Set `esbenp.prettier-vscode` as default formatter.
    - Preferences -> Settings
      - Search for prettier
      - Set tab width to 2
      - https://www.digitalocean.com/community/tutorials/code-formatting-with-prettier-in-visual-studio-code
- `Auto Import - ES6, TS, JSX, TSX`
  - Automatically imports the components on top of our modules.
    - So, we don't have to manually type our import statements.

#### VS Code Color Theme

- Install the extention `Ayu`
- Select `Ayu Mirage`

#### Debug React App

- Use Google Chrome/Firefox extension `React Developer Tools`
- This is also available as a standalone app for Safari & Internet Explorer.

## Create new application using `create-react-app` command

        create-react-app app-name

## Start the server

        npm start

## Installing required libraries

### Bootstrap

- Install

        npm i bootstrap

- Import `bootstrap.css` file in the `index.js`

        import "bootstrap/dist/css/bootstrap.css";

### Font-awesome

- Install

       npm i font-awesome

- Import `font-awesome.css` file in the `index.js`

        import "font-awesome/css/font-awesome.css";

### Prop-types

        npm i prop-types

- We use this to define type checking requirements of a component.

### Debugging React App

- Use `React Developer Tools` extention for chrome/firefox.

### Routing

- Use `react-router-dom`

- For working with query string parameters use `query-string`

### Validation

- Use `joi-browser`

### Get Data From Backend

- Use `axios`

### Display Toast Notifications

- Use `react-toastify`

### Logging Errors

- If you want to use logging as a service, try [Sentry](https://sentry.io/)

### Decode JSON Web Token

- Use `jwt-decode`
