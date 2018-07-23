import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
import configureStore from './store'
import { fetchPosts } from './utils'
import axios from 'axios'

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore()
  window.axios = axios
  window.fetchPosts = fetchPosts
  const root = document.getElementById("root")
  ReactDOM.render(<Root store={store}/>, root)
})
