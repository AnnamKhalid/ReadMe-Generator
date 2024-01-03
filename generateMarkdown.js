
// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

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

  `;
  }
  
  module.exports = generateMarkdown;
  