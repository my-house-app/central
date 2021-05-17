import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cards from '../../Components/Cards/Cards';
import Filter from '../../Components/Filter/Filter';
import Searchbar from '../../Components/Searchbar/Searchbar';
import Order from '../../Components/Order/Order';
import style from './Home.module.css';
import Paginacion from '../../Components/Paginacion/Paginacion';
import { getAvailableFilteredPropierties } from '../../Redux/Actions/index';

export default function Home() {
  const limit = 10;
  const {
    count, currentPage: page,
  } = useSelector((store) => store);
  const dispatch = useDispatch();
  return (
    <div className={style.home}>
      <div className={style.filterArea}>
        <div className={style.filterCont}>
          <Filter />
        </div>
      </div>
      <div className={style.main}>
        <div className={style.search_order}>
          <Order />
          <Searchbar />
        </div>
        {count && (
          <Paginacion
            count={count}
            paginaActual={page}
            limit={limit}
            functionNext={() => dispatch(getAvailableFilteredPropierties())}// pasarle el id user
          />
        )}

        <div className={style.cards}>
          <Cards />
        </div>

        <div>
          {count && (
            <Paginacion
              count={count}
              paginaActual={page}
              limit={limit}
              functionNext={() => dispatch(getAvailableFilteredPropierties())}// pasarle el id user
            />
          )}
        </div>
      </div>
    </div>
  );
}
