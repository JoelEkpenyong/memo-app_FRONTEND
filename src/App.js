import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Nav from './components/Nav';
import Landing from './components/Landing';
import Register from './components/Register'
import Login from './components/Login'

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path = '/register' component={Register} />
            <Route path = '/login' component={Login} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
