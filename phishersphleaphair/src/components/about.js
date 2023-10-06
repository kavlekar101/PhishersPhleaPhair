import React from "react";
import "./about.css";

const About = () => {
  
  return (
    <div>
      <h1>
        About Us
      </h1>
      <h2 class="names">Shashwat Rao (CEO):</h2>
      <div>
        <img src={require('../images/redFish.png')} width={50} height={50} alt="red" />
        <p class="bio">I love phishing!</p>
      </div>
      <h2 class="names">Emil Pang (CTO):</h2>
      <div>
      <img src={require('../images/blueFish.png')} width={50} height={50} alt="blue" />
        <p class="bio">I love phishing as well!</p>
      </div>
      <h2 class="names">Gurbaksh Gill (CFO):</h2>
      <div>
      <img src={require('../images/yellowFish.png')} width={100} height={50} alt="yellow" />
        <p class="bio">Guess what! I love phishing too!</p>
      </div>
    </div>
  );
};
  
export default About;
