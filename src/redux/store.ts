import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { notesReducer } from './notes/notes-reducer';
import { modalReducer } from './modal/modal-reducer';
import data from '../json/data.json';


import {
    persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const preloadedState: Object = {
  notes: {
    items: data,
    visibilityFilter: true,
  },
   modal: false
};

const notesPersistConfig = {
  key: 'notes',
  storage,
  blacklist: ['visibilityFilter'],
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
    notes: persistReducer(notesPersistConfig, notesReducer),
    modal: modalReducer
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
  preloadedState: preloadedState,
});

const persistor = persistStore(store);

export { store, persistor};
