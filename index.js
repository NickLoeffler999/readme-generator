// Download Inquirer@v8.2.4, calls file systems as well
const inquirer = require("inquirer");
const fs = require("fs");
// Creates
const generateMarkdown = require("./utils/generateMarkdown");

// ACTIVITY 20 REFERENCE FOR QUESTIONS END

// TODO: Include packages needed for this application

const questions = [
  // GitHub Username
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub username.",
  },
  // Email inside of Questions
  {
    type: "input",
    name: "questionsEmail",
    message: "Enter an email where people can easily reach out to you.",
  },
  {
    // Title of the Project
    type: "input",
    name: "projectTitle",
    message: "What is the title of your project?",
  },
  // Project description - input
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// This is the function that initializes the app.
function init() {
  console.log(`
  =================
  Create your next ReadMe! 
  Answer the following questions to provide information for your new ReadMe.
  =================
  `);

  inquirer.prompt(questions).then((readmeData) => {
    // console.log(readmeData);
    writeToFile("./dist/readme.md", generateMarkdown(readmeData));
  });
}

// Function call to initialize app
init();
