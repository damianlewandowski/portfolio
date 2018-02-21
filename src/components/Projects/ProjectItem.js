import React from 'react';
import propTypes from 'prop-types';

import './ProjectItem.css';

const ProjectItem = (props) => (
  <li className="ProjectItem">
    <div className="rect">
      <h2 className="ProjectItem-title">{props.title}</h2>
      <button onClick={props.changeActiveProject.bind(this, props.title)}>
      <img src={props.img} alt=""/>
      </button>
      <div className="ProjectItem-description">
        {props.description}
        <br/>
        <div className="ProjectItem-links">
          <button
            className="ProjectItem-description-link" 
            onClick={props.changeActiveProject.bind(this, props.title)}>Read More...</button>
          <a 
            className="ProjectItem-description-link"
            href={props.link}
            target="_blank">PROJECT LINK</a>
        </div>
        
      </div>
    </div>
  </li>
);

ProjectItem.propTypes = {
  title: propTypes.string,
  link: propTypes.string,
  description: propTypes.string,
}

export default ProjectItem;