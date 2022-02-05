import React from 'react';
import Feature from '../../components/feature/Feature';
import './intro.css';

const BulletPointData = [
  {
    title: 'No Pressure',
    text: 'Do as much or as little as you want. Whenever you want. For whatever your end goal is and if you\'re not sure yet we can help you set achievable targets',
  },
  {
    title: 'Appealing to All',
    text: 'Lessons and Puzzles will always have the aim to push you within your current reasonable limits. You will never feel out of your depth regardless of the difficulty',
  },
  {
    title: 'What\'s the Point?',
    text: 'Chess training and practice supports the development of skills like problem solving, decision making, critical thinking, planning, and even creative thinking',
  },
  {
    title: 'Backed by Experts',
    text: 'Backed by Experts who know what they\'re doing',
  },
];

const Intro = () => (
  <div className="home__features section__padding" id="features">
    <div className="home__features-heading">
      <h1 className="gradient__text">Cut the Complexity, <br/> Learn Your Way.</h1>
      <p>Improving your chess has never been so simple</p>
    </div>
    <div className="home__features-container">
      {BulletPointData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Intro;
