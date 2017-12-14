import React, { Component } from 'react';
import logo from './logo.svg';
import store from './store'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
        </div>
      </Router>
    )
  }
}

export default App;