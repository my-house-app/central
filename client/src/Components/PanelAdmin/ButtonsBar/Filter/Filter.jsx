import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import style from './Filter.module.css';

function Filter() {
  return (
    <div className={style.container}>
      <label>
        <FontAwesomeIcon icon={faChevronCircleRight} />
        Filters
      </label>
    </div>
  );
}

export default Filter;
