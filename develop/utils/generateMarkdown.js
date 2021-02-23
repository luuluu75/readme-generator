function renderBadge(license){
   return `![Github License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

function renderLink(license){
   return `\n* [License](#license)\n`;
}

function generateMarkdown(userResponses) {

   return `${userResponses.title}
   ${renderBadge(userResponses.license)}
   ${renderLink(userResponses.license)}


   ## CONTENTS

   * [Description](#description)
   
   * [Installation](#installation)

   * [Technologies](#technologies) 

   
   ## DESCRIPTION 

   *The what, why, and how:* 

   ${userResponses.description}
   
   
   ## Installation
   
   *Steps required to install project and how to get the development environment running:*
   
   ${userResponses.installation}

   
   ## Technologies
   
   *Steps required to install project and how to get the development environment running:*
   
   ${userResponses.technologies}

   ## Dev Portfolio

   * My GIT user name is ${userResponses.username}
   * My reposistory is located ${userResponses.repo}`
 };
 
 module.exports = generateMarkdown;