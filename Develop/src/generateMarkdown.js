// // file system requirement 
// const fs = require("fs")

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.descrition}
  
  ${generateTableOfContents(data.tableOfContents)}

  ## Installation

  ${data.installation}

  ## Useage

  ${data.useage}

  ${generateCredits(data.credits)}

  ${generateFeatures(data.features)}

  ${generateBadges(data.badges)}

  ${generateContributing(data.contribute)}

  ${generateTests(data.tests)}

  ## License 
  ${data.license}

  `;
}


const generateTableOfContents = tableOfContentsText => {
  if (!tableOfContentsText) {
    return '';
  }

  return `
    ## Table of Contents 

    ${tableOfContentsText}
  `
};

const generateCredits = creditsText => {
  if (!creditsText) {
    return ''
  }

  return `
    ${creditsText}
  `
};

const generateFeatures = featuresText => {
  if (!featuresText) {
    return ''
  }

  return `
    ${featuresText}
  `
};

const generateBadges = badgesText => {
  if (!badgesText) {
    return ''
  }

  return `
    ${badgesText}
  `
};

const generateContributing = contributingText => {
  if (!contributingText) {
    return ''
  }

  return `
    ${contributingText}
  `
};

const generateTests = testsText => {
  if (!testsText) {
    return ''
  }

  return `
    ${testsText}
  `
};

module.exports = generateMarkdown;
