/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAdminBookingsData, getPanelFilteredProperties } from '../../../../Redux/Actions/index';
import TablePage from '../../TablePage/TablePage';

function BookingsAdmin({ panelAdmin, getAdminData, getPanelFilteredProperties }) {
  const {
    render, count, currentPage, selfEndpoint,
  } = panelAdmin;
  const { bookings } = render;
  useEffect(() => {
    getAdminData();
  }, []);
  const list = () => {
    const data = [];
    bookings?.forEach((e) => {
      data.push({
        column1: e.name,
        displayLink: true,
        link: e.postId,
        column2: e.post_name,
        column3: e.date,
        id: e.id,
      });
    });
    return data;
  };
  return (
    <div>
      <TablePage
        tableName="bookings"
        columns={['User owner', 'Post', 'Date']}
        data={list()}
        path="users"
        buttonPath="bookings"
        buttonRole="admin"
        count={count}
        paginaActual={currentPage}
        limit={10}
        functionNext={getPanelFilteredProperties}
        self={selfEndpoint}
        pagsPath="/panel/admin/bookings"
        deleteAction={(e) => console.log('estoy eliminando')}/// arreglar!!!
      />
    </div>
  );
}
const mapStateToProps = (state) => ({
  panelAdmin: state.panelAdmin,
});

const mapDispatchToProps = (dispatch) => ({
  getAdminData: () => dispatch(getAdminBookingsData()),
  getPanelFilteredProperties: () => dispatch(getPanelFilteredProperties()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingsAdmin);
