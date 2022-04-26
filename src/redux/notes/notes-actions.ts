import { createAction } from '@reduxjs/toolkit';

const addNote = createAction('notes/add', data => ({
  payload: data,
}));

const deleteNote = createAction('notes/delete', id => ({
  payload: id,
}));
const changeNote = createAction('notes/change', data => ({
  payload: data,
}));
const archiveNote = createAction('notes/archive', id => ({
  payload: id,
}));

const changeVisibilityFilter = createAction('notes/state', state => ({
  payload: state,
}));

export { addNote, deleteNote, changeNote, archiveNote, changeVisibilityFilter };
