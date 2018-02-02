import React, { Component } from 'react';
import propTypes from 'prop-types';

import Logo from './Logo';
import NavbarList from './NavbarList';
import NavbarDropdownList from './NavbarDropdownList';

import './Navbar.css';

// For NavbarList and NavbarDropdownList components
const anchors = ["home", "about", "skills", "projects", "contact",];

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      showDropdown: false,
      scrollTop: true,
    };

    // For increasing navbar size when scrollbar is at the top
    window.addEventListener("scroll", () => {
      const scrollBarPos = document.documentElement.scrollTop;
      if(scrollBarPos > 100) {
        this.setState({ scrollTop: false });
      } else {
        this.setState({ scrollTop: true });        
      }
    })

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState(prevState => ({
      showDropdown: !prevState.showDropdown,
    }));
  }

  render() {
    return (
      <nav 
        className={this.state.scrollTop ? "Navbar Navbar-at-top" : "Navbar"}>
        <Logo />
        <button 
          className="dropdown-toggler"
          onClick={this.toggleDropdown}>
          &#9776;</button>
        <NavbarList smoothScroll={this.props.smoothScroll} anchors={anchors} />
        <NavbarDropdownList smoothScroll={this.props.smoothScroll} anchors={anchors} show={this.state.showDropdown} />
      </nav>
    )
  }
}

Navbar.propTypes = {
  smoothScroll: propTypes.func,
}

export default Navbar;