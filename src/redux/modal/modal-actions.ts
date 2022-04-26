import { createAction } from '@reduxjs/toolkit';

const openModal = createAction('modal/open');

const closeModal = createAction('modal/close');

export { openModal, closeModal };
