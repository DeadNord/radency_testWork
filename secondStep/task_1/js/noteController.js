import { toggleModal } from './modal';

// Ссылки
const refs = {
  btnDelete: document.querySelectorAll('[data-action="delete"]'),
  btnChange: document.querySelectorAll('[data-action="change"]'),
  btnArchive: document.querySelectorAll('[data-action="archive"]'),

  formAdd: document.querySelector('form.js-form--add'),
  formChange: document.querySelector('form.js-form--change'),
  btnSendChange: document.querySelector('[data-action="change-note"]'),
};
const data = JSON.parse(window.localStorage.getItem('data'));
let noteId = '';

// Слушатели
for (const btn of refs.btnDelete) {
  btn.addEventListener('click', e => deleteNote(e));
}
for (const btn of refs.btnChange) {
  btn.addEventListener('click', e => openChangeModal(e));
}
for (const btn of refs.btnArchive) {
  btn.addEventListener('click', e => archiveNote(e));
}

refs.btnSendChange.addEventListener('click', e => changeNote(noteId));

// Функции

function openChangeModal(e) {
  toggleModal();
  refs.formAdd.classList.add('hidden');
  refs.formChange.classList.remove('hidden');

  noteId = e.target.closest('.table__list').id;
}

function deleteNote(e) {
  noteId = e.target.closest('.table__list').id;
  const newData = data.filter(item => {
    return item.id !== noteId;
  });
  window.localStorage.setItem('data', JSON.stringify(newData));
}

function changeNote(noteId) {
  const form = {
    name: refs.formChange.name.value,
    category: refs.formChange.category.value,
    content: refs.formChange.content.value,
    dates: [refs.formChange.dates.value],
  };
  const newData = data.map(item =>
    item.id === noteId
      ? {
          ...item,
          name: form.name,
          category: form.category,
          content: form.content,
        }
      : item,
  );
  window.localStorage.setItem('data', JSON.stringify(newData));
}

function archiveNote(e) {
  noteId = e.target.closest('.table__list').id;
  const newData = data.map(item => (item.id === noteId ? { ...item, status: !item.status } : item));
  window.localStorage.setItem('data', JSON.stringify(newData));
}
