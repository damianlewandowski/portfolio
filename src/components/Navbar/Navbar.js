import React, { Component } from 'react';

import NavbarDropdownList from './NavbarDropdownList';
import Logo from './Logo';

import './Navbar.css';

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      showDropdown: false,
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState(prevState => ({
      showDropdown: !prevState.showDropdown,
    }));
  }

  render() {
    return (
      <nav className="Navbar">
        <Logo />
        <button 
          className="dropdown-toggler"
          onClick={this.toggleDropdown}>
          &#9776;</button>
        <NavbarDropdownList show={this.state.showDropdown} />
      </nav>
    )
  }
}

export default Navbar;