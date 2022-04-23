import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { notesReducer } from './notes/notes-reducer';
import { modalReducer } from './modal/modal-reducer';
import data from '../json/data.json';


import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const preloadedState: Object = {
  notes: {
    items: data,
    visibilityFilter: true,
  },
   modal: false
};


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({
  reducer: {
    notes: notesReducer,
    modal: modalReducer
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
  preloadedState: preloadedState,
});


export { store };
