# Automated E2E tests using Cypress.io of a JavaScript based web application ![GitHub](https://img.shields.io/github/license/mujjazi/cypress_jenkins) ![E2E on Chrome](https://github.com/mujjazi/Cypress_Jenkins/workflows/E2E%20on%20Chrome/badge.svg) 

<div align="center">
  <img src="https://cdn.deliciousbrains.com/content/uploads/2018/09/28135025/db-End2EndTestingCypress-1540x748.jpg"><br>
</div>

This is an open source project for the Web Automation project at APIMatic for our web application http://apimatic.io/.

- [Contributing](#contributing)
- [Building, Testing and Other Useful Commands](#building-testing-and-other-useful-commands)
- [Writing the first spec](#writing-the-first-spec)

## Contributing

If you don't have git on your machine, [install it]( https://help.github.com/articles/set-up-git/).

## Fork this repository

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

## Clone the repository


Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the clone button and then click the *copy to clipboard* icon.

Open a terminal and run the following git command:

```
git clone "url you just copied"
```
where "url you just copied" (without the quotation marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.


For example:
```
git clone https://github.com/mujjazi/cypress_automation.git
```
where `this-is-you` is your GitHub username. Here you're copying the contents of the first-contributions repository on GitHub to your computer.

## Create a branch

Change to the repository directory on your computer (if you are not already there):

```
cd first-contributions
```
Now create a branch using the `git checkout` command:
```
git checkout -b <add-your-new-branch-name>
```

For example:
```
git checkout -b add-mujtaba-mehdi
```
(The name of the branch does not need to have the word *add* in it, but it's a reasonable thing to include because the purpose of this branch is to add your name to a list.)

## Make necessary changes and commit those changes

If you go to the project directory and execute the command `git status`, you'll see there are changes.


Add those changes to the branch you just created using the `git add` command:

```
git add .
```

Now commit those changes using the `git commit` command:
```
git commit -m "Add <your-name>"
```
replacing `<your-name>` with your name.

## Push changes to GitHub

Push your changes using the command `git push`:
```
git push origin <add-your-branch-name>
```
replacing `<add-your-branch-name>` with the name of the branch you created earlier.

## Submit your changes for review

If you go to your repository on GitHub, you'll see a  `Compare & pull request` button. Click on that button.

Now submit the pull request.

Soon I'll be merging all your changes into the master branch of this project. You will get a notification email once the changes have been merged.


## Building, Running and Other Useful Commands

Below is a list of commands you will probably find useful during local development.

### Follow the guide here to install and write tests using Cypress from [here](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements) 

```bash
# Installs dependencies for the project. You need to run this before you start any work.
# You also need to run this everytime the package.json or package-lock.json files change.

npm install cypress --save-dev

# If you used npm to install, Cypress has now been installed to your ./node_modules directory, with its binary executable accessible from ./node_modules/.bin.

# Now you can open Cypress from your project root one of the following ways:
# The long way with the full path

./node_modules/.bin/cypress open

```

## Writing the first spec
Follow the below guide to create your first test case to start understanding the basic directory structure and syntax of Cypress from [here](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Write-your-first-test)



### Author
Mujtaba Mehdi,
Feel free to connect on LinkedIn to discuss collaboration ideas.
[LinkedIn](https://www.linkedin.com/in/mujtabamehdi9)
