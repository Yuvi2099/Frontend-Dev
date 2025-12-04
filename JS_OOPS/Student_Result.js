class Student {
constructor(name, marks = []) {
this.name = name;
this.marks = marks;
}


calculateAverage() {
if (!this.marks.length) return 0;
const sum = this.marks.reduce((a, b) => a + b, 0);
return sum / this.marks.length;
}


getGrade() {
const avg = this.calculateAverage();
if (avg >= 85) return 'A';
if (avg >= 70) return 'B';
if (avg >= 50) return 'C';
return 'F';
}
}


const s1 = new Student('Alice', [90, 80, 95]);
const s2 = new Student('Bob', [70, 60, 65]);
const s3 = new Student('Charlie', [40, 45, 55]);


console.log('\nQ2 — Students:');
[s1, s2, s3].forEach(s => console.log(`${s.name}: avg=${s.calculateAverage().toFixed(2)}, grade=${s.getGrade()}`));

