import React from 'react';

import home from "../../images/home.jpg"

import './Home.css';

const style = {
  background: `url(${home}) no-repeat center center fixed`
}

const Home = () => (
  <div id="home" className="Home" style={style}>
    <div className="info">
      <h4>DAMIAN LEWANDOWSKI</h4>
      <h1>ASPIRING WEB DEVELOPER</h1>
    </div>
  </div>
)

export default Home;