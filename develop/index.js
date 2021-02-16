const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Internal modules
const generateMarkdown = require('./utils/generateMarkdown.js');

// Inquirer prompts for userResponses
const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        default: 'Project Title',
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        default: 'Project Description',
    },
    {
        type: 'input',
        message: "If applicable, describe the steps required to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "What technologies or software did you use?",
        name: 'technologies'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License',],
        name: 'license'
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',

    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
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