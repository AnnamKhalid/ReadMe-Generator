
// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.Title}

    ## Description 
    ${data.description}

    ## Table of Contents (Optional) 
    ${data.table}

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
    GitHub: ${data.username}
    Email; ${data.email}

  `;
  }
  
  module.exports = generateMarkdown;
  