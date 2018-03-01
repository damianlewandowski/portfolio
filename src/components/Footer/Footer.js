import React from 'react';

import FooterItem from './FooterItem';

import './Footer.css';

const Footer = () => (
  <footer className="Footer">

    <div>
      <i className="fa fa-phone"></i>
      <p>516-155-260</p>        
    </div>

    <div>
      <i className="fa fa-envelope"></i>
      <p>damianlewandows@gmail.com</p>        
    </div>
  
    <div>
      <i className="fab fa-github"></i>
      <a 
          href="https://www.github.com/damianlewandowski" 
          target="_blank"
          rel="noopener noreferrer">https://www.github.com/damianlewandowski</a>
    </div>

    <div>
      <i className="fab fa-js"></i>
      <a 
        href="https://www.codewars.com/users/damianlewandowski" 
        target="_blank"
        rel="noopener noreferrer">https://www.codewars.com/users/damianlewandowski</a>
    </div>

    <div>
      <i className="fab fa-free-code-camp"></i>
      <strong>
        <a
          href="https://www.freecodecamp.org/damianlewandowski" 
          target="_blank"
          rel="noopener noreferrer">https://www.freecodecamp.org/damianlewandowski</a>
        </strong>
      </div>
      
    
  </footer>
);

export default Footer;