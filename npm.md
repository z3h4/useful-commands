### Create `package.json` file

        npm init

- To create `package.json` file with default values

        npm init --yes

### NPM Useful Commands

#### Install a package

        npm i <package-name>

#### Install a specific version of a package

        npm i <package-name>@<version>

#### Uninstall a package

        npm un <package-name>

- To install/uninstall packages globally, use -g flag.

#### List installed packages

        npm list —-depth=0

#### Listing all the installed dependencies

        npm list

#### View outdated packages

        npm outdated

#### Update packages

        npm update

- This only works for updating minor and patch releases.

#### Update Major Version of a Package

To update the major version install `npm-check-updates`.

        npm i -g npm-check-updates

- To check the packages run

        npm-check-updates

- To update the packages run

        npm-check-updates -u

  or

        ncu -u

This will only update the `package.json` file. This will not install the latest version. To install the latest version run `npm i`

#### Install a package as development dependency.

        npm i <package-name> --save-dev

### NPM permission (Mac)

- Use these commands

        sudo chown -R $(whoami) ~/.npm
        sudo chown -R $(whoami) /usr/local/lib/node_modules

* **whoami** is a command in a Unix-like OSs. It prints the effective username of the current user when invoked.
* **chown** command changes file owner and group
  - **-R**, Recursive; operate on files and directories recursively
