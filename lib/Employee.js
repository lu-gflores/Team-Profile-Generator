// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, workID, email) {
        this.name = name;
        this.workID = workID;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getWorkID() {
        return this.workID;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}
module.exports = Employee;