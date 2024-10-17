# Programming Zaman Now: Learning Basic NodeJS 
An introductory guide to learning Node.js with [Programmer Zaman Now](https://youtu.be/b39Xqf5iyjo?si=jtFTJN7tRDDOfE1d), covering essential concepts such as asynchronous programming, modules, and building simple applications, ideal for beginners to get started with Node.js development.



## Update Node.js Version on Ubuntu 18.04
1.  Open the terminal (Ctrl+T).
2.  Remove the old version of Node.js:
    ```shell
    $ sudo apt remove nodejs
    ```
3.  Install the required dependencies:
    ```shell
    $ sudo apt-get update
    $ sudo apt install curl build-essential libssl-dev
    ```
4.  Install nvm package:
    ```shell
    $ url -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
    ```
5.  Check if nvm is installed:
    ```shell
    $ ls -a $HOME | grep .nvm
    ```
6.  Add nvm to your shell configuration file `.bashrc`:
    ```shell
    $ nano ~/.bashrc
    ```
7.  Add the following lines to the bottom of the file:
    ```shell
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
    ```

    Save (Ctrl+S) and exit (Ctrl+X).
8.  Reload the shell configuration:
    ```shell
    $ source ~/.bashrc 
    ```
9.  Check the nvm version:
    ```shell
    $ nvm --version
    ```
10. Install the latest version of Node.js using nvm:
    ```shell
    $ nvm install 20
    ```
11. Check Node.js version:
    ```shell
    $ node -v atau node --version
    ```

    If you get the following error:
    ```shell
    node: /lib/x86_64-linux-gnu/libc.so.6: version GLIBC_2.28' not found (required by node)
    ```

    This means Node.js (v20.18.0) requires glibc version 2.28 or higher.

    Three possible solutions:
    - **Downgrade Node.js Version** <br>
       - Try installing Node.js version 16: `$ nvm install 16`
       - Use Node.js version 16: `$ nvm use 16`
       - Check the version: `$ node -v`

    - **Use System Node.js** <br>
       - Remove Node.js installed via nvm:  `$ nvm deactivate`
       - Install Node.js from the official repositories:
         ```shell
         $ sudo apt update
         $ sudo apt install nodejs npm
         ```
       - Check the Node.js version:  `$ node -v`

    - **Upgrade Ubuntu** <br>
       If you need Node.js version 18 or 20, you will need to update glibc by upgrading your operating system to a newer version (e.g., Ubuntu 20.04 or 22.04):
       ```shell
       $ sudo do-release-upgrade
       ```
<br>
Reference:

[https://nodejs.org/en/download/package-manager](https://nodejs.org/en/download/package-manager)
