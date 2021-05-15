/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserData, getPanelFilteredProperties } from '../../../../Redux/Actions/index';
import TablePage from '../../TablePage/TablePage';

function BookingsOwner({ panelUser, getUserData, match }) {
  const {
    render, count, currentPage, selfEndpoint,
  } = panelUser;
  const { bookingsOwner } = render;
  const { userId } = match.params;
  useEffect(() => {
    getUserData(userId);
  }, []);
  const list = () => {
    const data = [];
    bookingsOwner.forEach((e) => {
      data.push({
        column1: e.date,
        displayLink: true,
        link: e.postId,
        column2: e.post_name,
        column3: e.name,
        id: e.id,
      });
    });
    return data;
  };
  return (
    <div>
      <TablePage
        tableName="bookingsOwner"
        columns={['Date', 'Post', 'User interested']}
        data={list()}
        path="posts"
        buttonPath="bookingsOwner"
        buttonRole="user"
        count={count}
        paginaActual={currentPage}
        limit={10}
        functionNext={getPanelFilteredProperties}
        self={selfEndpoint}
        pagsPath={`/panel/user/:${userId}/bookingsOwner`}
      />
    </div>
  );
}
const mapStateToProps = (state) => ({
  panelUser: state.panelUser,
});

const mapDispatchToProps = (dispatch) => ({
  getUserData: (userId) => dispatch(getUserData(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingsOwner);
