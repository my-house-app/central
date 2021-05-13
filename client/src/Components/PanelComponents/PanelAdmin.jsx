// import React from 'react';
// import { Route } from 'react-router-dom';
// import style from './PanelAdmin.module.css';
// import SideMenu from './SideMenu/SideMenu';
// import Dashboard from './Dashboard/Dashboard';
// import Posts from './Posts/Posts';
// import Users from './Users/Users';
// import Comments from './Comments/Comments';
// import DetailsPanel from './DetailsPanel/DetailsPanel';

// function PanelAdmin() {
//   return (
//     <div className={style.ctn}>
//       <Route
//         path="/admin"
//         component={
//           SideMenu
//         }
//       />
//       <div className={style.divScroll}>
//         <Route
//           exact
//           path="/admin"
//           component={
//             Dashboard
//           }
//         />
//         <Route
//           exact
//           path="/admin/posts"
//           component={
//             Posts
//           }
//         />
//         <Route
//           exact
//           path="/admin/users"
//           component={
//             Users
//           }
//         />
//         <Route
//           exact
//           path="/admin/comments"
//           component={
//             Comments
//           }
//         />
//         <Route
//           exact
//           path="/admin/:path/:id" // example the path: post, user, reservations, comments
//           component={
//             DetailsPanel
//           }
//         />
//       </div>
//     </div>
//   );
// }

// export default PanelAdmin;
