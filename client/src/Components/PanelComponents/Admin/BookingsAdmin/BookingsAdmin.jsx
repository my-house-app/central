/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from 'react-router-dom';
import { deleteBooking, getAdminBookingsData, userSession } from '../../../../Redux/Actions/index';
import TableButtonBar from '../../ButtonsBar/TableButtonBar/TableButtonBar';
import TablePage from '../../TablePage/TablePage';
import Paginacion from '../../../Paginacion/Paginacion';

function BookingsAdmin({
  userInfo, panelAdmin, getAdminData, deleteBooking,/*  getPanelFilteredProperties, */
}) {
  const {user} = useAuth0();
  let userId;
  if (user.sub.includes('google')){
    userId = user.sub.slice(14)
  } else {
    userId = user.sub.slice(6)
  }

  useEffect(() => {
    userSession(userId)
    getAdminData(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const isAdmin = userInfo.type === 'Admin' || userInfo.type === 'SuperAdmin';
  const {
    render, count, currentPage,
  } = panelAdmin;
  const { bookings } = render;
  const list = () => {
    const data = [];
    bookings?.forEach((e) => {
      data.push({
        column1: e.user.name,
        displayLink: true,
        link: e.postId,
        column2: e.post.post_name,
        column3: e.date,
        id: e.id,
      });
    });
    return data;
  };
  async function deleteAndGet(id, userId) {
    await deleteBooking(id)
    await getAdminData(userId)
  }
  return (
    <div>
      {isAdmin &&
        <>
          <TableButtonBar
            rol="admin"
            path="booking"
          />
          <TablePage
            deleteAction={deleteAndGet}
            tableName="bookings"
            columns={['Interested user', 'Post', 'Date']}
            data={list()}
            path="user"
            buttonPath="booking"
          />
           {
            count && (
              <Paginacion
                count={count}
                paginaActual={currentPage}
                limit={10}
                path="/panel/admin/users"
                functionNext={() => getAdminData(userId)}
              />
            )
          }
        </>
      }
        {!isAdmin && <Redirect to="/home" />}
    </div>
  );
}
const mapStateToProps = (state) => ({
  panelAdmin: state.panelAdmin,
  userInfo: state.session,
});

const mapDispatchToProps = (dispatch) => ({
  getAdminData: () => dispatch(getAdminBookingsData()),
  deleteBooking: (booking) => dispatch(deleteBooking(booking)),
  userSession: (id) => dispatch(userSession(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingsAdmin);
