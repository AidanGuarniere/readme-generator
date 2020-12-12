// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${generateBadges(data.badges)}

  ## Description

  ${data.descrition}
  
  ${generateTableOfContents(data.tableOfContents)}

  ## Installation

  ${data.installation}

  ## Useage

  ${data.useage}

  ${generateCredits(data.credits)}

  ${generateFeatures(data.features)}

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
  ## Credits 
  
  ${creditsText}
  `
};

const generateFeatures = featuresText => {
  if (!featuresText) {
    return ''
  }

  return `
  ## Features

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
  ## Contributions 
  ${contributingText}
  `
};

const generateTests = testsText => {
  if (!testsText) {
    return ''
  }

  return `
  ## Tests

  ${testsText}
  `
};

module.exports = generateMarkdown;
