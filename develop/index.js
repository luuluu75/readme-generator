  
const inquirer = require("inquirer");
const axios = require("axios")
const fs = require("fs")
// const api = require("./utils/api")
const generateMarkDown = require("./utils/generateMarkdown")

//Questions Array for README input
const questions = [
  {
    name: 'title',
    message: 'What is the name of your project?',
  },
  {
    name: 'userName',
    message: 'What is your Github Username.',
  },
  {
    name: 'description',
    message: 'What is your project about? What does it do? What are you hoping to accomplish with it?',
  },
  {
    name: 'installation',
    message: 'Describe the installation process for your project. List any modules that will need to be installed for it to run.',
  },
  {
    name: 'usage',
    message: 'Provide instructions for the usage of your project. Include pictures as needed.',
  },
  {
    name: 'license',
    message: 'Describe what your project may and may not be used for. Include any special permissions that must be sought.',
  },
  {
    name: 'contributing',
    message: 'If you wish for others to build on your project, include instructions on accessing the project and guidelines for contribution.',
  },
  {
    name: 'tests',
    message: 'What kind of tests did you run?',
  },
]



function writeToFile(fileName, answers, data) {
 const markDown = generateMarkDown({...answers, ...data})
  fs.writeFile(fileName, markDown, function (err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
}

//init will trigger the inquirer function
async function init() {
  const answers = await inquirer.prompt(questions)
    console.info('Answer:', answers);
    // const data = await api.getUser(answers.userName)
    const data={}
    console.log (data)
    writeToFile("answerData.md", answers, data)
}



init();