// // In addition to Employee's properties and methods, Intern will also have:
// // school
// // getSchool()
// // getRole() // Overridden to return 'Intern'

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, title, school) {
    super (name, id, title)
    this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;