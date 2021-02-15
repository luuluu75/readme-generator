const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Inquirer prompts for userResponses
const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
    },
    {
        type: 'input',
        message: "Please enter your Github user name.",
        name: 'username',
        },
    {
        type: 'input',
        message: "Enter your github repository path",
        name: 'repo',
    },
    {
        type: 'input',
        message: "What steps should I follow to install and run the application",
        name: 'installation',
    },
    {
        type: 'input',
        message: "What technologies did you use?",
        name: 'technology'
    },
    {
        type: 'input',
        message: "How do I contribute to the project?",
        name: 'contribute'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License',],
        name: 'license'
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Your README file has been generated sucessfully!")
    });
}

const writeFileAsync = util.promisify(writeToFile);


// Main function
async function init() {
    try {

        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
    
        // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        console.log("Generating your README next...")
        const markdown = generateMarkdown(userResponses);
        console.log(markdown);
    
        // Write markdown to file
        await writeFileAsync('SampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

init();