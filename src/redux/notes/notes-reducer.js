import { combineReducers } from 'redux';

import { createReducer } from '@reduxjs/toolkit';
import {
  addNote,
  deleteNote,
  changeNote,
  archiveNote,
  changeVisibilityFilter,
} from './notes-actions';

import { v4 } from 'uuid';

const itemsReducer = createReducer([], {
  [addNote]: (state, { payload }) => [
    ...state,
    {
      id: v4(),
      name: payload.name,
      created: Date().toLocaleDateString(),
      category: payload.category,
      content: payload.content,
      dates: payload.content.match(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g),
      status: true,
    },
  ],
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

// const date = new Date();
// const localDate = date.toLocaleDateString();
// const form = {
//   id: uuidv4(),
//   name: refs.form.name.value,
//   created: localDate,
//   category: refs.form.category.value,
//   content: refs.form.content.value,
//   dates: refs.form.content.value.match(
//     /(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g,
//   ),
//   status: true,
// };
