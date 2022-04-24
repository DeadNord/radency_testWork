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




const itemsReducer = createReducer([{}], {
  [addNote.type]: (state, { payload }) => [
    ...state,
    {
      id: v4(),
      title: payload.title,
      created: new Date().toLocaleDateString(),
      category: payload.category,
      content: payload.content,
      dates: payload.content.match(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g),
      status: true,
    },
  ],
  [deleteNote.type]: (state, { payload }) =>
    state.filter((item: any) => item.id !== payload),
  [changeNote.type]: (state, { payload }) =>
    state.map((item: any) =>
      item.id === payload.id
        ? {
            ...item,
            title: payload.title,
            category: payload.category,
            content: payload.content,
          }
        : item,
    ),
  [archiveNote.type]: (state, { payload }) =>
    state.map((item: any) =>
      item.id === payload ? { ...item, status: !item.status } : item,
    ),
});

const visibilityFilterReducer = createReducer(true, {
  [changeVisibilityFilter.type]: (_, { payload }) => payload,
});

export const notesReducer = combineReducers({
  items: itemsReducer,
  visibilityFilter: visibilityFilterReducer,
});
