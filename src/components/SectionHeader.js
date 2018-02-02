import React from 'react';
import PropTypes from 'prop-types';

import './SectionHeader.css';

const SectionHeader = (props) => (
  <header className="SectionHeader">
    <h3 style={{borderBottom: `5px solid ${props.borderColor}`}}>{props.title}</h3>
    {props.children}
  </header>
)

SectionHeader.propTypes = {
  borderColor: PropTypes.string,
  title: PropTypes.string,
};

export default SectionHeader;