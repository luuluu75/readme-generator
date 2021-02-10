// description, 
// installation instructions, 
// usage information, 
// contribution guidelines, 
// test instructions

function generateMarkdown(projectInfo) {

   const markdown = `
   #${projectInfo.title}
   #${projectInfo.userName}
   #${projectInfo.description}
   #${projectInfo.installation}
   #${projectInfo.usage}
   #${projectInfo.license}
   #${projectInfo.contributing}
   #${projectInfo.tests}`;

   return markdown;
}


module.exports = generateMarkdown