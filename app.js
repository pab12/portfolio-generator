const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name,github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('portfolio complete! Check out index.html to see the output!');
// });

inquirer
const promptUser = () => {
  return inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'what is your name?'
  },
  {type: 'input',
    name: 'github',
    message: 'Enter your Github Username'
  },
  {
    type: 'input',
    name: 'about',
    message: 'PRovide some information about yourself:'
  }
]);
};


const promptProject = portfolioData => {
  console.log(`
  =================
  Add a New Project
  =================
  `);
   // If there's no 'projects' array property, create one
if (!portfolioData.projects) {
  portfolioData.projects = [];
}
  return inquirer.prompt([
    {
      type: 'input',
      name:'name',
      message: 'What is the name of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)'
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['javaScript', 'HTML', 'CSS', 'ES6', 'jquery', 'Bootstrap','Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)'
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
    
  ]).then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject){
      return promptProject(portfolioData);
    } else {
      return portfolioData;
    }
  });
 
}


promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });


