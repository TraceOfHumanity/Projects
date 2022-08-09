// поліфіл для роботи випадаючого списку в браузерах що не підтримують forEach
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (let i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
      }
  };
}

const buttonMoreFoкOnePageInFooter = document.querySelector('#button');
const moreInfoPage1 = document.querySelector('#content');







// Кнопка показати більше у футері
buttonMoreFoкOnePageInFooter.addEventListener('click', function () {
  moreInfoPage1.classList.toggle('content__hidden');
  if (moreInfoPage1.classList.contains('content__hidden')) {
    buttonMoreFoкOnePageInFooter.textContent = 'More'
  } else {
    buttonMoreFoкOnePageInFooter.textContent = 'Less';
  }
})


document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper){
  const dropDownBtn = dropDownWrapper.querySelector('.textBox');
  dropDownBtn.addEventListener('click', function() {
  dropDownWrapper.classList.toggle('active');
  
  })
  function show(anything){
      document.querySelector('.textBox').value = anything;
    }
});

// function show(anything){
//   document.querySelector('.textBox').value = anything;
// }

// const dropdown = document.querySelector('.dropdown');
// dropdown.onclick = function(){
//   dropdown.classList.toggle('active');
// }

// document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
//   const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
// const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
// const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
// const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
// const dropDownBtnAside = document.querySelector('.filtersAside');
// const dropFilters = document.querySelector('.main__siteBar');






// // відкрити\закрити випадаючий список по кліку на нього
// dropDownBtn.addEventListener('click', function() {
//   dropDownList.classList.toggle('dropdown__list--visible');
//   this.classList.add('.dropdown__button--active');
// });


// //відкриття\закриття сайтбару для мобільних пристроїв
// dropDownBtnAside.addEventListener('click', function() {
//   dropFilters.classList.toggle('main__siteBar--active');
//   this.classList.add('.main__siteBar--active');
// });



// // вибір елементу із списку та запамятання значення + закриття списку після вибору
// dropDownListItems.forEach(function (listItem) {
//   listItem.addEventListener('click', function (e) {
//     e.stopPropagation();
//     dropDownBtn.innerText = this.innerText;
//     dropDownBtn.focus();
//     dropDownInput.value = this.dataset.value;
//     dropDownList.classList.remove('dropdown__list--visible');
//   })
// });


// // клік за межами списку закриває його
// document.addEventListener('click', function (e) {
//   if (e.target !== dropDownBtn) {
//     dropDownBtn.classList.remove('dropdown__button--active');
//     dropDownList.classList.remove('dropdown__list--visible');

//   }
// })


// // закриття активного списку по кліку на ESC i Tab
// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Tab' || e.key === 'Escape'){
//     dropDownBtn.classList.remove('dropdown__button--active');
//     dropDownList.classList.remove('dropdown__list--visible');
//   }
// })
// });

// // ======================
// document.querySelectorAll('.dropdown2').forEach(function (dropDownWrapper) {
//   const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button2');
// const dropDownList = dropDownWrapper.querySelector('.dropdown__list2');
// const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item2');
// const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden2');





// // відкрити\закрити випадаючий список по кліку на нього
// dropDownBtn.addEventListener('click', function() {
//   dropDownList.classList.toggle('dropdown__list--visible2');
//   this.classList.add('.dropdown__button--active2');
// });


// // вибір елементу із списку та запамятання значення + закриття списку після вибору
// dropDownListItems.forEach(function (listItem) {
//   listItem.addEventListener('click', function (e) {
//     e.stopPropagation();
//     dropDownBtn.innerText = this.innerText;
//     dropDownBtn.focus();
//     dropDownInput.value = this.dataset.value;
//     dropDownList.classList.remove('dropdown__list--visible2');
//   })
// });


// // клік за межами списку закриває його
// document.addEventListener('click', function (e) {
//   if (e.target !== dropDownBtn) {
//     dropDownBtn.classList.remove('dropdown__button--active2');
//     dropDownList.classList.remove('dropdown__list--visible2');

//   }
// })


// // закриття активного списку по кліку на ESC i Tab
// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Tab' || e.key === 'Escape'){
//     dropDownBtn.classList.remove('dropdown__button--active2');
//     dropDownList.classList.remove('dropdown__list--visible2'); 
//   }
// })
// });


document.querySelectorAll('.card').forEach(function (dropDownInCards) {
  const dropDownBtnInCard = dropDownInCards.querySelector('#checkPriceID');
  const dropDownlistInCard = dropDownInCards.querySelector('#dropdownInCardID');


  dropDownBtnInCard.addEventListener('click', function () {
    dropDownlistInCard.classList.toggle('dropdownInCard--hidden');
    
  })
});
document.querySelectorAll('.card').forEach(function (dropDownInCards) {
  const dropDownBtnInCard = dropDownInCards.querySelector('#dropdownInCardID');


  dropDownInCards.addEventListener('click', function () {
    dropDownBtnInCard.classList.toggle('dropdownInCard--hidden');
    
  })
});
