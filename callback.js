const function1 = (function2, name) => {
  function2(name);
};

const function2 = (name) => {
  console.log("good morning", name);
};
const function3 = (name) => {
  console.log("good afternoon", name);
};
const function4 = (name) => {
  console.log("good afternoon", name);
};
function1(function2, "sakil");
function1(function3, "rakib");
function1(function4, "monir");
