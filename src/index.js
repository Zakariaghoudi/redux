// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './Redux/Store'; // Import your store
import { Provider } from 'react-redux'; // Import Provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap your App with Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();