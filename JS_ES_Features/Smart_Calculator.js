"use strict";
(function(){
class InvalidOperationError extends Error {}
const operations = ["add", "divide", "power", "root", "subtract"];
function calculate(op, a, b) {
switch (op) {
case 'add': return a + b;
case 'subtract': return a - b;
case 'divide':
if (b === 0) throw new Error('DivideByZero');
return a / b;
case 'power': return Math.pow(a, b);
case 'root':
if (a < 0) throw new Error('RootOfNegative');
return Math.pow(a, 1 / b);
default:
throw new InvalidOperationError('InvalidOperation');
}
}
const num1 = 25, num2 = 0;
for (let i = 0; i < operations.length; i++) {
const op = operations[i];
try {
const result = calculate(op, num1, num2);
console.log(`Operation: ${op} | Result: ${result}`);
} catch (err) {
console.log(`Operation: ${op} | Error: ${err.message}`);
}
}
})();