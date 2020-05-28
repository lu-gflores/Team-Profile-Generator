// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, role, workID, email, github) {
        this.name = name;
        this.role = role;
        this.workID = workID;
        this.email = email;
        this.github = github;
    }
    getName() {
        return this.name;
    }
    getRole() {
        return this.role;
    }
    getWorkID() {
        return this.workID;
    }
    getEmail() {
        return this.email;
    }
    getGitHub() {
        return this.github;
    }
}
module.exports = Employee;