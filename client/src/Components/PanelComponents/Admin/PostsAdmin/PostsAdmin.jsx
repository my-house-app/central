/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAdminData, deletePost, getPanelFilteredProperties } from '../../../../Redux/Actions/index';
import TablePage from '../../TablePage/TablePage';
import Paginacion from '../../../Paginacion/Paginacion';

function PostsAdmin({
  panelAdmin, getAdminData, deletePost, getPanelFilteredProperties,
}) {

  const { userId: adminId } = match.params;
  useEffect(() => {
    console.log('Im here');
    getAdminData();
  }, []);
  const {
    render, count, currentPage, selfEndpoint,
  } = panelAdmin;
  const { posts } = render;
  // esta publicacion no tiene dueño 5447c567-cd6e-437f-a1be-d4da07bec36c
  // salta un error
  const list = () => {
    const data = [];
    posts?.forEach((e) => {
      data.push({
        column1: e.post_name,
        displayLink: true,
        link: e.userId,
        column2: e.user?.name,
        column3: e.city,
        id: e.id,
      });
    });
    return data;
  };
  return (
    <div>
      <TablePage
        tableName="posts"
        columns={['Title', 'User', 'City']}
        data={list()}
        path="user"
        buttonPath="post"
        deleteAction={deletePost}
      />
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
  getAdminData: () => dispatch(getAdminData()),
  deletePost: (post) => dispatch(deletePost(post)),
  getPanelFilteredProperties: () => dispatch(getPanelFilteredProperties()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsAdmin);
