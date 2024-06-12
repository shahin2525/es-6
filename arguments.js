// let num1 = 5;
// let num2 = 7;
// const function1 = (num1, num2) => {
//   num1 = 10;
//   console.log("1", num1);
//   return num1 + num2;
// };
// console.log("2", num1);
// function1(num1, num2);
// console.log("3", num1);
let hero1 = { name: "sakib", partner: "bubli" };
let hero2 = { name: "arifin", partner: "nusrat" };

const arguFunc = (para1, para2) => {
  para1.partner = "opu";
  console.log("1", para1.partner);
};

console.log("2", hero1.partner);
arguFunc(hero1, hero2);
console.log("3", hero1.partner);
