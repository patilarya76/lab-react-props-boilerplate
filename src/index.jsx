import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 import AppClass from "./AppClass";
import data from "./Data"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App props ={data}/>   
    <AppClass props={data}/>
  </React.StrictMode>
);
