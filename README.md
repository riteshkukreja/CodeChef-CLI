# CodeChef-CLI
A simple Command Line Interface to fetch contest details from CodeChef Website.

## Installation
- Install [NodeJS](https://nodejs.org/en/) for your OS
- Go to `CodeChef NodeJS` directory and type `npm install` in terminal to install all the dependencies for the project.

## Running the application
### Windows OS
- Copy `codechef.bat` file to either **System32** directory or add the path of `codechef.bat` to your **environment variables**.
- Open CMD and type `codechef` to test the proper working of project

### Ubuntu
- Copy `codechef` file to either **/usr/bin** directory or add the path of `codechef` to **~/.bashrc** file.
- Open terminal and type `codechef` to test the proper working of project

## Commands
### Fetch contests
```
$ codechef
```

### Fetch problems in a contest
```
$ codechef <CONTEST-CODE>
```

### Fetch problem details
```
$ codechef <CONTEST-CODE> <PROBLEM-CODE>
```

