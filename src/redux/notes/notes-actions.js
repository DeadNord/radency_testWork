import { v4 } from 'uuid';

import { createAction } from '@reduxjs/toolkit';

const addNote = createAction('notes/add', data => ({
  payload: {
    id: v4(),
    data,
  },
}));

const deleteNote = createAction('notes/delete');
const changeNote = createAction('notes/delete');
const archiveNote = createAction('notes/delete');

const changeVisibilityFilter = createAction('notes/state', state => {
  return { payload: state };
});

export { addNote, deleteNote, changeNote, archiveNote, changeVisibilityFilter };
