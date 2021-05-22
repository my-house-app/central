import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHouseUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FaRegCalendar } from 'react-icons/fa';
import style from './SideMenu.module.css';

function SideMenu({ session }) {
  
  const isAdmin = session.type === 'Admin' || session.type === 'SuperAdmin';

  const [state, setState] = useState(false);
  window.onscroll = () => {
    const scroll = (() => (document.getElementById('navPanel') ? document.getElementById('navPanel').getBoundingClientRect().top : document.getElementById('navPanel')))();
    const scrollWindow = window.scrollY;
    if (scroll < scrollWindow) setState(true);
    else setState(false);
  };
  return (
    <>
      {isAdmin && 
        <div className={`${style.ctn} ${state && style.ctnFixed}`} id="navPanel">
          <label>NAVEGACIÓN</label>
            <div className={style.divTitle}>
              <NavLink to={`/panel/detail/user/${session.id}`} activeStyle={{ color: 'var(--white)' }}>
                <h4>
                  <FontAwesomeIcon icon={faUser} />
                  {'  Mi perfil'}
                </h4>
              </NavLink>
            </div>
            <div className={style.divTitle}>
              <h3>Gestión de usuarios</h3>
              <NavLink to="/panel/admin/users" activeStyle={{ color: 'var(--white)' }}>
                <h4>
                  <FontAwesomeIcon icon={faUser} />
                  {' Usuarios'}
                </h4>
              </NavLink>
            </div>
            <div className={style.divTitle}>
              <h3>Gestión de publicaciones</h3>
              <NavLink to={`/panel/admin/posts`} activeStyle={{ color: 'var(--white)' }}>
                <h4>
                  <FontAwesomeIcon icon={faHouseUser} />
                  {' Publicaciones'}
                </h4>
              </NavLink>
              <NavLink to="/panel/admin/bookings" activeStyle={{ color: 'var(--white)' }}>
                <h4>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  {' Reservas'}
                </h4>
              </NavLink>
            </div>
        </div>
        }
        {!isAdmin && (
        <div className={`${style.ctn} ${style.ctnUser} ${state && style.ctnFixed}`} id="navPanel">
          <label>NAVEGACIÓN</label>
            <div className={style.divTitle}>
              <NavLink to={`/panel/detail/user/${session.id}`} activeStyle={{ color: 'var(--white)' }}>
                <h4>
                  <FontAwesomeIcon icon={faUser} />
                  {'  Mi perfil'}
                </h4>
              </NavLink>
            </div>
            <div className={style.divTitle}>
              <h3>Publicaciones</h3>
              <NavLink to={`/panel/user/${session.id}/posts`} activeStyle={{ color: 'var(--white)' }}>
                <h4>
                  <FontAwesomeIcon icon={faHouseUser} />
                  {' Mis publicaciones'}
                </h4>
              </NavLink>
            </div>
            <div className={style.divTitle}>
              <h3>Reservas</h3>
              <NavLink to={`/panel/user/${session.id}/bookings`} activeStyle={{ color: 'var(--white)' }}>
                <h4>
                  <FaRegCalendar />
                  {' Mis reservas'}
                </h4>
              </NavLink>
              <NavLink to={`/panel/user/${session.id}/bookingsowner`} activeStyle={{ color: 'var(--white)' }}>
                <h4>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  {' Reservas como propietario'}
                </h4>
              </NavLink>
            </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  session: state.session,
});

export default connect(mapStateToProps)(SideMenu);
