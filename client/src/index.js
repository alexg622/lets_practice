import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
import configureStore from './store'

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore()
  const root = document.getElementById('root')
  ReactDOM.render(<Root store={ store }/>, root);
})
