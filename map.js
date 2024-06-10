const numbers = [10, 11, 12, 13, 14, 16, 8];
const double = numbers.map((num) => num * 2);
// console.log(double);

const friends = ["rakib", "sakib", "tamim", "monir kahn", "nathan bom"];

const totalLength = friends.map((friend) => friend.length);
// console.log(totalLength);

const forEach = numbers.forEach((num) => num);
// console.log(forEach);
const filter = friends.filter((friend) => friend.length % 2 !== 0);
console.log(filter);
const find = numbers.find((num) => num > 12);
// console.log(find);
