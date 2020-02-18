// Use the Inquirer npm package to prompt the user for their email, id, and specific information based on their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.
const inquirer = require("inquirer");

startProgram();

async function startProgram() {
let {email, id } = await promptForInfo()
console.log(data);
}
async function promptForInfo() {
    return inquirer.prompt([
        {
            message: "What is your email?",
            name: "name",
            type: "input"
        },
        {
            message: "What is your ID?",
            name: "id",
            type: "input"
        },
    ])
}

module.exports = promptforInfo;