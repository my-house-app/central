/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteUser, getAdminUsersData, getPanelFilteredProperties } from '../../../../Redux/Actions/index';
import TablePage from '../../TablePage/TablePage';
import Paginacion from '../../../Paginacion/Paginacion';

function PostsAdmin({
  panelAdmin, match, getAdminData, deleteUser, getPanelFilteredProperties,
}) {
  const {
    render, count, currentPage, selfEndpoint,
  } = panelAdmin;
  const { users } = render;
  const { userId: adminId } = match.params;
  useEffect(() => {
    getAdminData(adminId);
  }, []);
  const list = () => {
    const data = [];
    users?.forEach((e) => {
      data.push({
        column1: e.email,
        displayLink: true,
        link: e.userId,
        column2: e.name,
        column3: e.phone,
        id: e.id,
      });
    });
    return data;
  };
  return (
    <div>
      <TablePage
        tableName="users"
        columns={['E-mail', 'User name', 'Phone']}
        data={list()}
        path="user"
        buttonPath="user"
        deleteAction={deleteUser}/// arreglar!!!
      />
      {/* <Paginacion /> */}
      {
        count && (
          <Paginacion
            count={count}
            paginaActual={currentPage}
            limit={10}
            path="/panel/admin/users"
            functionNext={() => getAdminData(adminId)}
          />
        )
      }
    </div>
  );
}
const mapStateToProps = (state) => ({
  panelAdmin: state.panelAdmin,
});

const mapDispatchToProps = (dispatch) => ({
  deleteUser: () => dispatch(deleteUser()),
  getAdminData: (adminId) => dispatch(getAdminUsersData(adminId)),
  getPanelFilteredProperties: () => dispatch(getPanelFilteredProperties()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsAdmin);
