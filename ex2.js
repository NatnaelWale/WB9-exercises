"use strict";

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(){return this.firstName + " " + this.lastName}
}

let p = new Person("Matt", "Christenson")

console.log(p.getFullName())


class Employee extends Person{
    constructor(firstName, lastName, id, jobTitle, payRate){
        super(firstName, lastName);
        this.id = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;

    }

    getGrossPay(hoursWorked){
        return hoursWorked * this.payRate;
    }

}


let employee1 = new Employee("Natnael", "Wale", 3, "Web Developer", 200);

console.log(employee1.getFullName())
console.log(employee1.id)
console.log(employee1.getGrossPay(80))