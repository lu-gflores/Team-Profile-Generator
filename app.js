const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//contains employee objects
const teamArray = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const mainPrompt = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: "Enter team member's role: ",
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ]).then(function (answer) {
        if (answer.role === 'Manager') {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: "Enter a team member's name: ",
                        name: 'name',
                    },{
                        type: 'input',
                        message: "Enter team member's ID: ",
                        name: 'id'
            
                    }, {
                        type: 'input',
                        message: "Enter team member's email: ",
                        name: 'email',
                    }, {
                        type: 'input',
                        message: 'Enter your office number: ',
                        name: 'officeNumber',
                    }
                ]).then(function (data) {
                    const currManager = new Manager(data.name, data.id, data.email, data.officeNumber)
                    console.log(currManager);
                    teamArray.push(currManager);
                    addMoreMembers();
                })

        } else if (answer.role === 'Engineer') {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: "Enter a team member's name: ",
                        name: 'name',
                    },{
                        type: 'input',
                        message: "Enter team member's ID: ",
                        name: 'id'
            
                    }, {
                        type: 'input',
                        message: "Enter team member's email: ",
                        name: 'email',
                    }, {
                        type: 'input',
                        message: 'Enter your github username: ',
                        name: 'github',
                    }
                ]).then(function (data) {
                    const currEngineer = new Engineer(data.name, data.id, data.email, data.github)
                    console.log(currEngineer);
                    teamArray.push(currEngineer);
                    addMoreMembers();
                })

        } else {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: "Enter a team member's name: ",
                        name: 'name',
                    },{
                        type: 'input',
                        message: "Enter team member's ID: ",
                        name: 'id'
            
                    }, {
                        type: 'input',
                        message: "Enter team member's email: ",
                        name: 'email',
                    }, {
                        type: 'input',
                        message: 'Enter your school name: ',
                        name: 'school',
                    }
                ]).then(function (data) {
                    const currIntern = new Intern(data.name, data.id, data.email, data.school)
                    console.log(currIntern);
                    teamArray.push(currIntern);
                    addMoreMembers();
                })
        }

    });

}
mainPrompt();

const addMoreMembers = () => {
    inquirer.prompt([
        {
            type:'confirm',
            message: 'Add more members?',
            name: 'addMember'
        }
    ]).then(function(answer) {
            if(answer.addMember === true) {
                mainPrompt();
            }
            else {
                renderHTML();
            }
    }) 
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!


const renderHTML = () => {
    const header = `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>My Team</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
            <script src="https://kit.fontawesome.com/c502137733.js"></script>
        </head>

        <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron mb-3 team-heading">
                        <h1 class="text-center">My Team</h1>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="team-area col-12 d-flex justify-content-center">
                        {{ team }}
                    </div>
                </div>
            </div>
        </body>

        </html>
        `

}


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
