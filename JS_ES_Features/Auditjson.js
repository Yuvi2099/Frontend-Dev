"use strict";
(function(){
const rawData = [
'{"user":"Alex","age":25}',
'{"id":2}',
'{invalid}',
'{"user":"Mina","age":"22"}'
];
const clean = [];
for (let i = 0; i < rawData.length; i++) {
try {
const parsed = JSON.parse(rawData[i]);
if (!('user' in parsed) || !('age' in parsed)) throw new Error('MissingKey');
parsed.age = Number(parsed.age);
if (Number.isNaN(parsed.age)) throw new Error('InvalidAge');
if (parsed.age < 18) continue;
clean.push(parsed);
} catch (err) {
console.log(`Error parsing line ${i}:`, err.message);
}
}
console.log('Clean entries:', clean);
})();