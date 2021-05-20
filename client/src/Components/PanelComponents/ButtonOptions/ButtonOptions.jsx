/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisH,
  faEye,
  faEdit,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import style from './ButtonOptions.module.css';

function ButtonOptions({
  id, buttonPath, deleteAction, msg, userId
}) {
  return (
    <div className={style.ctn}>
      <input type="checkbox" id={id} className={style.checkbox} />
      <label htmlFor={id} className={style.button}>
        <FontAwesomeIcon icon={faEllipsisH} />
      </label>
      <nav className={style.nav}>
        <NavLink to={`/panel/detail/${buttonPath}/${id}`} className={style.NavLink}>
          <FontAwesomeIcon icon={faEye} />
          {' Ver'}
        </NavLink>
        <NavLink to={`/panel/${buttonPath}/${id}/edit`} className={style.NavLink}>
          <FontAwesomeIcon icon={faEdit} />
          {' Editar'}
        </NavLink>
        <span className={style.NavLink} onClick={() => { 
          const resp = window.confirm(`¿Quieres eliminar ${buttonPath} con id ${id}?`)
          if(resp) deleteAction(id, userId);}}>
          <FontAwesomeIcon icon={faTrashAlt} />
          {' Eliminar'}
        </span>
      </nav>
    </div>
  );
}
const mapStateToProps = (state) => ({
  msg: state.message,
});

export default connect(mapStateToProps)(ButtonOptions);
