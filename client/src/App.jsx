import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Test from './components/test'
import PostsIndexContainer from './components/posts_index_container'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ Test }/>
          <Route exact path='/posts' component={ PostsIndexContainer }/>
        </Switch>
      </div>
    );
  }
}

export default App;
