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
      "title": "Weather App",
      "wideImg": "https://i.imgur.com/U8Je88n.png",
      "link": "https://damianlewandowski.github.io/weatherapp-react/",      
    },
    "ProjectItem": {
    "shortDescription": "You can use this awesome application for checking up weather anywhere in the world."
    },
    "ProjectItemDetail": {
      "gitLink": "https://github.com/damianlewandowski/weatherapp-react",      
      "longDescription": "After having finished Tyler Mcginnis' React course(which is definitely the best one I've encountered so far) I was given a task to write React application using openweathermap API and react-router. I decided not to use the latter to make it harder. Handling state was very challenging, I should start looking into Redux library.",
      "technologies": [
        "html",
        "css",
        "javascript",
        "react",
        "axios",
        "openweathermap API"
      ]
    },
  },
  {
    "shared": {
      "title": "PHP todo list",
      "img": "https://i.imgur.com/dGboXXh.png",
      "wideImg": "https://i.imgur.com/39Cybvl.png",
      "link": "https://thebest-todolist.herokuapp.com",      
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
      "title": "Snake",
      "img": "https://i.imgur.com/ds5oc2d.png",
      "wideImg": "https://i.imgur.com/mYj2QrN.png",
      "link": "https://damianlewandowski.github.io/snake-game",      
    },
    "ProjectItem": {
    "shortDescription": "The best game ever. Written using \"new\" HTML5 element called canvas and ECMAScript6 class."
    },
    "ProjectItemDetail": {
      "gitLink": "https://github.com/damianlewandowski/snake-oop",      
      "longDescription": "One day I wanted to write some game. When I was a kid I used to play snake on my old nokia phone, so I decided to write something similiar. In this project my main goal was to get comfortable with ES6 object oriented programing. I had to rewrite this project many times to create the best possible encapsulation and abstraction. I had a lot of fun writing this one.",
      "technologies": [
        "html",
        "css",
        "javascript, canvas",
      ]
    },
  },
  {
    "shared": {
      "title": "Recipe Box",
      "img": "https://i.imgur.com/IX2aAeO.png",
      "wideImg": "https://i.imgur.com/844PZro.png",
      "link": "https://damianlewandowski.github.io/recipe-box-react/",      
    },
    "ProjectItem": {
    "shortDescription": "Simple application in which you can add, edit or delete your recipes."
    },
    "ProjectItemDetail": {
      "gitLink": "https://github.com/damianlewandowski/snake-oop",      
      "longDescription": "This is a project idea from freecodecamp, I had a lot of trouble with this one because of managing the state. I tried it many times but it always somehow ended up very messy. Eventually I managed to come up with solution, which felt very satisfying. I decided to keep a lot of states in top component to avoid a lot of useless code responsible only for transfering data from one component to another. In the end I think it was very entertaining and I intend to develop this project further with usage of MongoDB, some backend for user registration and authorization. All of that to allow users look at each other's Recipe Boxes",
      "technologies": [
        "html",
        "css",
        "javascript",
        "react"
      ]
    },
  },  
]

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0, display: "none" }
};

 // Only one of these objects will be displayed in ProjectItemDetail
// component based on which project the viewer wants to see.
const projectItemDetail = ProjectsData.map((project) => {
  return  {
    title:        project["shared"]["title"],
    img:          project["shared"]["wideImg"],
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
    this.setState({ activeProject: {} })
  }
  
  render() {
    const projectItems = ProjectsData.map((project) => {
      return  <ProjectItem
                key={project["shared"]["title"]}
                title={project["shared"]["title"]}
                img={project["shared"]["wideImg"]}
                link={project["shared"]["link"]}
                description={project["ProjectItem"]["shortDescription"]}
                changeActiveProject={this.changeActiveProject}
               />
    });
    
    return (
      <div id="projects" className="Projects">
        <Transition 
          in={!this.state.activeProject.title} 
          timeout={400}>
          {(state) => (
            <div style={{
              ...transitionStyles[state],
            }}>
              <SectionHeader 
                borderColor="#1E90FF" 
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
            timeout={400}>
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