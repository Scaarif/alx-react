import { Seq } from 'immutable';

export default function printBestStudents (object) {
  const best = Seq(object)
    .filter(student => student.score > 70)
    .map(student => {
      let capitalized = student.firstName[0].toUpperCase() + student.firstName.slice(1);
      student.firstName = capitalized;
      capitalized = student.lastName[0].toUpperCase() + student.lastName.slice(1);
      student.lastName = capitalized;
      return student;
    });
  console.log(best.toJS());
}
