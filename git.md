## Installation

Download and install git from https://git-scm.com/downloads

## Configuration

Configure the following settings

- Name:

        git config --global user.name "userName"

  - Quetation is only needed if we use space i.e. "John Smith"

- Email

        git config --global user.email userEmail

  - We don't need quotation because there is no space in email.

- Default Editor:

        git config --global core.editor "code --wait"

- Line Endings:

        git config --global core.autocrlf true/input

  - For windows set it to `true`.
  - For Mac/Linux, set it to `input`.

All these configurations are stored in a text file. To see/edit this file use

        git config --global -e

### Check git version

    git --version

### Initialize a git repository

        git init

### Make terminal window colorful

- On Mac install `zsh`
- On Windows install `posh-git`
