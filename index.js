// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// importing the generateMarkdown function from another file
const generate = require('./utils/generateMarkdown.js')
// array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: "What is your project's name?",
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a short description of your project.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What does the user need to know about contributing to the repo?',
        },
        {
            type: 'list',
            message: 'What kind of license should your project have?',
            name: 'license',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 2', 'BSD 3', 'Unlicense'],
        },
        {
            type: 'input',
            name: 'year',
            message: 'The year you want on your license notice:',
        },
        {
            type: 'input',
            name: 'realname',
            message: 'Please type in the name you want on the license notice (first name and last name):',
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be run to install dependencies?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests?',
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
    ]);
};

const init = () => {
    questions()
      // Using writeFileSync method to use promises
      .then((answers) => fs.writeFileSync('README.md', generate(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };
  

// Function call to initialize app
init();