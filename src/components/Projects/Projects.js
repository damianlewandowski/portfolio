import React, { Component } from 'react';
import propTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';

import SectionHeader from '../SectionHeader';
import ProjectItem from './ProjectItem';
import ProjectItemDetail from './ProjectItemDetail';

import "./Projects.css";

const ProjectsData = [
  {
    "shared": {
      "title": "PHP todo list2",
      "img": "https://i.imgur.com/dGboXXh.png",
      "link": "https://thebest-todolist.herokuapp.com/",      
    },
    "ProjectItem": {
    "shortDescription": "Just a basic todo list app written in PHP using mysql database and mysqli connector."
    },
    "ProjectItemDetail": {
      "gitLink": "https://github.com/damianlewandowski/todo-list-php",      
      "longDescription": "Another todo list app. When I started writing this app I didn't really have any prior knowledge about PHP. I learnt how to connect to database using mysqli connector, that there are a lot of ways for communicating with database in this language and that for some reason people hate this language.",
      "technologies": [
        "php",
        "html",
        "css",
        "javascript, ajax",
      ]
    }
  },
  {
    "shared": {
      "title": "PHP todo list22",
      "img": "https://i.imgur.com/dGboXXh.png",
      "link": "https://thebest-todolist.herokuapp.com/",      
    },
    "ProjectItem": {
    "shortDescription": "Just a basic todo list app written in PHP using mysql database and mysqli connector."
    },
    "ProjectItemDetail": {
      "gitLink": "https://github.com/damianlewandowski/todo-list-php",      
      "longDescription": "Another todo list app. When I started writing this app I didn't really have any prior knowledge about PHP. I learnt how to connect to database using mysqli connector, that there are a lot of ways for communicating with database in this language and that for some reason people hate this language.",
      "technologies": [
        "php",
        "html",
        "css",
        "javascript, ajax",
      ]
    }
  },
  {
    "shared": {
      "title": "PHP todo list222",
      "img": "https://i.imgur.com/dGboXXh.png",
      "link": "https://thebest-todolist.herokuapp.com/",      
    },
    "ProjectItem": {
    "shortDescription": "Just a basic todo list app written in PHP using mysql database and mysqli connector."
    },
    "ProjectItemDetail": {
      "gitLink": "https://github.com/damianlewandowski/todo-list-php",      
      "longDescription": "Another todo list app. When I started writing this app I didn't really have any prior knowledge about PHP. I learnt how to connect to database using mysqli connector, that there are a lot of ways for communicating with database in this language and that for some reason people hate this language.",
      "technologies": [
        "php",
        "html",
        "css",
        "javascript, ajax",
      ]
    }
  },
  {
    "shared": {
      "title": "PHP todo list22222",
      "img": "https://i.imgur.com/dGboXXh.png",
      "link": "https://thebest-todolist.herokuapp.com/",      
    },
    "ProjectItem": {
    "shortDescription": "Just a basic todo list app written in PHP using mysql database and mysqli connector."
    },
    "ProjectItemDetail": {
      "gitLink": "https://github.com/damianlewandowski/todo-list-php",      
      "longDescription": "Another todo list app. When I started writing this app I didn't really have any prior knowledge about PHP. I learnt how to connect to database using mysqli connector, that there are a lot of ways for communicating with database in this language and that for some reason people hate this language.",
      "technologies": [
        "php",
        "html",
        "css",
        "javascript, ajax",
      ]
    }
  }
]

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0, display: "none" }
};

const defaultStyles = {
  background: 'green'
}

 // Only one of these objects will be displayed in ProjectItemDetail
// component based on which project the viewer wants to see.
const projectItemDetail = ProjectsData.map((project) => {
  return  {
            title:        project["shared"]["title"],
            img:          project["shared"]["img"],
            link:         project["shared"]["link"],
            description:  project["ProjectItemDetail"]["longDescription"],
            technologies: project["ProjectItemDetail"]["technologies"],
            gitLink:      project["ProjectItemDetail"]["gitLink"],
  }
})

class Projects extends Component {
  constructor() {
    super();
    
    this.state = {
      // Project shown in ProjectItemDetail component.
      activeProject: {},
    }

    this.changeActiveProject = this.changeActiveProject.bind(this);
    this.showProjects        = this.showProjects.bind(this);
  }

  // Change active project detail view
  changeActiveProject(title) {
    const activeProject = projectItemDetail.find((project) => {
      if(project["title"] === title) {
        return project;
      }
        return null;
    })
    this.props.smoothScroll("projects-anchor");        
    this.setState({ activeProject });
  }

  // From the ProjectItemDetail view show back the Projects component
  showProjects() {
    this.props.smoothScroll("projects-anchor");        
    // Why do I even have to do this?
    // This scrollIntoView method is broken!
    setTimeout(() => (
      this.setState({
        activeProject: {}
      })
    ), 1);
  }
  
  render() {
    const projectItems = ProjectsData.map((project) => {
      return  <ProjectItem
                key={project["shared"]["title"]}
                title={project["shared"]["title"]}
                img={project["shared"]["img"]}
                link={project["shared"]["link"]}
                description={project["ProjectItem"]["shortDescription"]}
                changeActiveProject={this.changeActiveProject}
               />
    });
    
    return (
      <div id="projects" className="Projects">
        <Transition 
          in={!this.state.activeProject.title} 
          timeout={0}>
          {(state) => (
            <div style={{
              ...transitionStyles[state],
            }}>
              <SectionHeader 
                borderColor="#4f4f4f" 
                title="PROJECTS" />

                  <ul className="Projects-items">
                    {projectItems}
                  </ul>
            </div>
          )}
        </Transition>

        {
          <Transition
            in={!!this.state.activeProject.title} 
            timeout={0}>
            {(state) => (
              <div style={{
                ...transitionStyles[state],
              }}>
                <ProjectItemDetail
                  title={this.state.activeProject.title}
                  link={this.state.activeProject.link}
                  gitLink={this.state.activeProject.gitLink}
                  img={this.state.activeProject.img}
                  description={this.state.activeProject.description}
                  technologies={this.state.activeProject.technologies}
                  showProjects={this.showProjects}
                />
              </div>
          )}
          </Transition>}
                
      </div>
          )}
};

Projects.propTypes = {
  smoothScroll: propTypes.func,
}

export default Projects;