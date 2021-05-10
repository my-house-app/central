import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logoHorizontal-6pt.png';
import style from './NavBar.module.css';

function NavBar() {
  return (
    <nav>
      <NavLink to="/" className={style.link}>
        <img className={style.logo} src={logo} alt="logo" />
      </NavLink>
      <div className={style.menu}>
        <NavLink to="/about" className={style.link} activeClassName={style.active}>About</NavLink>
        <NavLink to="/signin" className={style.signin} activeClassName={style.active}>Sign In</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
