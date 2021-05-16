/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserData, deletePost } from '../../../../Redux/Actions/index';
import TablePage from '../../TablePage/TablePage';

function PostsUser({
  panelUser, getUserData, match, deletePost,
}) {
  const {
    render, count, currentPage, selfEndpoint,
  } = panelUser;
  const { posts } = render;
  const { userId } = match.params;
  useEffect(() => {
    getUserData(userId);
  }, []);
  const list = () => {
    const data = [];
    posts.forEach((e) => {
      data.push({
        column1: new Intl.NumberFormat('de-DE').format(e.price),
        displayLink: true,
        link: e.id,
        column2: e.post_name,
        column3: e.city,
        id: e.id,
      });
    });
    return data;
  };
  return (
    <div>
      <TablePage
        deleteAction={deletePost}
        tableName="posts"
        columns={['Price', 'Title', 'City']}
        data={list()}
        path="post"
        buttonPath="post"
        count={count}
        paginaActual={currentPage}
        limit={10}
        // functionNext={getPanelFilteredProperties}
        self={selfEndpoint}
        pagsPath={`/panel/user/:${userId}/posts`}
      />
    </div>
  );
}
const mapStateToProps = (state) => ({
  panelUser: state.panelUser,
});

const mapDispatchToProps = (dispatch) => ({
  getUserData: (userId) => dispatch(getUserData(userId)),
  deletePost: (post) => dispatch(deletePost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsUser);
