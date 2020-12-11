// file system requirement 
const fs = require("fs")
// inquirer requirement 
const inquirer = require("inquirer");

// array of questions for user
const questions = () => { 
    return inquirer
      .prompt([
          {
            type: "input",
            name: "title",
            message: "What is the title of your project? (Required)",
            // check that user has answered
            validate: (titleInput) => {
                if (titleInput) {
                return true;
                } else {
                console.log("You need to enter a project title!");
                return false;
                }
            },
          },
          {
            type: "input",
            name: "description",
            message: "Provide a description of the project (Required)",
            validate: (descriptionInput) => {
                if (descriptionInput) {
                return true;
                } else {
                console.log("You need to enter a project description!");
                return false;
                }
            },
          },
          {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project? (Required)",
            validate: (installationInput) => {
                if (installationInput) {
                return true;
                } else {
                console.log("You need to enter installation instructions for your project!");
                return false;
                }
            }, 
          },
          {
            type: "input",
            name: "useage",
            message: "Provide examples on how to use your project: (Required)",
            validate: (usageInput) => {
                if (usageInput) {
                return true;
                } else {
                console.log("You need to enter project useage instructions!");
                return false;
                }
            },
          },
          {
            type: "confirm",
            name: "confirmCredits",
            message: "Do you have any collaborators on this project?",
            default: false,
          },
          {
            type: "input",
            name: "credits",
            message: "List your collaborators, if any, with links to their GitHub profiles:",
            when: ({ confirmCredits }) => confirmCredits,
          },
          {
            type: "confirm",
            name: "confirmFeatures",
            message: "Would you like to add a feature section?",
            default: false,
          },
          {
            type: "input",
            name: "feature",
            message: "List your project's features:",
            when: ({ confirmFeatures }) => confirmFeatures,
          },
          {
            type: "confirm",
            name: "confirmBadgesPlaceholder",
            message: "Do you want to select a badge?",
            default: false,
          },
          {
            // change to access shields.io
            type: "confirm",
            name: "badgesPlaceholder",
            message: "Choose a badge",
            default: true,
            when: ({ confirmBadgesPlaceholder }) => confirmBadgesPlaceholder,
          },
          {
            type: "confirm",
            name: "confirmContributing",
            message: "Woud you like to provide guidelines on how to contribute to your project?",
            default: false,
          },
          {
            // change to access contributor covenant?
            type: "input",
            name: "confirmContribute",
            message: "What are your guidelines on how to contribute to your project?",
            when: ({ confirmContributing }) => confirmContributing,
          },
          {
            type: "confirm",
            name: "confirmTests",
            message: "Would you like to provide an example(s) on how to test your project?",
            default: false,
          },
          {
            type: "input",
            name: "tests",
            message: "Provide an example on how to test your project:",
            when: ({ confirmTests }) => confirmTests,
          },
          {
            // change to access choosealicense.com?
            type: "input",
            name: "license",
            message: "Enter your open source license: (Required)",
            validate: (licenseInput) => {
                if (licenseInput) {
                return true;
                } else {
                console.log("You need to enter a project license!");
                return false;
                }
            },
          },
          {
            type: "confirm", 
            name: "confirmTableOfContents",
            message: "Would you like to add a table of contents?",
            default: false,
          },
          {
            type: "checkbox",
            name: "tableOfContents",
            message: "Select your table of contents:",
            choices: [
                "Installation",
                "Usage",
                "Credits",
                "Features",
                "Badges", 
                "Contributing", 
                "Tests",
                "License", 
            ],
            when: ({ confirmTableOfContents }) => confirmTableOfContents,
          },
        ]);

};

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

// call questions
questions()
// display answers in console
.then((answers) => {
    console.log(answers);
})

            // type: "",
            // name: "",
            // message: "",