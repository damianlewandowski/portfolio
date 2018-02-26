import React, { Component } from 'react';

import SectionHeader from '../SectionHeader';

import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="Contact">
        <SectionHeader borderColor="#FF851B" title="CONTACT" />
        <form className="ContactForm" action="https://formspree.io/damian20lewandowski@gmail.com"
      method="POST">
          <div className="input-group">
            <label htmlFor="title">Title</label>
            <input id="title" name="title" type="text"/>
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="_replyto" type="email"/>
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      
    )
  }
}

export default Contact;