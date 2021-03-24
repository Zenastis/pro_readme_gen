



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
    name: 'name',
    message: 'What is your name?',
},
// {
    
//     type: 'input',
//     name: 'name',
//     message: 'What is your name?',
// }    
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
