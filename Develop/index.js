



// TODO: Include packages needed for this application
const inquirer = require ("inquirer")
const fs = require ("fs")
const path = require ("path")
const generateMarkdown = require ("./utils/generateMarkdown")






// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Please write a description of your project?',
},
{
    
    type: 'input',
    name: 'contents',
    message: 'What is in your table of contents',
},
{
    
    type: 'input',
    name: 'installation',
    message: 'How would you install',
},
{
    type: 'input',
    name: 'usage',
    message: 'Enter the usage information of your project',
},
{
    type: 'input',
    name: 'contributing',
    message: 'Who are the contributors to your project',
},
{
    type: 'input',
    name: 'tests',
    message: 'How did you test your project',
},
{
    type: 'input',
    name: 'questions',
    message: 'What questions do you have about the project',
},
{
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
}  
];

// TODO: Create a function to write README file
//fs and path
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses)=>{
        writeToFile("readme.md",generateMarkdown({...inquirerResponses}))
    })
}

// Function call to initialize app
init();
