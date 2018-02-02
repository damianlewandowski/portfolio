import React from 'react';
import propTypes from 'prop-types';

import './NavbarDropdownList.css';

const NavbarDropdownList = (props) => (
  <ul 
    className={
      props.show 
      ? "NavbarDropdownList dropdown-active"
      : "NavbarDropdownList"}>
    {props.anchors.map((anchor) => (
      <li key={anchor}>
        <a onClick={() => (
          props.smoothScroll(anchor)
        )}>
          {anchor.toUpperCase()}
        </a>
      </li>
    ))}
  </ul>
)

NavbarDropdownList.propTypes = {
  smoothScroll: propTypes.func,
  show: propTypes.bool,
  anchors: propTypes.array,
}

export default NavbarDropdownList;