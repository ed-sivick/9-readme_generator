# README_generator
___ 
## Objective
Create a command-line application that dynamically generates a professional README file from a user's input using the **Inquirer** package. The application will be invoked with the following command: **node index.js**.
___
## generateMarkdown.js
The **generateMarkdown(data)** function utilizes a **const readmeData** variable to create the **generateMarkdown module**.  This is used as the template for the created newREADME file containing the user responses from the **Inquirer** npm package.  The module is exported and used in the index.js file.    
___
## index.js
The necessary node.js modules, **inquirer**, **util**, **fs**, and **generateMarkdown** are initially assigned to their respective const variables.  The **promisify function** allows a simpler use of **fs.writeFile**.  An array of question objects identifies the content of the **newReadme** and assigned to the const variable, questions. The **function init()** initializes the program, and the response is assigned to the **readmeData** const variable.  This is chained to the fs.writeFile which adds the readmeData to the "**newReadme**" file. **npm init** and **npm install** are typed on the integrated terminal to install the necessary packages/modules. **node index.js** is then typed to the terminal, and the program executes. 

___
## Summary
Below is a Summary output for the app using user-defined responses to create a **newReadme** file:

# Project Title: Good README Generator
![License](https://img.shields.io/badge/License-MIT-blue.svg "License Badge")
_____
## Description:
 This is a command-line app that dynamically generates a professional README from user input.
_____
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
(1) Type npm i (install), (2) Invoke the app by typing node index.js, (3) Provide answers at the prompts
_____
## Usage
App is used to create a quality README with information about the project
_____
## Contributing
ed-sivick
_____
## Tests
Enter your test information or procedures.
_____
## Questions
If there are any questions, or if you would prefer more information concerning this app,
please contact the following person at their GitHub profile or email address below:

* [GitHub Profile](https://github.com/ed-sivick)
* ed@sivick.net
_____
## License
You can view more information concerning software licenses at the following link:

* [License](https://opensource.org/licenses/MIT)
_____
## Badges
![License](https://img.shields.io/badge/License-MIT-blue.svg "License Badge")
___
## Application Links and Images  
**Links:**
Walkthrough Video (MP4): (https://drive.google.com/file/d/1fewA1GE0Cne1eKPY8fObZVR_X5hGL9aI/view?usp=sharing)

**Application Image Examples:** Hover the mouse over each image for a brief description.
<p align="left">
  <img src="utils/images/new_readme1.png" width="400" margin-bottom: 10px; title="image of newREADME file unrendered" alt="image of newREADME file unrendered">
  
  <img src="utils/images/new_readme2.png" width="400" align="right" title="image of newREADME file rendered" alt="image of newREADME file rendered">
  </p>

  <p align="left">
  <img src="utils/images/node_indexjs.png" width="400" margin-top: 10px; title="image of user responses from running node index.js" alt="image of user responses from running node index.js">