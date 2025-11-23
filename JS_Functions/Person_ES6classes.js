function PersonConstructor(name) {
  this.name = name;
}

PersonConstructor.prototype.printName = function () {
  console.log(`Name: ${this.name}`);
};

function StudentConstructor(name, branch) {
  PersonConstructor.call(this, name);
  this.branch = branch;
}

StudentConstructor.prototype = Object.create(PersonConstructor.prototype);
StudentConstructor.prototype.constructor = StudentConstructor;

StudentConstructor.prototype.printBranch = function () {
  console.log(`Branch: ${this.branch}`);
};

const prototypeStudent = new StudentConstructor("Yuvraj", "IT");
prototypeStudent.printName();
prototypeStudent.printBranch();
