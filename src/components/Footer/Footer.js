import React from 'react';

import './Footer.css';

const Footer = () => (
  <footer className="Footer">
    <div>
      <h3>Phone Number</h3>
      <strong>516-155-260</strong>
    </div>
    <div>
      <h3>Email</h3>
      <strong>damian.lewandow@gmail.com</strong>
    </div>
    <div>
      <h3>Github</h3>
      <strong>
        <a 
          href="https://www.github.com/damianlewandowski" 
          target="_blank"
          rel="noopener noreferrer">https://www.github.com/damianlewandowski</a>
      </strong>
    </div>
  </footer>
);

export default Footer;