// license information
// https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
  
    default:
      return '';
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT'
      break;
  
    default:
      return '';
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.projectTitle}
${renderLicenseBadge(data.license)}

${data.description}

## Table of contents
* [usage](#Usage)
* [contribution](#Contributing)
* [install](#Install)
* [tests](#Tests)
* [username](#Username)
* [email](#Email)
* [license](#License)

## Usage

${data.usage}

## Contributing

${data.contribution}

## Install

${data.install}

## Tests

${data.tests}

## Username

${data.username}

## Email

${data.email}

## License

Information about the ${data.license} can be found at ${renderLicenseLink(data.license)}

`;
}

module.exports = generateMarkdown;
