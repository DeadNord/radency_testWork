import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { notesReducer } from './notes/notes-reducer';
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
  items: data,
  visibilityFilter: true,
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
    notes:  notesReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
  preloadedState: {
    notes: preloadedState,
  },
});


export { store };
