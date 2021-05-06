import React from 'react';
import Cards from '../Components/Cards/Cards';
import './Home.css';

export default function Home() {
  return (
    <div className="body2">
      <div className="cuerpo">
        <div className="filter-area">
          filtro
        </div>
        <div className="main">
          <div className="main-encabezado">
            {/* <SearchBar/> */}
          </div>
          <div>
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
}
