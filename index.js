// assigns const variables to node.js modules
const inquirer = require("inquirer");
const util = require("util");
const genMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
// promisify function allows use of chaining
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
  // questions to user using "inquirer", consisting of 4 keys
  {
    type: "input",
    message: "What is the Project Title for the App?",
    name: "title",
    default: "Good README Generator"
  },

  {
    type: "input",
    message: "Please provide a description of the project.",
    name: "description",
    default: "This is a command-line app that dynamically generates a professional README from user input."
  },

  {
    type: "input",
    message: "What are the required installation steps for your project?",
    name: "installation",
    default: "(1) Type npm i (install), (2) Invoke the app by typing node index.js, (3) Provide answers at the prompts"
  },

  {
    type: "input",
    message: "How is this project app used?",
    name: "usage",
    default: "App is used to create a quality README with information about the project"
  },

  {
    type: "list",
    message: "What is the type of software license for his app?  Use arrow keys, then select Enter.",
    name: "license",
    choices: [
      "Apache",
      "MIT",
      "ISC",
    ]
  },

  {
    type: "input",
    message: "What are the git hub user names of all app contributors?",
    name: "contributing",
    default: "ed-sivick"
  },

  {
    type: "input",
    message: "What tests have you written for this app?",
    name: "test",
    default: "Enter your test information or procedures."
  },

  {
    type: "input",
    message: "What is your GitHub user name?",
    name: "github",
    default: "ed-sivick"
  },

  {
    type: "input",
    message: "Enter your email if you have additional questions.",
    name: "email",
    default: "ed@sivick.net"
  },

];

//function to initialize program
function init() {
  inquirer.prompt(questions).then(function (response) {
      return response;
// assign readmeData const variable to questions response 
    }).then(function (response) {
      const readmeData = genMarkdown.generateMarkdown(response);
      return readmeData;
// use fs.writeFile to create newReadme using readmeData
    }).then(function (readmeData) {
      fs.writeFile("newReadme.md", readmeData, function (error) {
        if (error) {
          return console.log(error);
        }
        console.log("README created!");
      });
    })
}
// function call to initialize program
init();