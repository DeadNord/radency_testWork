import { parse } from 'handlebars';
import { v4 as uuidv4 } from 'uuid';
const data = JSON.parse(window.localStorage.getItem('data'));

const refs = {
  form: document.querySelector('form'),
  btnSend: document.querySelector('[data-action="add-note"]'),
};

// Слушатели
refs.btnSend.addEventListener('click', sendForm);

// Функции
function sendForm() {
  const date = new Date();
  const localDate = date.toLocaleDateString();
  const form = {
    id: uuidv4(),
    name: refs.form.name.value,
    created: localDate,
    category: refs.form.category.value,
    content: refs.form.content.value,
    dates: refs.form.content.value.match(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g),
    status: true,
  };

  if (data) {
    data.push(form);
    window.localStorage.setItem('data', JSON.stringify(data));
  } else {
    window.localStorage.setItem('data', JSON.stringify([form]));
  }
}
