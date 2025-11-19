"use strict";
(function(){
function generate(limit) {
const lines = [];
for (let i = 1; i <= limit; i++) {
let row = '';
for (let j = 0; j < i; j++) row += (j === 0 ? '*' : ' *');
lines.push(row);
}
return lines;
}
const defaultLimit = 5;
console.log('Pyramid default:');
console.log(generate(defaultLimit).join('\n'));
console.log('Pyramid with var instead of let observation:');
(function(){
var limit = 4;
for (var i = 1; i <= limit; i++) {
var row = '';
for (var j = 0; j < i; j++) row += (j === 0 ? '*' : ' *');
console.log(row);
}
})();
})();