import React from 'react';
import Cards from '../Components/Cards/Cards';
import Filter from '../Components/Filter/Filter';
import Searchbar from '../Components/Searchbar/Searchbar';
import Order from '../Components/Order/Order';
import style from './Home.module.css';

export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.filterArea}>
        <div className={style.filterCont}>
          <h4>Fileters</h4>
          <Filter />
        </div>
      </div>
      <div className={style.main}>
        <div className={style.search_order}>
          <Order />
          <Searchbar />
        </div>
        <div className={style.cards}>
          <Cards />
        </div>
      </div>
    </div>
  );
}
