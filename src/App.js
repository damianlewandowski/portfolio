import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Goals from './components/Goals/Goals';

import './normalize.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="overlay"></div>
        <Navbar />
        <Home />
        <div className="container">
          <About />
          <hr/>

          <Goals />
        </div>
      </div>
    );
  }
}

export default App;