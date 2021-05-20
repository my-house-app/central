import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHouseUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FaRegCalendar } from 'react-icons/fa';
import style from './SideMenu.module.css';
import { useAuth0 } from "@auth0/auth0-react";
import { getUserDataService } from '../../../Services/properties.service';

function SideMenu() {
  const {user} = useAuth0()
  const [userSession, setUserSession] = useState({});

  let userId;
  if (user.sub.includes('google')){
    userId = user.sub.slice(14)
  } else {
    userId = user.sub.slice(6)
  }
  console.log(useAuth0())
  useEffect(() => {
    async function fetchUser(id) {
      const userInfo = await getUserDataService(id);
      setUserSession(userInfo.data.user);
    }
    fetchUser(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const isAdmin = userSession.type === 'Admin' || userSession.type === 'SuperAdmin';

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
              <NavLink to={`/panel/detail/user/${userId}`} activeStyle={{ color: 'var(--white)' }}>
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
              <NavLink to={`/panel/detail/user/${userId}`} activeStyle={{ color: 'var(--white)' }}>
                <h4>
                  <FontAwesomeIcon icon={faUser} />
                  {'  Mi perfil'}
                </h4>
              </NavLink>
            </div>
            <div className={style.divTitle}>
              <h3>Publicaciones</h3>
              <NavLink to={`/panel/user/${userId}/posts`} activeStyle={{ color: 'var(--white)' }}>
                <h4>
                  <FontAwesomeIcon icon={faHouseUser} />
                  {' Mis publicaciones'}
                </h4>
              </NavLink>
            </div>
            <div className={style.divTitle}>
              <h3>Reservas</h3>
              <NavLink to={`/panel/user/${userId}/bookings`} activeStyle={{ color: 'var(--white)' }}>
                <h4>
                  <FaRegCalendar />
                  {' Mis reservas'}
                </h4>
              </NavLink>
              <NavLink to={`/panel/user/${userId}/bookingsowner`} activeStyle={{ color: 'var(--white)' }}>
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

export default React.memo(SideMenu);

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
