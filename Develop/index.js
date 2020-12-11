// file system requirement 
const fs = require("fs")
// inquirer requirement 
const inquirer = require("inquirer");

// array of questions for user
// array of questions for user
const questions = () => { 
    return inquirer
      .prompt([
          {
            type: "input",
            name: "name",
            message: "What is your name?"
          }
        ])

};

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

questions()