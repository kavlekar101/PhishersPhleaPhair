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
        <p class="bio">Shashwat leads Phishers, redefining pet fish ownership. With a passion for aquatic life, they ensure responsible and enriching experiences for fish enthusiasts. Shashwat has made Phishers a trusted name in pet fish care, offering essential resources and fostering a strong bond between people and their underwater companions. Join us in their mission to make pet fish ownership a source of joy and connection.</p>
      </div>
      <h2 class="names">Emil Pang (CTO):</h2>
      <div>
      <img src={require('../images/blueFish.png')} width={50} height={50} alt="blue" />
        <p class="bio">Emil is the tech genius behind Phishers, leading innovations in pet fish care. With a deep affinity for aquatic life and cutting-edge technology, they drive the company's digital transformation. Under Emil's guidance, Phishers provides pet fish enthusiasts with user-friendly digital solutions and smart pet care products. Their expertise ensures seamless and enriching fish-keeping experiences for our customers. Join us in Emil's mission to merge technology and aquatic companionship for a brighter future in pet fish care.</p>
      </div>
      <h2 class="names">Gurbaksh Gill (CFO):</h2>
      <div>
      <img src={require('../images/yellowFish.png')} width={100} height={50} alt="yellow" />
        <p class="bio">Phishers's financial steward, Gurbaksh, ensures sound fiscal management and sustainable growth. With a passion for financial excellence and a commitment to responsible investments, they guide the company's economic strategy. Gurbaksh has established Phishers as a financially resilient leader in the pet fish industry, supporting our mission of providing quality pet fish care. Join us in Gurbaksh's mission to maintain financial health and further the cause of responsible and enriching pet fish ownership.</p>
      </div>
    </div>
  );
};
  
export default About;
