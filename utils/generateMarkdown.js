// license information
// https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

// function that returns a license badge based on which license is passed in
// If there is no license,  an empty string is returned
// ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 2', 'BSD 3', 'Unlicense', 'WTFPL']
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'APACHE 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GPL 3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'BSD 2':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
      break;
    case 'BSD 3':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
    case 'WTFPL':
      return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';
      break;
    default:
      return '';
      break;
  }
}

// function that returns the license link
// If there is no license,  an empty string is returned
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT'
      break;
    case 'APACHE 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'GPL 3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'BSD 2':
      return 'https://opensource.org/licenses/BSD-2-Clause';
      break;
    case 'BSD 3':
      return 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'Unlicense':
      return 'http://unlicense.org/';
      break;
    case 'WTFPL':
      return 'http://www.wtfpl.net/about/';
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

Information about the ${data.license} can be found at: ${renderLicenseLink(data.license)}
You are licensing this product in the year ${data.year}.

`;
}

module.exports = generateMarkdown;
