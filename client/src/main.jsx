import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Redux/store';
import App from './App';
import './index.css';
import axios from 'axios';

// axios.defaults.baseURL = `http://localhost:3001`;
axios.defaults.baseURL = `https://aprende-conmigo-production.up.railway.app:3001`;

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <Provider store={store}>
    <App />
  </Provider>
);
