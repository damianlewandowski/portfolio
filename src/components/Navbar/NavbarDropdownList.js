import React from 'react';

import './NavbarDropdownList.css';

const NavbarList = (props) => (
 
  <ul className={props.show ? "NavbarDropdownList ShowDropdown" : "NavbarDropdownList" }>
    <li><a href="#">HOME</a></li>
    <li><a href="#">ABOUT</a></li>
    <li><a href="#">SKILLS</a></li>
    <li><a href="#">GOALS</a></li>
    <li><a href="#">PROJECTS</a></li>
    <li><a href="#">CONTACT</a></li>
  </ul>
)

export default NavbarList;