"use strict";

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }
  getAnnualSalary() {
    return this.salary * 12;
  }
  applyBonus(percent) {
    this.salary = this.salary * (1 + percent / 100);
  }
}

const employees = [
  new Employee(1, "A", "IT", 30000),
  new Employee(2, "B", "HR", 40000),
  new Employee(3, "C", "Sales", 35000),
  new Employee(4, "D", "IT", 45000),
  new Employee(5, "E", "Ops", 38000)
];

const total = employees.reduce((acc, e) => acc + e.getAnnualSalary(), 0);
console.log(total);
