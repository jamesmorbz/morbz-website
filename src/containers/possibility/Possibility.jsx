import React from 'react';
import Puzzle from '../../assets/examplePuzzle.png';
import './possibility.css';

const Possibility = () => (
  <div className="home__possibility section__padding" id="possibility">
    <div className="home__possibility-image">
      <img src={Puzzle} alt="possibility" />
    </div>
    <div className="home__possibility-content">
      <h4>Sign Up Today</h4>
      <h1 className="gradient__text">Let Your True Potential Become Reality</h1>
      <p>Trajectories aren't linear neither is improvement. Learning something as complicated as chess brings about challenges not seen in anything else. Persistence is key.</p>
    </div>
  </div>
);

export default Possibility;
