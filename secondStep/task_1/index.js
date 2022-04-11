// Ссылки

const refs = {
  galleryList: document.querySelector("ul.js-gallery"),
  lightbox: document.querySelector("div.lightbox"),
  btn: document.querySelector('[data-action="close-lightbox"]'),
  overlay: document.querySelector(".lightbox__overlay"),
  lightboxImage: document.querySelector(".lightbox__image"),
};

// Слушатели

refs.galleryList.addEventListener("click", onClickHandler);
refs.btn.addEventListener("click", onCloseHandler);
refs.overlay.addEventListener("click", onCloseHandler);
window.addEventListener("keydown", slider);

// Создание изображения

const createImage = (item, parent) => {
  const { preview, original, description } = item;
  const img = document.createElement("img");

  img.classList.add("gallery__image");
  img.setAttribute("data-source", original);
  img.src = preview;
  img.alt = description;

  parent.appendChild(img);
};

// Создание ссылки

const createLink = (item, parent) => {
  const { original } = item;
  const a = document.createElement("a");

  a.classList.add("gallery__link");
  a.href = original;

  createImage(item, a);

  parent.appendChild(a);
};

// Создание лишки

const createItem = item => {
  const li = document.createElement("li");
  li.classList.add("gallery__item");

  createLink(item, li);

  return li;
};

// Генерация

const renderListItems = arr => {
  const items = arr.map(item => createItem(item));

  refs.galleryList.append(...items);
};

renderListItems(galleryItems);

// Функция открытия

function onClickHandler(e) {
  e.preventDefault();

  refs.lightbox.classList.add("is-open");
  const { dataset, alt } = e.target;
  updateLightboxImage(dataset.source, alt);
}

// Функция закрытия

function onCloseHandler(e) {
  refs.lightbox.classList.remove("is-open");
  updateLightboxImage();
}
