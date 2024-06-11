const numbers = [10, 11, 12, 13, 14, 16, 8];
const double = numbers.map((num) => num * 2);
// console.log(double);

const friends = ["rakib", "sakib", "tamim", "monir kahn", "nathan bom"];

const totalLength = friends.map((friend) => friend.length);
// console.log(totalLength);

const forEach = numbers.forEach((num) => num);
// console.log(forEach);
const filter = friends.filter((friend) => friend.length % 2 !== 0);
// console.log(filter);
const find = numbers.find((num) => num > 12);
// console.log(find);
const total = numbers.reduce((pre, curr) => pre + curr, 0);
const total2 = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(total2);
const products = [
  { name: "lenabo", price: 65000, color: "black" },
  { name: "samsung", price: 75000, color: "gray" },
  { name: "hp", price: 45000, color: "white" },
  { name: "macbook", price: 165000, color: "pink" },
  { name: "macbook", price: 70000, color: "pink" },
];

const productsEven = products.forEach((p) => console.log(p));
// console.log(productsEven);
