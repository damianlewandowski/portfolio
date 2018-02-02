import React from 'react';

import SectionHeader from '../SectionHeader';

import './Skills.css';

const Skills = () => {
  return (
    <div id="skills" className="Skills">
      <SectionHeader borderColor="dodgerblue" title="SKILLS" />
      <div className="Skills-items">
        <div className="Skills-item">
          <div className="circle">
            <h4>HTML</h4>
            <br/>
            <div>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
          </div>
        </div>
        <div className="Skills-item">
          <div className="circle">
            <h4>CSS</h4>
            <br/>
            <div>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
              <i className="fa fa-star-o"></i>
            </div>
          </div>
        </div>
        <div className="Skills-item">
          <div className="circle">
            <h4>JAVASCRIPT</h4>
            <br/>
            <div>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
              <i className="fa fa-star-o"></i>
              <i className="fa fa-star-o"></i>
            </div>
          </div>
        </div>
        <div className="Skills-item">
          <div className="circle">
            <h4>REACT</h4>
            <br/>
            <div>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
              <i className="fa fa-star-o"></i>
              <i className="fa fa-star-o"></i>
            </div>
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default Skills;