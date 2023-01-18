import React from 'react';
import ReactDOM from 'react-dom/client';
//importing css file to a javascript file
//include the css code
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//This is the hero page or the intitial code ran on launch. 
//create root and render it
//will render it in the root div
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
