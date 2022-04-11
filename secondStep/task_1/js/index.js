import notesList from "../json/list.json" assert { type: "json" };

// Ссылки
const refs = {
  notesTable: document.querySelector("div.js-table--notes"),
  btn: document.querySelector('[data-action="add-note"]'),
};

// Слушатели

// refs.galleryList.addEventListener("click", onClickHandler);
// refs.btn.addEventListener("click", onCloseHandler);

const createItem = item => {
  const li = document.createElement("li");
  li.classList.add("table__item");
  //   const p = document.createElement("p");
  //   p = document.createTextNode(" ");

  //   li.appendChild(p);
  return li;
};

const createList = items => {
  const ul = document.createElement("ul");
  ul.classList.add("table__list");
  ul.classList.add("table__list--notes");

  return ul;
};

// Генерация

const renderListItems = arr => {
  const ul = createList();
  const li = arr.map(item => createItem(item));

  ul.appendChild(li);
  console.log(ul);
  //   refs.notesTable.appendChild(ul);
};

renderListItems(notesList);
