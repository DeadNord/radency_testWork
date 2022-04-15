// Ссылки
const refs = {
  modal: document.querySelector('div.modal'),
  btnOpen: document.querySelector('[data-modal-open]'),
  btnClose: document.querySelector('[data-modal-close]'),
  formAdd: document.querySelector('form.js-form--add'),
  formChange: document.querySelector('form.js-form--change'),
};

// Слушатели
refs.btnOpen.addEventListener('click', toggleModal);
refs.btnClose.addEventListener('click', toggleModal);

export function toggleModal() {
  refs.modal.classList.toggle('modal--is-hidden');
  refs.formAdd.classList.remove('hidden');
  refs.formChange.classList.add('hidden');
}
