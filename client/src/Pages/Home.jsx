import React from 'react';
import Cards from '../Components/Cards/Cards';
import style from './Home.module.css';

export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.filterArea}>
        <div className={style.filterCont}>
          <h4>Fileters</h4>
        </div>
      </div>
      <div className={style.main}>
        <div className={style.search_order}>
          <h4>Select order</h4>
          <h4>SearchBar</h4>
          {/* <SearchBar/> */}
          {/* <Order/> */}
        </div>
        <div className={style.cards}>
          <Cards />
        </div>
      </div>
    </div>
  );
}
