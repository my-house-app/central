/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserData, getPanelFilteredProperties, deleteBooking } from '../../../../Redux/Actions/index';
import TablePage from '../../TablePage/TablePage';

function Bookings({
  panelUser, getUserData, match, deleteBooking,
}) {
  const { userId } = match.params;
  useEffect(() => {
    getUserData(userId);
  }, []);

  const list = () => {
    const data = [];
    visitDates?.forEach((e) => {
      data.push({
        column1: e.date,
        displayLink: true,
        link: e.postId,
        column2: e.post.post_name,
        column3: e.post.city,
        id: e.id,
      });
    });
    return data;
  };
  return (
    <div>
      <TablePage
        deleteAction={deleteBooking}
        tableName="bookings"
        columns={['Date', 'Post', 'City']}
        data={list()}
        path="post"
        buttonPath="booking"
        count={count}
        paginaActual={currentPage}
        limit={10}
        functionNext={getPanelFilteredProperties}
        self={selfEndpoint}
        pagsPath={`/panel/user/:${userId}/bookings`}
      />
    </div>
  );
}
const mapStateToProps = (state) => ({
  panelUser: state.panelUser,
});

const mapDispatchToProps = (dispatch) => ({
  getUserData: (userId) => dispatch(getUserData(userId)),
  deleteBooking: (booking) => dispatch(deleteBooking(booking)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);
