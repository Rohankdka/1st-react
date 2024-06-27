import React from "react";
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
    <div className="content">
      <img src="/pizz.jpg" alt="Pizza" className="pizza-image" />
      <div className="description">
        <h2>Delicious Pizza</h2>
        <p>
          Enjoy our freshly baked pizza topped with a variety of fresh ingredients, 
          savory sauces, and melty cheese. Perfect for a cozy dinner, a fun party, or 
          a quick lunch, our pizza is sure to satisfy your cravings!
        </p>
      </div>
    </div>
  </div>
  );
};

export default Home;