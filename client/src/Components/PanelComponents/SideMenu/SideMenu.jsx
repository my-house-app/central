import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faHouseUser,
  faComments,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FaRegCalendar } from 'react-icons/fa';
import style from './SideMenu.module.css';

function SideMenu() {
  const isAdmin = true;
  const userId = 'bc6b5eff-d880-4048-8c37-24e446a1962b';
  const [state, setState] = useState(false);
  window.onscroll = () => {
    const scroll = (() => (document.getElementById('navPanel') ? document.getElementById('navPanel').getBoundingClientRect().top : document.getElementById('navPanel')))();
    const scrollWindow = window.scrollY;
    if (scroll < scrollWindow) setState(true);
    else setState(false);
  };
  return (
    <div className={`${style.ctn} ${state && style.ctnFixed}`} id="navPanel">
      <label>NAVIGATION</label>
      {isAdmin && (
        <>
          <div className={style.divTitle}>
            <h3>Users Management</h3>
            <NavLink to="/panel/admin/users" activeStyle={{ color: 'var(--white)' }}>
              <h4>
                <FontAwesomeIcon icon={faUser} />
                {' Users'}
              </h4>
            </NavLink>
          </div>
          <div className={style.divTitle}>
            <h3>Posts Management</h3>
            <NavLink to="/panel/admin/posts" activeStyle={{ color: 'var(--white)' }}>
              <h4>
                <FontAwesomeIcon icon={faHouseUser} />
                {' Posts'}
              </h4>
            </NavLink>
            {/* <NavLink to="/panel/admin/comments" activeStyle={{ color: 'var(--white)' }}>
            <h3>
              <FontAwesomeIcon icon={faComments} />
              {' Comments'}
            </h3>
          </NavLink> */}
            <NavLink to="/panel/admin/bookings" activeStyle={{ color: 'var(--white)' }}>
              <h4>
                <FontAwesomeIcon icon={faCalendarAlt} />
                {' Bookings'}
              </h4>
            </NavLink>
          </div>
        </>
      )}
      {!isAdmin && (
        <>
          <div className={style.divTitle}>
            <NavLink to={`/panel/user/${userId}`} activeStyle={{ color: 'var(--white)' }}>
              <h4>
                <FontAwesomeIcon icon={faUser} />
                {'  My profile'}
              </h4>
            </NavLink>
          </div>
          <div className={style.divTitle}>
            <h3>Posts</h3>
            <NavLink to={`/panel/user/${userId}/posts`} activeStyle={{ color: 'var(--white)' }}>
              <h4>
                <FontAwesomeIcon icon={faHouseUser} />
                {' My posts'}
              </h4>
            </NavLink>
          </div>
          <div className={style.divTitle}>
            <h3>Bookings</h3>
            <NavLink to={`/panel/user/${userId}/bookings`} activeStyle={{ color: 'var(--white)' }}>
              <h4>
                <FaRegCalendar />
                {' My bookings'}
              </h4>
            </NavLink>
            <NavLink to={`/panel/user/${userId}/bookingsowner`} activeStyle={{ color: 'var(--white)' }}>
              <h4>
                <FontAwesomeIcon icon={faCalendarAlt} />
                {' Bookings as owner'}
              </h4>
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
}

export default SideMenu;
