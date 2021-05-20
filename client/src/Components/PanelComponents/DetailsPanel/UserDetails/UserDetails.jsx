import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { userSession } from '../../../../Redux/Actions/index';
import photo from '../../../../images/imageProfile.png';
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faCity, faUserTag } from '@fortawesome/free-solid-svg-icons';
import style from './UserDetails.module.css';
import { deleteUserService, getUserDataService } from '../../../../Services/properties.service';
import Loading from '../../../Auth0/Loading/loading';
import DetailButtonBar from '../../ButtonsBar/DetailButtonBar/DetailButtonBar';

function UserDetails({ session, userSession, id }) {
  const {user} = useAuth0()
  let sessionId;
  if (user.sub.includes('google')){
    sessionId = user.sub.slice(14)
  } else {
    sessionId = user.sub.slice(6)
  }

  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    userSession(sessionId);
    async function fetchUser (id) {
        const userInfo = await getUserDataService(id);
        setUserDetails(userInfo.data.user);
        setLoading(false);
    }
    fetchUser(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isAdmin = session.type === 'Admin' || session.type === 'SuperAdmin';

  if (!userDetails.photo) userDetails.photo = photo;
  if (!userDetails.street_number) userDetails.street_number = ' - ';
  if (!userDetails.city) userDetails.city = ' - ';
  if (!userDetails.phone) userDetails.phone = ' - ';
  if (!userDetails.type) userDetails.type = 'User';
  if (!userDetails.status) userDetails.status = 'Available';
  return (
    <>
    {!loading && 
      <>
        <DetailButtonBar rol={session.type} id={id} path='user' userId={sessionId} deleteAction={deleteUserService}/>
        <div className={style.ctn}>
          <div className={style.divImg}>
            <img src={userDetails.photo} alt='' className={style.img}/>
          </div>
          <div className={style.divInfo}>
            <h1>{userDetails.name}</h1>
            <h4>{`E-mail: ${userDetails.email}`}</h4>
            <h4><FontAwesomeIcon icon={faCity}/> {` Ciudad: ${userDetails.city}`}</h4>
            <h4><FontAwesomeIcon icon={faMapMarkerAlt}/> {` Dirección: ${userDetails.street_number}`}</h4>
            <h4><FontAwesomeIcon icon={faPhone}/> {` Teléfono móvil: ${userDetails.phone}`}</h4>
            {isAdmin && <h4><FontAwesomeIcon icon={faUserTag}/>{` Rol: ${userDetails.type}`}</h4>}
            <h4>{`Estado: ${userDetails.status}`}</h4>
          </div>
        </div>
      </>
    }
    {loading && <Loading />}
    </>
  );
}
const mapStateToProps = (state) => ({
  session: state.session,
});

const mapDispatchToProps = (dispatch) => ({
  userSession: (userId) => dispatch(userSession(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
