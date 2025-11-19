"use strict";
(function(){
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];
const report = [];
for (let i = 0; i < apiData.length; i++) {
const raw = apiData[i];
const asNumber = Number(raw);
const asBoolean = Boolean(raw);
const asString = String(raw);
const entry = { index: i, raw, asNumber, asBoolean, asString };
if (typeof asNumber === 'number' && !Number.isNaN(asNumber) && raw !== null && raw !== undefined && String(raw).trim() !== '' && /^[+-]?\d+(?:\.\d+)?$/.test(String(raw))) {
validNumbers.push(asNumber);
report.push({ ...entry, valid: true });
} else {
invalidNumbers.push({ index: i, raw });
report.push({ ...entry, valid: false });
}
}
console.log('--- Dynamic Data Parser Report ---');
for (let i = 0; i < report.length; i++) {
const r = report[i];
if (r.valid) {
console.log(`Index ${r.index}: raw=${r.raw} | Number=${r.asNumber} | Boolean=${r.asBoolean} | String='${r.asString}'`);
} else {
console.log(`Index ${r.index}: raw=${r.raw} => INVALID NUMBER`);
}
}
console.log('Valid numeric array:', validNumbers);
console.log('Invalid entries:', invalidNumbers);
})();