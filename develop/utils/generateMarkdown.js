function generateMarkdown(userResponses) {

   // Generate Table of Contents conditionally based on userResponses
   let contentMenu = `## Table of Contents`;
 
   if (userResponses.installation !== '') { contentMenu += `
   * [Installation](#installation)` };
 
   if (userResponses.usage !== '') { contentMenu += `
   * [Usage](#installation)` };
 
   if (userResponses.contributing !== '') { contentMenu += `
   * [Contributing](#contribute)` };
 
 
 
   // Generate markdown for the top required portions of the README
   let draftMarkdown = 
   `# ${userResponses.title}
   ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
   
   Check out the badges hosted by [shields.io](https://shields.io/).
   
   
   ## Description 
   
   *The what, why, and how:* 
   
   ${userResponses.description}
   `
 
   // Add Table of Contents to markdown
   draftMarkdown += contentMenu;
  
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
   if (userResponses.usage !== '') {
   
   draftMarkdown +=
   
   `
   
   ## Usage
   
   ${userResponses.technology}`
   };
   
   
   // Optional Contributing section
   if (userResponses.contribute !== '') {
   `
   
   ## Contribute
   
   ${userResponses.contributing}`
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