
// function to generate markdown for README
function generateMarkdown(data) {

  let toc = `## Table of Contents\n`;
    if (data.installation) toc += `- [Installation](#installation)\n`;
    if (data.usage) toc += `- [Usage](#usage)\n`;
    if (data.credits) toc += `- [Credits](#credits)\n`;
    if (data.license) toc += `- [License](#license)\n`;
    if (data.contributing) toc += `- [Contributing](#contributing)\n`;
    if (data.tests) toc += `- [Tests](#tests)\n`;
    return `# ${data.title}

    ## Description 
    ${data.description}

    ${toc}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Credits
    ${data.credits}

    ## License
    ${data.license}

    ## How to Contribute
    ${data.contributing}

    ## Tests
    ${data.tests}

    ## Questions
    GitHub: [${data.username}](https://github.com/${data.username})
    Email: [${data.email}](mailto:${data.email})
  `;
  }
  
  module.exports = generateMarkdown;
  