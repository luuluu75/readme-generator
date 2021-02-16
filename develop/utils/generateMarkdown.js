function generateMarkdown(userResponses) {

   // Generate Table of Contents conditionally based on userResponses
   let content = `## Table of Contents`;
 
   if (userResponses.installation !== '') { content += `
   * [Installation](#installation)` };
 
   if (userResponses.usage !== '') { content += `
   * [Usage](#usage)` };
 
   if (userResponses.contributing !== '') { content += `
   * [Contributing](#contributing)` };
 
   if (userResponses.tests !== '') { content += `
   * [Tests](#tests)` };
 
 
   // Generate markdown for the top required portions of the README
   let draftMarkdown = 
   `# ${userResponses.title}
   ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
   
   Check out the badges hosted by [shields.io](https://shields.io/).
   
   
   ## Description 
   
   *The what, why, and how:* 
   
   ${userResponses.description}
   `
 
   // Add Table of Contents to markdown
   draftMarkdown += content;
  
   // Add License section since License is required to Table of Contents
   draftMarkdown += `
   * [License](#license)`;
   
 
   // Optional Installation section
   if (userResponses.installation !== '') {
   
   draftMarkdown +=
   `
   
   ## Installation
   
   *Steps required to install project and how to get the development environment running:*
   
   ${userResponses.installation}`
   };
   
 
   // Optional Usage section
   if (userResponses.technologies !== '') {
   
   draftMarkdown +=
   
   `
   
   ## Usage 
   
   *Instructions and examples for use:*
   
   ${userResponses.technologies}`
   };
   
 
 
   // License section is required
   draftMarkdown +=
   `
   
   ## License
   
   ${userResponses.license}
   `;
 
   // Return markdown
   return draftMarkdown;
   
 }
 
 module.exports = generateMarkdown;