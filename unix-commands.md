### Listing files

- List files

      ls

- List all files including hidden files

      ls -a

### Open a directory using Finder (in mac) from command line

      open /path

### Writing content to a file

- Use `echo` command to add content to a file

      echo hello > file.txt

  - The above command will also create the `file.txt` file if it was not there already.
  - Running the above command multiple times will only replace the contents of the file.

- `>>` means append

      echo world >> file.txt

  - This will append the new content in a new line to `file.txt`

### Renaming a file

- Use `mv` command

      mv old-name.txt new-name.txt
