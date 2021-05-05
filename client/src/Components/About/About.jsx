import React from 'react';
import style from './About.module.css';

function About() {
  return (
    <div className={style.ctn}>
      <div>
        <h1>My House-App</h1>
        <h5>Version 1.0.0</h5>
        <p>App developed with React, Redux, Node y Sequelize.</p>
      </div>
    </div>
  );
}

export default About;
