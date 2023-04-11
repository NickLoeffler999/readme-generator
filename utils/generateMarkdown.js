const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// This is the function that generates the markdown text for the README
function generateMarkdown(data) {
  const { username, license, ...info } = data;

  return `
  # ${info.title}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [License](#license)
  - [Testing](#testing)
  - [Questions](#questions)
  ## Description
  ${info.description}
  ## Installation 
  ${info.installation}
  ## Usage 
  ${info.usage}
  ## Contribution
  ${info.contribution}
  ## Testing
  ${info.testing}
  ## Questions
  If you have any questions, comments, or concerns, contact [${username}](https://github.com/${username}) at ${info.email}.`;
}

module.exports = generateMarkdown;
