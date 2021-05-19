import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import style from './Filter.module.css';
import FilterPosts from './FilterPosts/FilterPosts';


function Filter() {
    const [openFilter, setOpenFilter] = useState(false);
  console.log('renderizando Filter:');

  function closeFilters() {
    console.log('cerrando filter')
    document.getElementById('filters').className = 'closeFilter';
  }
  // useEffect(() => {   
  //   setOpenFilter(open);
  // }, []);

  return (
    <div className={style.ctn}>
      <div id="filters" >
        <button type="button" className={style.btnFilter} onClick={closeFilters}>
          <FontAwesomeIcon icon={faChevronCircleRight} />
          {' Filters '}
        </button>
        <div>
          <FilterPosts />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Filter);
