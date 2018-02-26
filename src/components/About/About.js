import React, { Component } from 'react';

import SectionHeader from '../SectionHeader';

import './About.css';

class About extends Component {
  render() {
    return (
      <div id="about" className="About">
        <SectionHeader title="ABOUT ME" borderColor="darkblue">
          <p>22 years old self learning javascript enthusiast who loves coding.</p>
        </SectionHeader>

        <div className="about-item image-item">
          <img className="my-face" src="https://i.imgur.com/NKehwVZ.png" alt="face"/>
        </div>

        <div className="about-item text-item">
          <p>My first journey with web development began 2 years ago when a roommate showed me how to make my first website. After many projects, I finally encountered JavaScript and immediately fell in love with it. I enjoy writing both frontend and backend parts of application which makes me an ASPIRING full stack web developer.</p>
          <p className="about-other">In my free time I play video games, do some sports and cook. I also enjoy a good fantasy book and short horror stories.</p>
        </div>
      </div>
    )
  }
}

export default About;