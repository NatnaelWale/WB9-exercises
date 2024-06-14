"use strict";

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  getIntro() {
    return "My name is " + this.getFullName() + "!";
  }
}

class Student extends Person {
  constructor(firstName, lastName, grade, major) {
    super(firstName, lastName);
    this.grade = grade;
    this.major = major;
  }

  getGrade(){
    return this.grade;
  }

  getMajor(){
    return this.major;
  }
  // You can also use methods defined in the parent class
  // from the extended class
  getIntro() {
    return (
      "My name is " +
      this.getFullName() +
      " and I am a " +
      this.grade +
      " and I study " +
      this.major +
      "!"
    );
  }
}

let s = new Student("Jhon", "Doe", "B-", "Computer Science")

console.log(s.getFullName());
console.log(s.getGrade())


let p = new Person("Matt", "C");

console.log(p.getFullName())