const clickAge = () => {
  const ageInput = document.getElementById("age");
  const ageText = ageInput.value;
  const error = document.getElementById("error");

  try {
    const age = parseInt(ageText);
    if (isNaN(age)) {
      throw "please provide valid age";
    } else if (age < 18) {
      throw "bacha sor";
    } else if (age > 30) {
      throw "murubbi porey asen";
    }
    error.innerHTML = "";
  } catch (err) {
    console.log(err);
    error.innerHTML = err;
  }
};
