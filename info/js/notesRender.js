import dataBase from '../json/data.json';
import notesList from '../layouts/notes.hbs';
const data = JSON.parse(window.localStorage.getItem('data'));
const mode = JSON.parse(window.localStorage.getItem('mode'));

// Ссылки
const refs = {
  notesTable: document.querySelector('div.js-table--notes'),
  btnMode: document.querySelector('[data-action="vision-mode"]'),
};

// Слушатели
refs.btnMode.addEventListener('click', changeMode);

// Функции
function changeMode() {
  if (mode) {
    const newMode = !mode.status;
    window.localStorage.setItem('mode', JSON.stringify({ status: newMode }));
  } else {
    window.localStorage.setItem('mode', JSON.stringify({ status: false }));
  }
}

// Рендер
function renderStatusNotes(state) {
  let status = '';
  if (state === true) {
    status = 'Archived';
  } else {
    status = 'Active';
  }
  refs.btnMode.textContent = status + ' ' + 'Notes';
}

function renderNotes(arr, status) {
  const activeNotes = arr.filter(item => item.status === status);
  refs.notesTable.insertAdjacentHTML('beforeEnd', notesList(activeNotes));
}

if (data) {
  renderNotes(data, mode != null ? mode.status : true);
} else {
  renderNotes(dataBase, mode != null ? mode.status : true);
  window.localStorage.setItem('data', JSON.stringify(dataBase));
}

if (mode) {
  renderStatusNotes(mode.status);
} else {
  renderStatusNotes(true);
}
