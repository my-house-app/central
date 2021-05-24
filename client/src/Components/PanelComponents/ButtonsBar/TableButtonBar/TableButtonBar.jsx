import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus, faSlidersH, faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Filter from '../Filter/Filter';
import style from '../ButtonsBar.module.css';
import '../../globalFilters.css';

function openFilters() {
  //console.log('openFilter TableButtonBar')
  document.getElementById('filters').className = 'openFilter';
}

function TableButtonBar({ rol, path }) {  
  return (
    <div className={style.ctn}>
      <div className={style.elementsCtn}>
        <NavLink to={`/panel/${rol}`}>
          <label>
            <FontAwesomeIcon icon={faArrowLeft} />
            {' Panel'}
          </label>
        </NavLink>
        <div className={style.btnCtn}>
          {((rol !== 'user' && path !== 'post') && path !== 'booking') && 
            <NavLink to={`/panel/${path}/create`} className={style.btnBar}>
              <FontAwesomeIcon icon={faPlus} />
              {' Crear'}
            </NavLink>}
          {path === 'post' && 
            <button type="button" className={style.btnBar} onClick={openFilters}>
            <FontAwesomeIcon icon={faSlidersH} />
            {' Filtrar'}
          </button>
          }
        </div>
      </div>
      <Filter />
    </div>
  );
}

export default React.memo(TableButtonBar);
