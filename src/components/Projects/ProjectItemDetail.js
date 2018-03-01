import React, { Component } from 'react';
import propTypes from 'prop-types';

import SectionHeader from '../SectionHeader';

import './ProjectItemDetail.css';

class ProjectItemDetail extends Component {
  render() {
    return (
      <div className="ProjectItemDetail">

        <div className="ProjectItemDetail-header">
          <SectionHeader 
            borderColor="#4f4f4f" 
            title={this.props.title} />
          <button title="Show Projects" onClick={this.props.showProjects}>
            <i className="fa fa-undo" aria-hidden="true"></i>
          </button>
        </div>
        
        <a className="project-image" href={this.props.link} target="_blank">
          <img src={this.props.img} alt=""/>
        </a>

        <div className="technologies">
          <h3 className="technologies-header">Technologies:</h3>
          <ul>
            {this.props.technologies 
              ? this.props.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
              ))
              : null
            }
          </ul>
        </div>
        
        <div className="description">
          <h3>Description:</h3>
          <p>{this.props.description}</p>
        </div>

        <div className="ProjectItemDetail-bottom">
          <button className="project-link" onClick={this.props.showProjects}><i className="fa fa-undo"></i>SHOW PROJECTS</button>    
          <a className="project-link" href={this.props.gitLink} target="_blank"><i className="fab fa-github"></i>GITHUB</a>
          <a className="project-link" href={this.props.link} target="_blank"><i className="fa fa-link"></i>PROJECT LINK</a>
        </div>

      </div>
    );
  }
}

ProjectItemDetail.propTypes = {
  title: propTypes.string,
  link: propTypes.string,
  description: propTypes.string,
  showProjects: propTypes.func,
  technologies: propTypes.array,
  gitLink: propTypes.string,
}

export default ProjectItemDetail;