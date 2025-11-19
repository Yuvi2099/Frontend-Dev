"use strict";
(function(){
const employees = [
{ name: "Amit", salary: "45000", years: "5" },
{ name: "Sara", salary: "38000", years: "2" },
{ name: "Kiran", salary: "52000", years: "7" }
];
const results = [];
for (let i = 0; i < employees.length; i++) {
try {
const emp = employees[i];
if (!emp || !('name' in emp) || !('salary' in emp) || !('years' in emp)) throw new Error('Missing property');
const salary = Number(emp.salary);
const years = Number(emp.years);
if (Number.isNaN(salary) || Number.isNaN(years)) throw new Error('Invalid number');
const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
const total = salary + bonus;
const out = `Name: ${emp.name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus.toFixed(2)} | Total: ${total.toFixed(2)}`;
console.log(out);
results.push({ name: emp.name, salary, years, bonus, total });
} catch (err) {
console.log(`Error processing employee at index ${i}:`, err.message);
}
}
console.log('Processed employees count:', results.length);
})();