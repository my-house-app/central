import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faHouseUser,
  // faComments,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FaRegCalendar } from 'react-icons/fa';
import style from './SideMenu.module.css';
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector} from 'react-redux';
import { userSession } from "../../../Redux/Actions";



function SideMenu() {
  const {user} = useAuth0()
  const dispatch = useDispatch();
  const { session } = useSelector((store) => store);

  let userId;
  if (user.sub.includes('google')){
    userId = user.sub.slice(14)
    // console.log(user.sub);
  } else {
    userId = user.sub.slice(6)
  }
  // console.log(user);
  // console.log(userId)
  useEffect(() => {
    dispatch(userSession(userId));
    // console.log('SESSION', session)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isAdmin = session.type === 'Admin' || session.type === 'SuperAdmin'

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
          <label>NAVIGATION</label>
            <div className={style.divTitle}>
              <NavLink to={`/panel/detail/user/${userId}`} activeStyle={{ color: 'var(--white)' }}>
                <h4>
                  <FontAwesomeIcon icon={faUser} />
                  {'  My profile'}
                </h4>
              </NavLink>
            </div>
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
              <NavLink to={`/panel/admin/posts`} activeStyle={{ color: 'var(--white)' }}>
                <h4>
                  <FontAwesomeIcon icon={faHouseUser} />
                  {' Posts'}
                </h4>
              </NavLink>
              <NavLink to="/panel/admin/bookings" activeStyle={{ color: 'var(--white)' }}>
                <h4>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  {' Bookings'}
                </h4>
              </NavLink>
            </div>
        </div>
        }
        {!isAdmin && (
        <div className={`${style.ctn} ${state && style.ctnFixed}`} id="navPanel">
          <label>NAVIGATION</label>
            <div className={style.divTitle}>
              <NavLink to={`/panel/detail/user/${userId}`} activeStyle={{ color: 'var(--white)' }}>
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
        </div>
      )}
    </>
  );
}

export default SideMenu;

// function login(email, password, callback) {
//   const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = configuration;

//   const DBCONNECTION = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
//   const bcrypt = require('bcrypt');
//   const postgres = require('pg');

//   postgres.connect(DBCONNECTION, function (err, client, done) {
//     if (err) return callback(err);

//     const query = 'SELECT id, email, password FROM users WHERE email = $1';
//     client.query(query, [email], function (err, result) {

//       done();

//       if (err || result.rows.length === 0) return callback(err || new WrongUsernameOrPasswordError(email));

//       const user = result.rows[0];

//       bcrypt.compare(password, user.password, function (err, isValid) {
//         if (err || !isValid) return callback(err || new WrongUsernameOrPasswordError(email));

//         return callback(null, {
//           user_id: user.id,
//           nickname: user.nickname,
//           email: user.email
//         });
//       });
//     });
//   });
// }
