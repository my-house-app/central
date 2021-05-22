import React from 'react';
import style from './Dashboard.module.css';
import { useSelector} from 'react-redux';

function Dashboard() {
  const { session } = useSelector((store) => store);
  
  const isAdmin = session.type === 'Admin' || session.type === 'SuperAdmin'

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

export default React.memo(Dashboard);
