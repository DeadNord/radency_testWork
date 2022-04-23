import { createReducer } from '@reduxjs/toolkit';
import { openModal, closeModal } from './modal-actions';

export const modalReducer = createReducer(false, {
  [openModal]: state => (state = true),
  [closeModal]: state => (state = false),
});
