
const list_items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
  "Item 16",
  "Item 17",
  "Item 18",
  "Item 19",
  "Item 20",
  "Item 21",
  "Item 22",
  "Item 23",
  "Item 24",
  "Item 25",
  "Item 23",
  "Item 26",
  "Item 27",
  "Item 27",
  "Item 28",
  "Item 28",
  "Item 29",
  "Item 30",
  "Item 31",
  "Item 32",
  "Item 33",
  "Item 34",
  "Item 35",
  "Item 36",
  "Item 37",
  "Item 38",
  "Item 39",
  "Item 40",
  "Item 41",
  "Item 42",
  "Item 43",
  
];

const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');


let current_page = 1;
let rows = 20;

// 
const results = document.getElementById('list');

function generateCards() {
  const cards = [];
  for (let i = 0; i < cardData.length; i++) {
    cards.push(`
      <div class="card">
        <div class="card__img">
          <img class="image__card" src="img/wheel 1.jpg" alt="">
        </div>
        <div class="card__info">
          <div class="card__infoTop">
            <p class="product__name">${cardData[i].title}</p>
            <p class="infoTop__subtitle">Assaut Gloss Black</p>
            <p class="product__size">20X10 - 22mm</p>
          </div>
          <div class="card__price">
            <p class="costs"><span class="">$</span> 1828</p>
            <p class="setFour">Set of four</p>
          </div>
          <div class="more__info">
            <p class="package _icon-dollar">Save up to $108 when adding tires of package</p>
            <P class="delivery _icon-Group-5">In stock & free quick delivery: THU, AUG 4</P>
          </div>
        </div>
      </div>
    `)
  }
  return cards
}
const cardArr = generateCards()
results.innerHTML = cardArr.join('')
// 
function DisplayList(items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = "";
  page--;

  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginatedItems = items.slice(start, end);

  for (let i = 0; i < paginatedItems.length; i++) {
    let item = paginatedItems[i];

    let item_element = document.createElement('div');
    item_element.classList.add('item');
    item_element.innerText = item;

    wrapper.appendChild(item_element);
  }
}

function SetupPagination(items, wrapper, rows_per_page) {
  wrapper.innerHTML = "";

  let page_count = Math.ceil(items.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = PaginationButton(i, items);
    wrapper.appendChild(btn);
  }
}

function PaginationButton(page, items) {
  let button = document.createElement('button');
  button.innerText = page;

  if (current_page == page) button.classList.add('active');

  button.addEventListener('click', function () {
    current_page = page;
    DisplayList(items, list_element, rows, current_page);

    let current_btn = document.querySelector('.pagenumbers button.active');
    current_btn.classList.remove('active');

    button.classList.add('active');
  });

  return button;
}

DisplayList(cardData, list_element, rows, current_page);
SetupPagination(cardData, pagination_element, rows);

// DisplayList(cardArr, list_element, rows, current_page);
// SetupPagination(cardArr, pagination_element, rows);