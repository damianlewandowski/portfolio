import React from 'react';

import './Logo.css';

import logo from '../../images/logo.png';

const Logo = () => (
  <div className="Logo">
    <img className="logo-img" src={logo} alt="Logo"/>
    <span className="last-name">Lewandowski</span>
    <span>Damian</span>
  </div>
)

export default Logo;