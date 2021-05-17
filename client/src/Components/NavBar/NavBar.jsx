import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logoHorizontal-6pt.svg';
import AuthNav from '../Auth0/Auth-nav/Auth-nav';
import style from './NavBar.module.css';

function NavBar() {
  return (
    <nav>
      <NavLink to="/" className={style.link}>
        <img className={style.logo} src={logo} alt="logo" />
      </NavLink>
      <div className={style.menu}>
        <NavLink to="/about" className={style.link} activeClassName={style.active}>About</NavLink>
        <NavLink to="/panel/user" className={style.link} activeClassName={style.active}>Perfil</NavLink>
        <AuthNav />
      </div>
    </nav>
  );
}

export default NavBar;
