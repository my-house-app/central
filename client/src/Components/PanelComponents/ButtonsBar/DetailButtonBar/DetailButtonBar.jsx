import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import style from '../ButtonsBar.module.css';
import '../../globalFilters.css';

function DetailButtonBar({ rol, id, path, userId, deleteAction }) {
  return (
    <div className={style.ctn}>
      <div className={style.elementsCtn}>
        <Link to={`/panel/${rol}`} onClick={() => {
           // !window.confirm(`¿Quieres descartar los cambios de ${element} con id ${id}?`) && console.log('no hagas nada');
          }}
        >
          <label>
            <FontAwesomeIcon icon={faArrowLeft} />
            {' Panel'}
          </label>
        </Link>
        <div className={style.btnCtn}>
            <button type="button" className={style.btnBar} onClick={() => { 
                const resp = window.confirm(`¿Quieres eliminar ${path} con id ${id}?`)
                if(resp) deleteAction(id, userId);}}
            >
                <FontAwesomeIcon icon={faTrashAlt} />
                {'  Eliminar'}
            </button>
            <Link to={`/panel/${path}/${id}/edit`} className={style.btnBar}>
                <FontAwesomeIcon icon={faEdit} />
                {' Editar'}
            </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailButtonBar;
