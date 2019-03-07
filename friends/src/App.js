import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <NavLink to='/friends'>Home</NavLink>
          <NavLink to='/login'>My Friends</NavLink>
        </header>
        <Route path='/friends' component={Home} />
        <Route path='/login' component={Login}/>
      </div>
      </Router>
    );
  }
}

export default App;
