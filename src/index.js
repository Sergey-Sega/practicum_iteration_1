import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { createStore, StoreContext } from './store/index';

const store = createStore();

ReactDOM.render(
  <BrowserRouter>
    <StoreContext.Provider value={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </StoreContext.Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
