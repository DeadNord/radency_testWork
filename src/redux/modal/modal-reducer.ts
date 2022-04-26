import { createReducer } from '@reduxjs/toolkit';
import { openModal, closeModal } from './modal-actions';

export const modalReducer = createReducer(false, {
  [openModal.type]: state => (state = true),
  [closeModal.type]: state => (state = false),
});
