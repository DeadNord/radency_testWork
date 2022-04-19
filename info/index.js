// import './css/index.css';
// import './js/modal';

// import './js/statisticsRender.js';
// import './js/formSend';
// import './js/notesRender.js';
// import './js/noteController.js';

import React from 'react';
import App from './App.js';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
