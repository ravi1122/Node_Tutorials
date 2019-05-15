
class Employee{
    constructor(){
        console.log('Employee Constructor invoked');
    }
}

class Manager extends Employee{
    constructor(){
        super();//Call base constructor
        console.log('Manager Constructor invoked');
    }
}
new Manager();
