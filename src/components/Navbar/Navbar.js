import React, { Component } from 'react';

import Logo from './Logo';
import NavbarList from './NavbarList';
import NavbarDropdownList from './NavbarDropdownList';

import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownMode: false,
      homeNavbar: true,
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleNavbarResize = this.handleNavbarResize.bind(this);
  }

  toggleDropdown() {
    this.setState(prevState => ({
      dropdownMode: !prevState.dropdownMode,
    }))
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleNavbarResize);    
  }

  handleNavbarResize() {
    const scrollDist = document.documentElement.scrollTop;
    // User scrolled down from top twice
    if(scrollDist >= 200) {
      console.log("Changing to normal...")
      this.setState({
        homeNavbar: false
      })
      
    } else {
      console.log("Changing to home...");      
      this.setState({
        homeNavbar: true
      })
    }
  }

  render() {
    return (
      <nav className={this.state.homeNavbar ? "Navbar HomeNavbar" : "Navbar"}>
        <Logo />
        <NavbarList />
        <button onClick={this.toggleDropdown}>&#9776;</button>
        <NavbarDropdownList show={this.state.dropdownMode} />                

      </nav>
    )
  }
}

export default Navbar;