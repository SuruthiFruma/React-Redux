import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import appStore from '../src/store/store'
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appStore}><App>{console.log("appStore",appStore)}</App></Provider>
);

