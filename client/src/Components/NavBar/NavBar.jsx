import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import style from './NavBar.module.css';

function NavBar() {
  // eslint-disable-next-line no-unused-vars
  const hla = 'hola';
  return (
    <nav className={style.ctn}>
      <div className={style.divH3}>
        <NavLink exact to="/" activeStyle={{ borderBottom: '1px solid white' }}>
          <h3 className={style.h3}>
            <FontAwesomeIcon icon={faHome} />
            { ' Home' }
          </h3>
        </NavLink>
        <NavLink to="/about" activeStyle={{ borderBottom: '1px solid white' }}>
          <h3 className={style.h3}>
            <FontAwesomeIcon icon={faAddressCard} />
            { ' About' }
          </h3>
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
