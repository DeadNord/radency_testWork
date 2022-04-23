import { createAction } from '@reduxjs/toolkit';

const addNote = createAction('notes/add', data => ({
  payload: {
    data,
  },
}));

const deleteNote = createAction('notes/delete', id => id);
const changeNote = createAction('notes/delete', data => data);
const archiveNote = createAction('notes/delete', id => id);

const changeVisibilityFilter = createAction('notes/state', state => {
  return { payload: state };
});

export { addNote, deleteNote, changeNote, archiveNote, changeVisibilityFilter };
