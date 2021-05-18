import React from 'react';
import style from './NotFound.module.css';

function NotFound() {
  return (
    <div className={style.ctn}>
      <div>
        <h1 className={style.title}>Page Not Found</h1>
      </div>
    </div>
  );
}

export default NotFound;
