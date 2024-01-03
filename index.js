const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [
    { 
        type: 'Input',
        name: 'title',
        message: 'What is the titile of your project?',
    }, 
    { 
        type: 'Input',
        name: 'description',
        message: 'Breifly describe your project:',
    },
    { 
        type: 'Input',
        name: 'table',
        message: 'If your README is long, add a table of contents to make it easy for users to find what they need:',
    },
    { 
        type: 'Input',
        name: 'installation',
        message: 'What are the steps required to install your project? (Provide a step-by-step description of how to get the development environment running.)',
    },
    { 
        type: 'Input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed:',
    },
    { 
        type: 'Input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles. List any Third-parts assets, and any tutorials you may have followed:',
    },
    { 
        type: 'Input',
        name: 'license',
        message: 'State your chosen license:',
    },
    { 
        type: 'Input',
        name: 'contributing',
        message: 'Include guidelines for how others can contibutre to your project:',
    },
    { 
        type: 'Input',
        name: 'tests',
        message: 'Write tests for your application, and provide examples on how to run them:',
    },
];

// function to write README file
const writeToFile = (fileName, data) => {
    const error = fs.writeFileSync(fileName, data);
    if (error) {
        console.log(`${fileName} successfully generated`);
    } else {
        console.error(`Error with ${fileName}`, error);
    }
    }

// function to initialize program
const init = () => {
    inquirer.prompt(questions).then((answers) => {
        const content = generateMarkdown(answers);
        writeToFile("ReadMe.md", content);
    });
};

// function call to initialize program
init();
