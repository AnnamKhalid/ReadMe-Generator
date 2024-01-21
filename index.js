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
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'No License'],
    },
    { 
        type: 'Input',
        name: 'contributing',
        message: 'How can others contribute to your project?',
    },
    { 
        type: 'Input',
        name: 'tests',
        message: 'Write tests for your application, and provide examples on how to run them:',
    },
    { 
        type: 'Input',
        name: 'username',
        message: 'What is the link to your Github username?',
    },
    
    { 
        type: 'Input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// function to write README file
const writeToFile = (fileName, data) => {
    const content = generateMarkdown(data);
    const error = fs.writeFileSync(fileName, content);
    if (!error) {
        console.log(`${fileName} successfully generated`);
    } else {
        console.error(`Error with ${fileName}`, error);
    }
    }

// function to initialize program
const init = () => {
    inquirer.prompt(questions).then((answers) => {
        const content = generateMarkdown(answers);
        writeToFile("ReadMe1.md", answers);
    });
};

// function call to initialize program
init();
