import React from 'react'
import {Provider} from 'redux'
import {HashRouter} from 'react-router-dom'

const Root = ({ store }) => (
  return (
    <Provider store={ store }>
      <HashRouter>
        <App store={ store }/>
      </HashRouter>
    </Provider>
  )
)

export default Root
