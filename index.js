// Download Inquirer@v8.2.4, calls file systems as well
const inquirer = require("inquirer");
const fs = require("fs");
// Creates variable that will be used to get the generateMarkdown data.
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Include packages needed for this application

const questions = [
  // Title of the Project
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  // GitHub Username
  {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username.",
  },
  // Email Question
  {
    type: "input",
    name: "email",
    message: "Enter an email where people can easily reach out to you.",
  },
  // Project description
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project.",
  },
  // Installation Instructions
  {
    type: "input",
    name: "installation",
    message: "Explain how to install the project if applicable.",
  },
  // Usage instructions
  {
    type: "input",
    name: "usage",
    message: "Please provide usage instructions",
  },
  {
    // Contribution section.
    type: "input",
    name: "contribution",
    message: "Who contributed to your project?",
  },
  // License list to choose from.
  {
    type: "list",
    name: "license",
    message: "What license are you going to need for your project?",
    choices: [
      "Apache 2.0",
      "MIT",
      "Mozzila Public License 2.0",
      "Eclipse Public License 1.0",
      "GPL 3.0",
      "None",
    ],
  },
];

// This is the function that creates the ReadMe file.
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw new Error(err);
    console.log(
      "Success! Your README is now generated! Check the readme.md file inside the 'made-it' folder to view it."
    );
  });
}

// This is the function that initializes the app.
function init() {
  console.log(`
  Create your next ReadMe! 
  Answer the following questions/prompts to provide information for the README.
  `);

  inquirer.prompt(questions).then((data) => {
    writeToFile("./made-it/readme.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
