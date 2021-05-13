import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ButtonsBar from '../ButtonsBar/ButtonsBar';
import { getAllPostPanel, getAllPostPanelNext } from '../../../Redux/Actions/index';
import Paginacion from '../../Paginacion/Paginacion';
import PostCard from './PostCard/PostCard';
import style from './Posts.module.css';

function Posts({ renderPanel, AllPost }) {
  const {
    render, count, currentPage, selfEndpoint,
  } = renderPanel;
  useEffect(() => {
    if (!render) AllPost();
  }, []);
  const list = render?.map((e) => (
    <PostCard
      name={e.post_name}
      userId={e.userId}
      city={e.city}
      id={e.id}
    />
  ));
  return (
    <div className={style.ctn}>
      <ButtonsBar />
      <table className={style.ctnList}>
        <caption>POSTS</caption>
        <thead>
          <tr>
            <th>TITLE</th>
            <th>USER ID</th>
            <th>CITY</th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
      {count && (
        <Paginacion
          count={count}
          paginaActual={currentPage}
          limit={10}
          functionNext={getAllPostPanelNext}
          self={selfEndpoint}
          path="/admin/posts"
        />
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  renderPanel: state.renderPanel,
});

const mapDispatchToProps = (dispatch) => ({
  AllPost: () => dispatch(getAllPostPanel()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
