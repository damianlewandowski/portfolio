import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './normalize.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.smoothScroll = this.smoothScroll.bind(this);   
  }

  smoothScroll(anchor) {
    document
      .querySelector(`#${anchor}`)
      .scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
  }

  render() {
    return (
      <div className="App">
        <div className="overlay"></div>
        <Navbar smoothScroll={this.smoothScroll} />
        <Home />
        <div className="container">
          <About />
          <hr/>
          <Skills />
          <div id="projects-anchor"></div>     
          <hr/>
          <Projects smoothScroll={this.smoothScroll} />
          <hr/>
          <Contact />
        </div>
        <Footer />        
      </div>
    );
  }
}

export default App;