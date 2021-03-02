## Installation

Download and install git from https://git-scm.com/downloads

## Configuration

Configure the following settings after installation

- Name:

        git config --global user.name "userName"

  - Double quotation marks are only needed if there are spaces in the `username` i.e. "John Smith"

- Email

        git config --global user.email userEmail

  - We don't need quotation because there is no space in email.

- Default Editor:

        git config --global core.editor "code --wait"

  - The `wait` flag tells the terminal window to wait untill we close the new VSCode instance.
  - If we don't set it manually, by default git will use vim on mac.

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

### .gitignore

- Use this to ignore files and directories in git.
- Adding any file/directory to `gitignore` only works if we have not already included that file/directory in our git repository.
- This file should be at the root of the project.
- https://github.com/github/gitignore contains various `gitignore` templates for different programming languages.

### Diff Tool

- To use vscode as the diff tool set the following 2 configuration settings

      1. git config --global diff.tool vscode
      2. git config --global difftool.vscode.cmd "code --wait --diff $LOCAL $REMOTE"

  - `--diff` means we want to use VSCode for diffing/comparing files.
  - `$LOCAL $REMOTE` are placeholders for the old and new copies of a file.
  - Make sure these two configurations are added in the configuration file. `$LOCAL $REMOTE` might need to add to the file manually.

- Now, to use visual difftool instead of `git diff` command, use the following commands

       git difftool
       git difftool --staged

## Commands

### List files in the staging area

      git ls-files

### Remove a file from both the working directory and staging area

      git rm fileName.js

### Remove a file from the staging area only

      git rm --cached fileName.js

### Renaming a file

      git mv old-name.txt newName.js

### Unstaging a file

      git restore --staged fileName.js

### Discard local changes

      git restore fileName.js

- It does not discard newly added files. Because those files are untracked.
- To remove all the newly added untracked files, use

      git clean -fd

- `-f` force
- `-d` remove whole directory

### Restoring a file to an earlier version

- By default git will restore the file from the next environment.
- So, if the file we want to store is in the working directory, git will restore it from the staging area.
- And if the file is in the staging area, git will restore it from the last snapshot/commit.

      git restore --source=HEAD~1 fileName.js

## Browsing History

### Viewing a commit

      git show HEAD~2

- If we want to see the version of the file stored in that commit

      git show HEAD~2:/path-to-that-file

- If we only want to only see the file names that have been modified/added/removed in a commit

      git show --name-only

- If we want to see the file names with the type of changes made to that file in a commit

      git show --name-status

### Viewing changes across commits

- View the changes across two commits

      git diff HEAD~2 HEAD

- View the changes made across two commits to a particular file

      git diff HEAD~2 HEAD fileName.js

- We can use `--name-only` and `--name-status` flags

      git diff HEAD~2 HEAD --name-only
      git diff HEAD~2 HEAD --name-status

### Finding bugs using Bisect

- Using bisect, we can easily pinpoint a particular commit which introduced the bug.

      git bisect start
      git bisect bad
      git bisect good ca49180
      git bisect reset

### Finding Contributors

      git shortlog

- We can specify many options as flags

### Restoring a deleted file

      git checkout commitId fileName.js

- `commitId` is the parent commit to the commit where the `fileName.js` is deleted.

### Finding the author of a particular line

- To see the author of each line in a file

        git blame fileName.js

- To see the email instead of the default author name use `-e` flag

      git blame -e fileName.js

- If we want to see the author of let's say first three lines

      git blame -e -L 1,3 fileName.js

### Tagging

We use tags to bookmark certain points in the history of our project.

- To use tag/label v1.0 to the latest commit

      git tag v1.0

- To tag a earlier commit

      git tag v1.0 commitId

- This tag is called a lightweight tag. It is just a reference/pointer to a particular commit.

  - In git we have another type of tag called **Annotated Tag** which is an object with a bunch of properties like tagger name, email and message.
  - To create an annotated tag

        git tag -a v1.1 -m "message"

- We can reference a commit using this tag

        git checkout v1.0/commitId

- To see all the tags we have created

      git tag

- To see list of tags with the messages

      git tag -n

- To delete a tag

      git tag -d v1.1

## Branching

### Create a branch

      git branch bugfix

### Create and switch to a branch

      git switch -C bugfix

### See the list of branches

      git branch

### Switching branches

      git checkout bugfix
      git switch bugfix

- `switch` is newer command

### Renaming a branch

      git branch -m oldName newName
      git branch -m bugfix bugfix/signup-form

### Deleting a branch

      git branch -d branchName
      git branch -D branchName (force delete)

### Comparing Branches

- Before merging a branch (say, `bugfix/signup-form`) into master if we want to know what commits are coming into master, we can use

      git log master..bugfix/signup-form

  This command means show me all the commits that are in `bugfix/signup-form` branch and are not in `master`.

- If we want to see actual changes, not the list of commits

      git diff master..bugfix/signup-form

  - If we are currently in the `master` branch we can use

        git diff bugfix/signup-form

- If we only want to see what files are going to be affected

      git diff --name-only bugfix/signup-form
      git diff --name-status bugfix/signup-form

### Stashing

- To stash changes in the working directory, use

      git stash push -m "message"

- By default new untracked files are not included in our stash. To include these files use

      git stash push --all/-a -m "message"

- To view our stashes

      git stash list

- To see the codes that have been modified in a stash

      git stash show stash@{1}
      git stash show 1

- Apply the stash in our working directory

      git stash apply 1

- Remove a stash

      git stash drop 1

- To remove all stashes

      git stash clear

### Merging

- Use `--graph` flag to see better representation of our branches and how they diverge.

      git log --oneline -all --graph

- To bring the changes from the bugfix branch into master, first we should be on the master branch, and then we run

      git merge bugfix/signup-form

- It is possible to disable a fast-forward merge.

      git merge --no-ff bugfix/login-form

  - We can also disable fast-forward merges for a particular repository or globaly

        git config ff no
        git config --global ff no

### Viewing merged and unmerged branches

- To view the list of branches that we have merged into the current branch

      git branch --merged

- To view the list of branches that we have not merged into the current branch

      git branch --no-merged

### Aborting a Merge

      git merge --abort

### Cherry Picking

Pick one commit from a branch and apply it to another branch.

      git cherry-pick commitId

### Picking a file from another branch

      git restore --source=branchName fileName.js
