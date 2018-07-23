import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Test from './components/test'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ Test }/>
        </Switch>
      </div>
    );
  }
}

export default App;
