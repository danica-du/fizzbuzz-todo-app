import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const initialData = [
//   {
//     id: 123,
//     content: "Do homework",
//     isCompleted: true,
//   },
//   {
//     id: 456,
//     content: "Make dinner",
//     isCompleted: false,
//   },
//   {
//     id: 789,
//     content: "Get oil change",
//     isCompleted: true,
//   }
// ]

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
