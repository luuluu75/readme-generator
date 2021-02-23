const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

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

function writeToFile(generateMarkdown, userResponses) {
    return fs.writeFileSync(path.join(process.cwd(),generateMarkdown), userResponses);
}
    
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("Your readMe is being generated");
        writeToFile("ReadMe.md", generateMarkdown({ ...inquirerResponses}));
    });    
    }

init(); 
