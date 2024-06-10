const threeLines = `I am a web developer.
I love to code.
I love to eat biryani`;
// console.log(threeLines);
const defaultPra = (a, b = 2) => a * b;
const evenFriendsList = (friends) => {
  let eventFriends = [];
  for (const friend of friends) {
    if (friend.length % 2 === 0) {
      eventFriends.push(friend);
    }
  }
  return eventFriends;
};
const friends = ["rakib", "khan", "sahabuddin"];
// const result = evenFriendsList(friends);

const squareAverage = (numbers) => {
  let totalSquare = 0;
  //   let average = 0;
  for (number of numbers) {
    const square = number * number;
    totalSquare = totalSquare + square;
  }
  const average = totalSquare / numbers.length;
  return average;
};

const numbers = [10, 11, 12, 13];
const result = squareAverage(numbers);

const getMaxNumber = (arr1, arr2) => {
  const combineArray = [...arr1, ...arr2];

  const max = Math.max(...combineArray);
  return max;
};
const arr1 = [10, 20, 16, 5];
const [a, b, ...c] = arr1;
const obg = {
  name: "sa",
  age: 20,
  phone: "dfdf",
  addre: "mirpur",
};
const { name, phone, ...others } = obg;
console.log(c, others);
const arr2 = [80, 50];

const maxNumber = getMaxNumber(arr1, arr2);
