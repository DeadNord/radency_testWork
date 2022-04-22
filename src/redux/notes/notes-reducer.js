import { combineReducers } from 'redux';

import { createReducer } from '@reduxjs/toolkit';
import {
  addNote,
  deleteNote,
  changeNote,
  archiveNote,
  changeVisibilityFilter,
} from './notes-actions';

const itemsReducer = createReducer([], {
  [addNote]: (state, { payload }) => [...state, payload],
  [deleteNote]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
  [changeNote]: (state, { payload }) =>
    state.map(item =>
      item.id === payload.id
        ? {
            ...item,
            name: payload.name,
            category: payload.category,
            content: payload.content,
          }
        : item,
    ),
  [archiveNote]: (state, { payload }) =>
    state.map(item =>
      item.id === payload.id ? { ...item, status: !item.status } : item,
    ),
});

const visibilityFilterReducer = createReducer(true, {
  [changeVisibilityFilter]: (_, { payload }) => payload,
});

export const notesReducer = combineReducers({
  items: itemsReducer,
  visibilityFilter: visibilityFilterReducer,
});
