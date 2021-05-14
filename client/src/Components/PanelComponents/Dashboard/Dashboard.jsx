import React from 'react';
import style from './Dashboard.module.css';

function Dashboard() {
  return (
    <div className={style.ctn}>
      <label className={style.version}>Panel Admin</label>
      <h1 className={style.title}>Welcome to My House-App</h1>
      <p className={style.description}>
        Here you can manage the entire database on the page.
      </p>
    </div>
  );
}

export default Dashboard;
