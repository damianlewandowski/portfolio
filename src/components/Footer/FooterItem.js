import React from 'react';
import propTypes from 'prop-types';

const FooterItem = (props) => (
  <div className="FooterItem">
      <h3>{props.header}</h3>
      {props.children}
  </div>
)

FooterItem.propTypes = {
  header: propTypes.string,
  content: propTypes.string,
}

export default FooterItem;