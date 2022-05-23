// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.projectTitle}

${data.description}

## Table of contents
* [usage](#Usage)
* [contribution](#Contributing)
* [license](#License)
* [install](#Install)
* [tests](#Tests)
* [username](#Username)
* [email](#Email)

## Usage

${data.usage}

## Contributing

${data.contribution}

## License

${data.license}

## Install

${data.install}

## Tests

${data.tests}

## Username

${data.username}

## Email

${data.email}

`;
}

module.exports = generateMarkdown;
