function Person(name) {
  this.name = name;
}

Person.prototype.showName = function () {
  console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
  console.log(`Branch: ${this.branch}`);
};

Student.prototype.showDetails = function () {
  this.showName();
  this.showBranch();
};

const studentOne = new Student("Yuvraj", "Computer Science");
studentOne.showName();
studentOne.showBranch();
studentOne.showDetails();
