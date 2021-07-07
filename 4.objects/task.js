function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

const student1 = new Student("Tony", "male", 37);
const student2 = new Student("Buzz", "female", 35);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

let arrForMark = []

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    arrForMark.push(mark);
    this.marks = arrForMark;
  } else {
    arrForMark.push(mark);
  }
}

Student.prototype.addMarks = function (...mark)  {
  let arrForManyMarks = [];
  this.marks = arrForManyMarks;
  arrForManyMarks.push(...mark);
}

Student.prototype.getAverage = function() {
    let count =  0
    this.marks.forEach(elem => console.log(count += elem));
    return count / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  this.excluded = reason
  delete this.subject;
  delete this.marks;
}

