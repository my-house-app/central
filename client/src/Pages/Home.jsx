import React from 'react';
import { useSelector } from 'react-redux';
import Cards from '../Components/Cards/Cards';
import style from './Home.module.css';
import Filter from '../Components/Filter/Filter';
import Searchbar from '../Components/Searchbar/Searchbar';
import Paginacion from '../Components/Paginacion/Paginacion';

export default function Home() {
  const limit = 10;
  const {
    count, currentPage: page,
  } = useSelector((store) => store);

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
          <h4>Select order</h4>
          {/* <h4>SearchBar</h4> */}
          <Searchbar />
          {/* <Order/> */}
        </div>
        {count && <Paginacion count={count} paginaActual={page} limit={limit} />}
        <div className={style.cards}>
          <Cards />
        </div>
        <div>
          {count && <Paginacion count={count} paginaActual={page} limit={limit} />}
        </div>
      </div>
    </div>
  );
}
