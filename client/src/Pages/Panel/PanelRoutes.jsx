import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../../Components/PanelComponents/Dashboard/Dashboard';
import PostsAdmin from '../../Components/PanelComponents/Admin/PostsAdmin/PostsAdmin';
import UsersAdmin from '../../Components/PanelComponents/Admin/UsersAdmin/UsersAdmin';
import CommentsAdmin from '../../Components/PanelComponents/Admin/CommentsAdmin/CommentsAdmin';
import DetailsPanelAdmin from '../../Components/PanelComponents/Admin/DetailsPanelAdmin/DetailsPanelAdmin';
import style from './Panel.module.css';
import SideMenu from '../../Components/PanelComponents/SideMenu/SideMenu';

export default function PanelRoutes() {
  return (
    <>
      <div className={style.ctn}>
        <Route
          path="/panel"
          component={SideMenu}
        />
        <div className={style.divScroll}>
          <Route
            exact
            path="/panel"
            component={Dashboard}
          />
          <Route
            exact
            path="/panel/admin/posts"
            component={PostsAdmin}
          />
          <Route
            exact
            path="/panel/admin/users"
            component={UsersAdmin}
          />
          <Route
            exact
            path="/panel/admin/comments"
            component={CommentsAdmin}
          />
          <Route
            exact
            path="/panel/admin/:path/:id" // example for any detail page paths: post, user, booking
            component={DetailsPanelAdmin}
          />
          <Route
            exact
            path="/panel/admin/:path/:id/edit" // example for any detail page paths: post, user, booking
            component={DetailsPanelAdmin}
          />
          {/*  <Route
          exact
          path="/panel/user/:userId/posts"
          component={PostsUser}
        />
        <Route
          exact
          path="/panel/user/:userId/Bookings"
          component={BookingsUser}
        />
        <Route
          exact
          path="/panel/user/:userId/:path/:id" example for any detail path: posts, bookings, pofile
          component={DetailsPanelUser}
        /> */}
        </div>
      </div>
    </>
  );
}
