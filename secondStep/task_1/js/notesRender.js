import data from '../json/data.json';
import notesList from '../layouts/notes.hbs';

// Ссылки
const refs = {
  notesTable: document.querySelector('div.js-table--notes'),
  //   btn: document.querySelector('[data-action="add-note"]'),
};

// Слушатели

// refs.galleryList.addEventListener("click", onClickHandler);
// refs.btn.addEventListener("click", onCloseHandler);

// Рендер
const renderNotes = arr => {
  const activeNotes = arr.filter(item => item.status === true);
  refs.notesTable.insertAdjacentHTML('beforeEnd', notesList(activeNotes));
};

renderNotes(data);
