import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faHouseUser,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
import style from './Nav.module.css';

function Nav() {
  const [state, setState] = useState(false);
  const scroll = document.getElementById('navPanel').getBoundingClientRect().top;
  window.onscroll = () => {
    const scrollWindow = window.scrollY;
    if (scroll < scrollWindow) setState(true);
    else setState(false);
  };
  return (
    <div className={`${style.ctn} ${state && style.ctnFixed}`} id="navPanel">
      <label>NAVIGATION</label>
      <div>
        <h3>Users Management</h3>
        <NavLink to="/admin/users">
          <h3>
            <FontAwesomeIcon icon={faUser} />
            {' Users'}
          </h3>
        </NavLink>
      </div>
      <div>
        <h3>Posts Management</h3>
        <NavLink to="/admin/posts">
          <h3>
            <FontAwesomeIcon icon={faHouseUser} />
            {' Posts'}
          </h3>
        </NavLink>
        <NavLink to="/admin/comments">
          <h3>
            <FontAwesomeIcon icon={faComments} />
            {' Comments'}
          </h3>
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
