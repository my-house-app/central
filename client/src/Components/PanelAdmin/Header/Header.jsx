import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import style from './Header.module.css';

function Header() {
  return (
    <div className={style.ctn}>
      <NavLink to="/admin">
        <label>
          <FontAwesomeIcon icon={faArrowLeft} />
          {' Dashboard'}
        </label>
      </NavLink>
    </div>
  );
}

export default Header;
