const form = document.querySelector("form");
//this usecase will give you empty values.
//const height = parseInt(document.querySelector("#height").value);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 1 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 1 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //to show the result.
    if (bmi < 18.6) {
      results.innerHTML = `<span>Under weight</span> \n Result is: <span>${bmi}</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `Perfect \n Result is: <span>${bmi}</span>`;
    } else if (bmi > 24.9) {
      results.innerHTML = `<span>Over Weight</span> \n Result is: <span>${bmi}</span>`;
    }
    // results.innerHTML = `<span>${bmi}</span>`;
  }
});
