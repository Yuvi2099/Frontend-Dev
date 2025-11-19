"use strict";
(function(){
const transactions = [
{ id: 1, amount: 2000 },
{ id: 2, amount: -500 },
{ id: 3 },
null
];
const valid = [];
const invalid = [];
for (let i = 0; i < transactions.length; i++) {
try {
const t = transactions[i];
if (t === null) throw { type: 'NullEntry', message: 'Transaction is null', index: i };
if (typeof t !== 'object') throw { type: 'InvalidType', message: 'Not an object', index: i };
if (!('id' in t) || !('amount' in t)) throw { type: 'MissingField', message: 'Missing id or amount', index: i };
if (typeof t.amount !== 'number') throw { type: 'InvalidAmountType', message: 'Amount not a number', index: i };
if (t.amount < 0) throw { type: 'NegativeAmount', message: 'Amount is negative', index: i, id: t.id };
valid.push(t);
console.log(`Transaction ${t.id} OK: amount=${t.amount}`);
} catch (err) {
invalid.push(Object.assign({ originalIndex: i }, err));
console.log('Transaction error at index', i, '-', err.type || 'Error', '-', err.message || err);
}
}
console.log('Valid transactions:', valid.length);
console.log('Invalid transactions:', invalid.length);
console.log('Invalid details:', invalid);
debugger;
})();