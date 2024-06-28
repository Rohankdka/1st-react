import React from "react";
import './Home.css'

const Home = (props) => {
  return (
    <div className="home-container">
    <div className="content">
      <img src= {props.photo} alt="Pizza" className="pizza-image" />
      <div className="description">
        <h2>{props.text}</h2>
      </div>
    </div>
  </div>

  );
};

export default Home;