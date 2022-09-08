const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});
{
const selected1 = document.querySelector(".selected1");
const optionsContainer1 = document.querySelector(".options-container1");

const optionsList1 = document.querySelectorAll(".option1");

selected1.addEventListener("click", () => {
  optionsContainer1.classList.toggle("active");
});

optionsList1.forEach(o => {
  o.addEventListener("click", () => {
    selected1.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer1.classList.remove("active");
  });
  document.addEventListener('click', function (e) {
  if (e.target !== selected1) {
    optionsContainer1.classList.remove('active');
    // dropDownList.classList.remove('dropdown__list--visible');

  }
})
});
// optionsList1('click', function (e) {
//   if (e.target !== optionsContainer1) {
//     optionsContainer1.classList.remove('active');
//     // dropDownList.classList.remove('dropdown__list--visible');

//   }
// })
}
