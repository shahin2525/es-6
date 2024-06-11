// task -1: console log the secondary school location of Sophia
let data = {
  Sophia: {
    id: 33,
    study: [
      {
        primary: [
          { school_name: "ABC primary school" },
          { location: "Peters burg" },
        ],
      },
      {
        secondary: [
          { school_name: "ABC secondary school" },
          { location: "St Lorence" },
        ],
      },
    ],
  },
};

// task-2: console .log  output: Petersburg, Herry

let students = {
  2222: {
    name: "Jack",
    section: "C",
    class: "IX",
    address: {
      "building no": 12,
      street: "St. Jonson",
      city: "Petersburg",
      country: "UK",
    },
  },
  3333: {
    name: "Herry",
    section: "D",
    class: "X",
    address: {
      "building no": 85,
      street: "DC road",
      city: "Kachukhet",
      country: "Bangladesh",
    },
  },
};

// task-3 : access and then show habluder adda
// show output Beginner
let data2 = {
  data: [
    {
      bookId: 1,
      bookDetails: {
        name: "habluder adda",
        category: "XYZ",
        price: "20$",
      },
      bookCategory: "Basic",
    },
    {
      bookId: 2,
      bookDetails: {
        name: "gobluder adda",
        category: "ABC",
        price: "40$",
      },
      bookCategory: "Beginner",
    },
  ],
};

const getEvenNumbers = (numbers) => {
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const double = num + 1;
    evenNumbers.push(double);
  }
  return evenNumbers;
};
const numbers = [1, 3, 5, 7, 9];
const evenNumbers = getEvenNumbers(numbers);
// console.log(evenNumbers);

const evenNumber = numbers.map((number) => {
  const double = number + 1;
  return double;
});
// console.log("ev", evenNumber);

const numbers2 = [33, 50, 79, 78, 90, 101, 30];
const divisible = numbers2.filter((number) => number % 10 === 0);
// console.log(divisible);

const divisible2 = numbers2.find((number) => number % 10 === 0);
// console.log(divisible2);

const instructors = [
  {
    name: "nodi",
    age: 28,
    position: "senior",
  },
  {
    name: "akil",
    age: 26,
    position: "junior",
  },
  {
    name: "shobuj",
    age: 30,
    position: "senior",
  },
];

// {
//     const seniorInstructor = instructor.position === "senior";
//     return seniorInstructor.name;
//   });

// const seniorsName = instructors.filter(
//   (instructor) => {

//   }
// );
// console.log(seniorsName);

const people = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 22 },
];

const getTotalAge = (people) => {
  let peopleAge = 0;
  for (let i = 0; i < people.length; i++) {
    const person = people[i];
    peopleAge = peopleAge + person.age;
    // console.log(person);
  }
  return peopleAge;
};
const totalAge = getTotalAge(people);
// console.log(totalAge);

const totalAge2 = people.reduce((acc, previous) => acc + previous.age, 0);
console.log("2", totalAge2);
