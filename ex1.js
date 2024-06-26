"use strict";

class Employee {
  constructor(id, firstName, lastName, jobTitle, payRate) {
    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
  }
    getFullName()
    {
        return this.firstName + " " + this.lastName;
    }

    promote(newJobTitle, newPayRate){
        this.jobTitle = newJobTitle;
        this.payRate = newPayRate;
    }

    getIntro() {
      let intro =
      "Hi! I'm " + this.getFullName() + " and I am a " +
      this.jobTitle;
      return intro;
      }
}


// let employee1 = new Employee(1, "Ian", "Auston", "Graphic Art", 42.5);

// console.log(`Employee ${employee1.firstName} created`)

let employee1 = new Employee(
    1, "Ian", "Auston", "Graphic Artist", 42.5);
console.log(`Employee ${employee1.getFullName()} created`);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is ${employee1.payRate}`)

console.log("--------------")


employee1.promote("Sr Graphic Artist", 65);

console.log(`Employee ${employee1.getFullName()} created`);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is ${employee1.payRate}`)

console.log("--------------")

let intro = employee1.getIntro();
console.log(intro);