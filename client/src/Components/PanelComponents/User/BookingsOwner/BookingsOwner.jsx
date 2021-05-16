/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserData, getPanelFilteredProperties, deleteBooking } from '../../../../Redux/Actions/index';
import TablePage from '../../TablePage/TablePage';

function BookingsOwner({
  panelUser, getUserData, match, deleteBooking,
}) {
  const { userId } = match.params;
  useEffect(() => {
    getUserData(userId);
  }, []);
  const {
    render, count, currentPage, selfEndpoint,
  } = panelUser;
  const { posts } = render;
  const list = () => {
    const data = [];
    posts.map((p) => p.visitDates.forEach((e) => {
      data.push({
        column1: e.date,
        displayLink: true,
        link: p.id,
        column2: p.post_name,
        column3: p.city,
        id: e.id,
      });
    }));
    return data;
  };
  return (
    <div>
      <TablePage
        deleteAction={deleteBooking}
        tableName="owner bookings"
        columns={['Date', 'Post', 'City']}
        data={list()}
        path="posts"
        buttonPath="bookingsowner"
        buttonRole="posts"
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

export default connect(mapStateToProps, mapDispatchToProps)(BookingsOwner);
