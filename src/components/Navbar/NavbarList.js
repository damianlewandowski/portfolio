import React from 'react';
import propTypes from 'prop-types';

import './NavbarList.css';

const NavbarList = (props) => (
  <ul className="NavbarList">
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

NavbarList.propTypes = {
  smoothScroll: propTypes.func,
  anchors: propTypes.array,
}

export default NavbarList;