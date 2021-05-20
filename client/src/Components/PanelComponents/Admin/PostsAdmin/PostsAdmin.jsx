/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from 'react-router-dom';
import { getAdminData, deletePost, userSession } from '../../../../Redux/Actions/index';
import TableButtonBar from '../../ButtonsBar/TableButtonBar/TableButtonBar';
import TablePage from '../../TablePage/TablePage';
import Paginacion from '../../../Paginacion/Paginacion';

function PostsAdmin({
  userInfo, panelAdmin, userSession, getAdminData, deletePost,
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
  getAdminData: () => dispatch(getAdminData()),
  deletePost: (post) => dispatch(deletePost(post)),
  userSession: (id) => dispatch(userSession(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsAdmin);
