import React from 'react';

import logo from '../../images/logo.png';

import './Logo.css';

const Logo = () => (
  <div className="Logo">
    <img src={logo} alt="logo"/>
    <span>Lewandowski</span>
    <span>Damian</span>
  </div>
)

export default Logo;