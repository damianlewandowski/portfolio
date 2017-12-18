import React from 'react';

import './SectionHeader.css';

const SectionHeader = (props) => (
  <header className="SectionHeader">
    <h3 style={{borderBottom: `5px solid ${props.borderColor}`}}>ABOUT ME</h3>
    {props.children}
  </header>
)

export default SectionHeader;