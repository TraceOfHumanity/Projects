let coll = document.getElementsByClassName('sHow');
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.previousElementSibling.classList.toggle('active');
    this.classList.toggle('hidden');
  })
};
let coll1 = document.getElementsByClassName('checkPrice');
for (let i = 0; i < coll1.length; i++) {
  coll1[i].addEventListener('click', function () {
    this.nextElementSibling.classList.toggle('active');
    this.nextElementSibling.classList.toggle('hidden');
  })
};
