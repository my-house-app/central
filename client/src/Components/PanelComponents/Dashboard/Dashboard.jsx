import React from 'react';
import style from './Dashboard.module.css';

function Dashboard() {
  const isAdmin = false;
  return (
    <div className={style.ctn}>
      {isAdmin && (
        <>
          <h3 className={style.title}>Welcome to My House-App</h3>
          <p className={style.description}>
            Here you can manage the entire database on the page.
          </p>
        </>
      )}
      {!isAdmin && (
        <>
          <h3 className={style.title}>Welcome to your personal area</h3>
          <p className={style.description}>
            Here you can manage your account setting, posts and more.
          </p>
        </>
      )}
    </div>
  );
}

export default Dashboard;
