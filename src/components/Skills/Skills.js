import React from 'react';

import SectionHeader from '../SectionHeader';

import './Skills.css';

const Skills = () => {
  return (
    <div id="skills" className="Skills">
      <SectionHeader borderColor="#4f4f4f" title="SKILLS" />
      <div className="Skills-items">
        <div className="Skills-item">
          <div className="circle html">
            <h4>HTML 5</h4>
            <div>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </div>
        </div>
        <div className="Skills-item">
          <div className="circle css">
            <h4>CSS 3</h4>
            <div>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </div>
        </div>
        <div className="Skills-item">
          <div className="circle javascript">
            <h4>JAVASCRIPT</h4>
            <div>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </div>
        </div>
        <div className="Skills-item">
          <div className="circle react">
            <h4>REACT</h4>
            <div>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default Skills;