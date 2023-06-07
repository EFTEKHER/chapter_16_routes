import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store';
import {   BrowserRouter} from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
  <StoreProvider store={store}>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

