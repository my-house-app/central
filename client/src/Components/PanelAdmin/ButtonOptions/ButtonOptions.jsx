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

function ButtonOptions({ id }) {
  return (
    <div className={style.ctn}>
      <input type="checkbox" id={id} className={style.checkbox} />
      <label htmlFor={id} className={style.button}>
        <FontAwesomeIcon icon={faEllipsisH} />
      </label>
      <nav className={style.nav}>
        <NavLink to="/admin/posts/show">
          <FontAwesomeIcon icon={faEye} />
          {' Show'}
        </NavLink>
        <NavLink to="/admin/posts/edit">
          <FontAwesomeIcon icon={faEdit} />
          {' Edit'}
        </NavLink>
        <NavLink to="/admin/posts/edit">
          <FontAwesomeIcon icon={faTrashAlt} />
          {' Delete'}
        </NavLink>
      </nav>
    </div>
  );
}

export default ButtonOptions;
