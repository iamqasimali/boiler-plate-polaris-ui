// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@shopify/polaris/build/esm/styles.css'; // Import Polaris styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
