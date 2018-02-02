import React from 'react';

import './Logo.css';

import logo from '../../images/logo.png';

const Logo = () => (
  <div className="Logo">
    <img hspace="0" className="logo-img" src={logo} alt=""/>
    <span className="last-name">Lewandowski</span>
    <span>Damian</span>
  </div>
)

export default Logo;