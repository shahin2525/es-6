// actor = {
//   name: "sakib khan",
//   age: 56,
//   phone: "dfjdfdfd",
//   isSingle: true,
//   fanClub: "sakibian",
// };
// const { name, age, fanClub, isSingle } = actor;
// // console.log(fanClub, isSingle);
// const array1 = [10, 15, 20, 30];
// const [a, , c] = array1;
// // console.log(a, c);
// const arrayFunction = (a, b) => {
//   return [a * 2, b * 2];
// };
// const [aa, bb] = arrayFunction(2, 2);
// // console.log(aa, bb);

// const keys = Object.keys(student);
// // console.log(keys);
// const valus = Object.values(student);
// // console.log(valus);
// const entries = Object.entries(student);
// // console.log(entries);
// // freeze
// // Object.freeze(student);
// // Object.seal(student);
// student.age = 50;
// // delete student.phone;
// const { phone, ...newStudent } = student;
// // console.log(newStudent, "st", student);
const student = {
  name: "rakib",
  age: 20,
  id: "aa123",
  phone: "adfdfdf",
  address: "mir pur",
};
for (const pro in student) {
  console.log(student[pro]);
}
const numbers = [10, 15, 16, 6];
// for (const number of numbers) {
//   console.log(number);
// }
const sakibkhan = "saki bian";
for (const char of sakibkhan) {
  console.log(char);
}
