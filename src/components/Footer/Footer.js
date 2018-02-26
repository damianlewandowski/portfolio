import React from 'react';

import FooterItem from './FooterItem';

import './Footer.css';

const Footer = () => (
  <footer className="Footer">

    <div className="Footer-group">
      <FooterItem
        header="Phone Number">
        <p>516-155-260</p>
      </FooterItem>
      <FooterItem
        header="Email">
        <p>damianlewandows@gmail.com</p>
      </FooterItem>
    </div>

    <div className="Footer-group">
      <FooterItem
        header="Github">
        <strong>
          <a 
            href="https://www.github.com/damianlewandowski" 
            target="_blank"
            rel="noopener noreferrer">https://www.github.com/damianlewandowski</a>
        </strong>
      </FooterItem>
      <FooterItem
        header="Codewars">
        <strong>
          <a 
            href="https://www.codewars.com/users/damianlewandowski" 
            target="_blank"
            rel="noopener noreferrer">https://www.codewars.com/users/damianlewandowski</a>
        </strong>
      </FooterItem>
    </div>
    
  </footer>
);

export default Footer;