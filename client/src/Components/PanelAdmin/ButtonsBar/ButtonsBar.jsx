import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus, faSlidersH, faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Filter from './Filter/Filter';
import style from './ButtonsBar.module.css';
import '../globalFilters.css';

function openFilters() {
  document.getElementById('filters').className = 'openFilter';
}

function Header() {
  return (
    <div className={style.ctn}>
      <div className={style.elementsCtn}>
        <NavLink to="/admin">
          <label>
            <FontAwesomeIcon icon={faArrowLeft} />
            {' Dashboard'}
          </label>
        </NavLink>
        <div className={style.btnCtn}>
          <NavLink to="/admin" className={style.btnBar}>
            <FontAwesomeIcon icon={faPlus} />
            {' Create'}
          </NavLink>
          <span className={style.btnBar}>
            <FontAwesomeIcon icon={faSlidersH} onClick={openFilters} />
            {' Filter'}
          </span>
        </div>
      </div>
      <Filter />
    </div>
  );
}

export default Header;
