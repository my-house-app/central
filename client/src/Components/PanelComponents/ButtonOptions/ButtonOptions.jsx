import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisH,
  faEye,
  faEdit,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import style from './ButtonOptions.module.css';

function ButtonOptions({ id, buttonPath, buttonRole }) {
  return (
    <div className={style.ctn}>
      <input type="checkbox" id={id} className={style.checkbox} />
      <label htmlFor={id} className={style.button}>
        <FontAwesomeIcon icon={faEllipsisH} />
      </label>
      <nav className={style.nav}>
        <NavLink to={`/panel/${buttonRole}/${buttonPath}/${id}`} className={style.NavLink}>
          <FontAwesomeIcon icon={faEye} />
          {' Show'}
        </NavLink>
        <NavLink to={`/panel/${buttonRole}/${buttonPath}/${id}/edit`} className={style.NavLink}>
          <FontAwesomeIcon icon={faEdit} />
          {' Edit'}
        </NavLink>
        <span className={style.NavLink}>
          <FontAwesomeIcon icon={faTrashAlt} />
          {' Delete'}
        </span>
      </nav>
    </div>
  );
}

export default ButtonOptions;
