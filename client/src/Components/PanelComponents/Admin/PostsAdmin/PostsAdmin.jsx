/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getAdminData, deletePost } from '../../../../Redux/Actions/index';
import TableButtonBar from '../../ButtonsBar/TableButtonBar/TableButtonBar';
import TablePage from '../../TablePage/TablePage';
import Paginacion from '../../../Paginacion/Paginacion';

function PostsAdmin({
  session, panelAdmin, getAdminData, deletePost,
}) {
 
  useEffect(() => {
    getAdminData(session.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const isAdmin = session.type === 'Admin' || session.type === 'SuperAdmin';
  const {
    render, count, currentPage,
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
        column3: e.status,
        id: e.id,
      });
    });
    return data;
  };
  async function deleteAndGet(id, userId) {
    await deletePost(id)
    await getAdminData(userId)
  }
  return (
    <div>
      {isAdmin &&
        <>
          <TableButtonBar
            rol="admin"
            path="post"
          />
          <TablePage
            tableName="posts"
            columns={['Title', 'User', 'Status']}
            data={list()}
            path="user"
            buttonPath="post"
            deleteAction={deleteAndGet}
          />
          {
            count && (
              <Paginacion
                count={count}
                paginaActual={currentPage}
                limit={10}
                path="/panel/admin/users"
                functionNext={() => getAdminData(session.id)}
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
  session: state.session,
});

const mapDispatchToProps = (dispatch) => ({
  getAdminData: (id) => dispatch(getAdminData(id)),
  deletePost: (post) => dispatch(deletePost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsAdmin);
