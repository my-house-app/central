import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserData } from '../../../../Redux/Actions/index';
import { useAuth0 } from "@auth0/auth0-react";

function UserDetails({ panelUser, getUserData }) {
  const {user} = useAuth0()
  let userId;
  if (user.sub.includes('google')){
    userId = user.sub.slice(14)
  } else {
    userId = user.sub.slice(6)
  }

  useEffect(() => {
    getUserData(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { render } = panelUser;
  return (
    <h3>
     email: {render.email}
     name: {render.name}
    </h3>
  );
}
const mapStateToProps = (state) => ({
  panelUser: state.panelUser,
});

const mapDispatchToProps = (dispatch) => ({
  getUserData: (userId) => dispatch(getUserData(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
