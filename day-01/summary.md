* , ls -l, ls -a, ls -sh, ls -lash
* chmod u+x <filename>
* vim -
* pwd
* mkdir
* touch
* echo
* >
* mv
* cp
* rm -r, rm -r -f
* source <filename> <=> . <filename>
* cat
* man ls, man cd
* pwd --help
*

### Basic commands

* `ls` - Lists all files and directories in the present working directory
* `ls -R` - Lists files in sub-directories as well
* `ls -a` - Lists hidden files as well
* `ls -al` - Lists files and directories with detailed information like permissions,size, owner, etc.
* `cd` - To change to a particular directory
* `cd /` - Move to the root directory
* `cd or cd ~` - Navigate to HOME directory
* `cd ..` - Move one level up
* `mkdir <dir1> <dir2> .. <dirN>` - Creates a new directory in the present working directory or a at the specified path
* `rmdir <dir1> <dir2> .. <dirN>` - Deletes directories
* `mv <sourcePath> <destPath>` - Renames a directory
* `mv file <destPath>` - Moves the files to the new location
* `cat > <file>` - Creates a new file
* `cat <file>` - Displays the file content
* `cat file1 file2 > file3` - Joins two files (file1, file2) and stores the output in a new file (file3)
* `rm <file>` - Deletes a file
* `rm -r <dir1> <dir2>` - Delete folders recursively
* `man` - Gives help information on a command
* `history` - Gives a list of all past commands typed in the current terminal session
* `clear` - Clears the terminal
* `echo 'text'` - To display the text
* `pwd ` - Displays present working directory
* `chmod ` - Adds and removes file permissions
* `echo 'hi' > file` - rewrite `hi` text into `file`
* `echo 'js' >> file` - appends `js` text into `file`

using `--help` with every command shows usage of the command

## Now let create a file and execute it

### File Permission commands

1. `$ touch test-exe` - creates test-exe file
2. `$ ls -l` - to show file type and access permission

   ```
   exeuting ls -l command shows this info
   
   -rw-rw-r-- 1 ubuntu ubuntu     0 Aug  5 14:47 test-exe
   ```    

    * `r` - read permission
    * `w` - write permission
    * `x` - execute permission
    * `-=` - no permission

    * `-rw-rw-r--`
    * first dash is for directory or other kind of file, in this case it is
      `-` (`d` stands for directory) so it is a normal file.
    * first group of `rwx` is for `user` permissions
    * second group of `rwx` is for `group` permissions
    * third group of `rwx` is for `everyone else` permissions

3. ```
   $ mv text-exe script.sh
   this line renames the file
   
   $ echo #!/bin/bash > script.sh
   
   this command adds #!/bin/bash text into script.sh file
   # used to comment the line 
   ! ()
   /bin/bash - indicates path and program that must be uesed to execute the file
   ``` 

4. ```
   $ echo 'pwd' >> script.sh
   ```

5. ```
   $ echo 'ls -l' >> script.sh
   ```

6. ```
   $ echo 'mkdir -p level1/level2/level3' >> script.sh
   ```

7. ```
   $ echo 'cd level1/level2/level3' >> script.sh
   ```

8. ```
   $ echo 'pwd' >> script.sh
   $ echo 'ls -lash' >> script.sh

   $ chmod u+x script.sh
   make the file executable
   
   $ . script.sh <==> source script.sh
   execute the file
   ```

## vim commands

`vim filename` - opens vim editor
press `i` to activate the window

to save the file and exit the editor press

* `esc` then `:wq!` or
* `esc` then `:x!`

### Additional Materials

* https://learnxinyminutes.com/docs/bash/
* https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html
* https://devhints.io/bash
* https://www.guru99.com/linux-commands-cheat-sheet.html
* https://www.cs.ait.ac.th/~on/O/oreilly/unix/upt/ch08_19.htm

```js
let name = 'jon'

```

```ts

```

```bash
ls -al

cat readme.md
```


```bash

cat readme.md

```

|     | Expression | Description         |
|-----| ---------- | ------------------- |
|     | `{A,B}`    | Same as `A B`       |
|     | `{A,B}.js` | Same as `A.js B.js` |
|     | `{1..5}`   | Same as `1 2 3 4 5` |

|desc |asddfsd |
|____________|__________|

<h1>asadfaa</h1>

<style>
.green {
    color: green;
    font-weight:700;
    font-size: 30px;
}
</style>

<div class="green">
    Markdown css styles
</div>


| Expression | Description  |
| ---------- |--------------|

| a | b |
|---|---|


| command | description                                                       |
|---------|-------------------------------------------------------------------|
|  `ls`   | Lists all files and directories in the present working directory Lists all files and directories in the present working directoryLists all files and directories in the present working directoryLists all files and directories in the present working directory |
| `ls -R` | Lists files in sub-directories as well                            |
| `ls -a` | Lists hidden files as well                                        |


* `ls` - Lists all files and directories in the present working directory
* `ls -R` - Lists files in sub-directories as well
* `ls -a` - Lists hidden files as well