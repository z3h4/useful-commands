# Setup

## Mac

### To enable `code .` in command line

- Open the **Command Palette** via `Command+Shift+P` and type `shell command`
- Select `Install 'code' command in PATH`

### Set `EDITOR="code --wait"` permanently in the shell configuration

- Open `~/.zshrc` or `~/.bashrc` (on Linux)
- At the bottom of the file add

  ```
  export EDITOR="code --wait"
  ```

# Shortcuts

## Mac

### Moving a line

```
ALT + Up/Down
```

### Duplicating a line/selection

```
Shift + Option + Down
```

### Multi select

```
Command + D
```

### Multiline select

```
Option + Command + arrow-key (up/down)
```

### Wrap with abbreviation

1.  Select the text
2.  Bring up the command palette

    ```
    Shift + Command + P
    ```

3.  Type "Wrap with abbreviation"
4.  Type the element you want to wrap your text around.

### Open the explorer panel

```
Command + B
```

### Open the terminal

```
control + `
```

# Extentions

## Prettier - Code formatter

- Prettier is the most popular VSCode extension for formatting code.
- Set settings to formats code on save
  - `Preferences -> Settings`
    - Search for "`Format on Save`", click the checkbox or set `editor.formatOnSave` to `true`
    - Search for "`Default Formatter`", click the checkbox or set `esbenp.prettier-vscode` as default formatter.
- Set tab width to 2
  - Preferences -> Settings
    - Search for prettier
    - Set tab width to 2
    - https://www.digitalocean.com/community/tutorials/code-formatting-with-prettier-in-visual-studio-code

## Live Server (Ritwick Dey)

- Launch our website inside a development web server.
