// polyfill for the operation of the drop-down list in browsers that do not support forEach=========================================
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

// dropDowns in tire2-1921.html===================================================================================================================
document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector('.textBox');
  dropDownBtn.addEventListener('click', function () {
    dropDownWrapper.classList.toggle('active');

    const dropDownList = dropDownWrapper.querySelector('.option__list');
    const dropDownListItems = dropDownList.querySelectorAll('.option');

    // clicking outside the list closes it
    document.addEventListener('click', function (e) {
      if (e.target !== dropDownBtn) {
        dropDownWrapper.classList.remove('active');

      }
    })

    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener('click', function (e) {
        e.stopPropagation();
        listItem.innerHTML = this.innerHTML;
        dropDownBtn.focus();
        listItem.dropDownBtn.value = this.show.value;
      })
    })

    // close the active list by clicking ESC and Tab
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' || e.key === 'Escape') {
        dropDownWrapper.classList.remove('active');
      }
    })
  })
});
// ???????? Script for item dropdown. Working for one element
function show(anything) {
  document.querySelectorAll('.textBox').value = anything
}
//  // button show more/less is footer==================================================================================
//  document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper2) {
//   const dropDownBtn = dropDownWrapper2.querySelector('.dropdown__button');
//   const dropDownList = dropDownWrapper2.querySelector('.option__list');
//   const dropDownListItems = dropDownList.querySelectorAll('.option');
//   const dropDownInput = dropDownWrapper2.querySelector('.dropdown__input-hidden');

//   // open\close the drop-down list by clicking on it
//   dropDownBtn.addEventListener('click', function () {
//     dropDownList.classList.toggle('dropdown__list--visible');
//     this.classList.add('.dropdown__button--active');
//   });

//   // selecting an element from the list and remembering the value + closing the list after selection
//   dropDownListItems.forEach(function (listItem) {
//     listItem.addEventListener('click', function (e) {
//       e.stopPropagation();
//       dropDownBtn.innerText = this.innerText;
//       dropDownBtn.focus();
//       dropDownInput.value = this.dataset.value;
//       dropDownList.classList.remove('dropdown__list--visible');
//     })
//   });

//   // clicking outside the list closes it
//   document.addEventListener('click', function (e) {
//     if (e.target !== dropDownBtn) {
//       dropDownBtn.classList.remove('dropdown__button--active');
//       dropDownList.classList.remove('dropdown__list--visible');

//     }
//   })

//   // close the active list by clicking ESC and Tab
//   document.addEventListener('keydown', function (e) {
//     if (e.key === 'Tab' || e.key === 'Escape') {
//       dropDownBtn.classList.remove('dropdown__button--active');
//     }
//   })
// });



