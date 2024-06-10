const user = {
  id: 12,
  name: "soriful",
  address: {
    streets: {
      first: "lalput",
      second: "kalapur",
      third: "no doriya",
      friends: ["rakib", "sakib"],
    },
    city: "dhaka",
  },
};

console.log(user.address.street.friends[1]);
