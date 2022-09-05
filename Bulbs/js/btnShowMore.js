let coll = document.getElementsByClassName('show__more-btn');
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.previousElementSibling.classList.toggle('active');
    let content = this.previousElementSibling;
    if (content.style.display) {
      content.style.display = none;
    }
    else {
      content.style.display = block;
    }
  })
}
let coll2 = document.getElementsByClassName('show__more');
for (let i = 0; i < coll2.length; i++) {
  coll2[i].addEventListener('click', function () {
    this.previousElementSibling.classList.toggle('active');
    let content = this.previousElementSibling;
    if (content.style.display) {
      content.style.display = none;
    }
    else {
      content.style.display = block;
    }
  })
}
let coll3 = document.getElementsByClassName('showMore__productBtn');
for (let i = 0; i < coll3.length; i++) {
  coll3[i].addEventListener('click', function () {
    this.previousElementSibling.classList.toggle('active');
    let content = this.previousElementSibling;
    if (content.style.display) {
      content.style.display = none;
    }
    else {
      content.style.display = block;
    }
  })
}
