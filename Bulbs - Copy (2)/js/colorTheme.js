document.querySelector('.options-container1').addEventListener('change', (event) => {
 if(event.target.nodeName === "INPUT"){
  console.log("pppp");
  document.documentElement.classList.remove('forestgreen', 'darkred', 'olive', 'seagreen', 'teal', 'saddlebrown', 'midnightblue');
  document.documentElement.classList.add(event.target.value);
 }
});