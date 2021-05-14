/* eslint-disable no-shadow */
/* eslint-disable no-restricted-syntax */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ButtonsBar from '../../ButtonsBar/ButtonsBar';
import { getAllPostPanel, getAllPostPanelNext } from '../../../../Redux/Actions/index';
import TablePage from '../../TablePage/TablePage';
import style from './PostsAdmin.module.css';

function PostsAdmin({ renderPanel, AllPost }) {
  const {
    render, count, currentPage, selfEndpoint,
  } = renderPanel;
  useEffect(() => {
    if (!render.length) AllPost();
  }, []);
  const list = () => {
    const data = [];
    render.forEach((e) => {
      data.push({
        post_name: e.post_name, userId: e.userId, city: e.city, id: e.id,
      });
    });
    return data;
  };
  return (
    <div className={style.ctn}>
      <ButtonsBar />
      <TablePage
        tableName="posts"
        columns={['Title', 'User', 'City']}
        data={list()}
        path="users"
        buttonPath="posts"
        buttonRole="admin"
        count={count}
        paginaActual={currentPage}
        limit={10}
        functionNext={getAllPostPanelNext}
        self={selfEndpoint}
        pagsPath="panel/admin/posts"
      />
    </div>
  );
}
const mapStateToProps = (state) => ({
  renderPanel: state.renderPanel,
});

const mapDispatchToProps = (dispatch) => ({
  AllPost: () => dispatch(getAllPostPanel()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsAdmin);
//  {/* <table className={style.ctnList}>
//         <caption>POSTS</caption>
//         <thead>
//           <tr>
//             <th>TITLE</th>
//             <th>USER ID</th>
//             <th>CITY</th>
//           </tr>
//         </thead>
//         <tbody>
//           {list}
//         </tbody>
//       </table> */}
//       {/* {count && (
//         <Paginacion
//           count={count}
//           paginaActual={currentPage}
//           limit={10}
//           functionNext={getAllPostPanelNext}
//           self={selfEndpoint}
//           path="/admin/posts"
//         />
//       )} */}
/* count={count}
        paginaActual={currentPage}
        limit={10}
        functionNext={getAllPostPanelNext}
        self={selfEndpoint} */
