// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeLabel = license.replace(" ", "&ensp;");
  return `[![Generic badge](https://img.shields.io/badge/License-${badgeLabel}-green.svg)](${renderLicenseLink(
    license
  )})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data)
  const {
    github,
    licenseChoice,
    confirmLiveLink,
    liveSiteLink,
    siteDemoLink,
    ...info
  } = data;

  return `
  # ${info.projectTitle}
  ## Table of Contents
  - [Description](#project-description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)
  ## Description
  ${info.description}
  ${renderLinkSection(liveSiteLink)}
  ${renderDemo(siteDemoLink)}
  ## Installation 
  ${info.installationInstructions}
  ## Usage 
  ${info.usageInstructions}
  ## Contribution
  ${info.contributionInstructions}
  ## License
  ${renderLicenseSection(licenseChoice)}
  ## Testing
  ${info.testInstructions}
  ## Questions
  Reach out to the repo owner, [${github}](https://github.com/${github}) at 
  ${info.questionsEmail}.`;
}

module.exports = generateMarkdown;
