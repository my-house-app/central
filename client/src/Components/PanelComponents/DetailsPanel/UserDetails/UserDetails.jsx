import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { userSession } from '../../../../Redux/Actions/index';
import photo from '../../../../images/imageProfile.png';
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faMapMarkerAlt,
  faCity,
} from '@fortawesome/free-solid-svg-icons';
import style from './UserDetails.module.css';

function UserDetails({ session, userSession }) {
  const {user} = useAuth0()
  let userId;
  if (user.sub.includes('google')){
    userId = user.sub.slice(14)
  } else {
    userId = user.sub.slice(6)
  }

  useEffect(() => {
    userSession(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!session.photo) session.photo = photo;
  if (!session.street_number) session.street_number = 'None';
  if (!session.phone) session.phone = 'None';
  return (
    <div className={style.ctn}>
    <div className={style.divImg}>
      <img src={session.photo} alt='' className={style.img}/>
    </div>
    <div className={style.divInfo}>
      <h1>{session.name}</h1>
      <label>{`email: ${session.email}`}</label>
      <h4><FontAwesomeIcon icon={faCity}/> {`City: ${session.city}`}</h4>
      <h4><FontAwesomeIcon icon={faMapMarkerAlt}/> {`Street number: ${session.street_number}`}</h4>
      <h4><FontAwesomeIcon icon={faPhone}/> {`phone: ${session.phone}`}</h4>
      <label>{`Status: ${session.status}`}</label>
    </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  session: state.session,
});

const mapDispatchToProps = (dispatch) => ({
  userSession: (userId) => dispatch(userSession(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
