// function to generate markdown for README
function generateMarkdown(data) {
  const readmeData =
  `
# Project Title: ${data.title}
![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")
_____
## Description:
 ${data.description}
_____
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${data.installation}
_____
## Usage
${data.usage}
_____
## Contributing
${data.contributing}
_____
## Tests
${data.test}
_____
## Questions
If there are any questions, or if you would prefer more information concerning this app,
please contact the following person at their GitHub profile or email address below:

* [GitHub Profile](https://github.com/${data.github})
* ${data.email}
_____
## License
You can view more information concerning software licenses at the following link:

* [License](https://opensource.org/licenses/${data.license})
_____
## Badges
![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")
`
return readmeData;
}
module.exports = {generateMarkdown};
