import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../images/logoHorizontal-6pt.svg';
import AuthNav from '../Auth0/Auth-nav/Auth-nav';
import style from './NavBar.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import { getGoogleUserData, userSession } from '../../Redux/Actions/index';

function NavBar({ userInfo, getGoogleUser, userSession }) {
  const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    if (isAuthenticated && !Object.keys(userInfo).length) {
        if (user.sub.substring(0,6) === 'google'){
          const googleUser = {
            name: user.name,
            email: user.email,
            externalId: user.sub
          }
          getGoogleUser(googleUser);
        } else {
          const userId = user.sub.slice(6);
          userSession(userId) 
        }
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <nav>
      <NavLink to="/" className={style.link}>
        <img className={style.logo} src={logo} alt="logo" />
      </NavLink>
      <div className={style.menu}>
        <NavLink to="/about" className={style.link} activeClassName={style.active}>About</NavLink>
        <NavLink to="/create" className={style.link} activeClassName={style.active}>Publica</NavLink>
        <NavLink to="/panel/user" className={style.link} activeClassName={style.active}>Perfil</NavLink>
        <AuthNav />
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.session,
});

const mapDispatchToProps = (dispatch) => ({
  userSession: (id) => dispatch(userSession(id)),
  getGoogleUser: (googleUser) => dispatch(getGoogleUserData(googleUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);