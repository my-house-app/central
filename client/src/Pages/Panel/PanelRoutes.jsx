import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../../Components/PanelComponents/Dashboard/Dashboard';
import PostsAdmin from '../../Components/PanelComponents/Admin/PostsAdmin/PostsAdmin';
import UsersAdmin from '../../Components/PanelComponents/Admin/UsersAdmin/UsersAdmin';
import BookingsAdmin from '../../Components/PanelComponents/Admin/BookingsAdmin/BookingsAdmin';
// import CommentsAdmin from '../../Components/PanelComponents/Admin/CommentsAdmin/CommentsAdmin';
import PostsUser from '../../Components/PanelComponents/User/PostsUser/PostsUser';
import BookingsUser from '../../Components/PanelComponents/User/BookingsUser/BookingsUser';
import BookingsOwner from '../../Components/PanelComponents/User/BookingsOwner/BookingsOwner';
import EditForm from '../../Components/PanelComponents/Edit/EditForm';
import CreateForm from '../../Components/PanelComponents/Create/CreateForm';
import DetailsPanel from '../../Components/PanelComponents/DetailsPanel/DetailsPanel';
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
            path="/panel/admin"
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
            path="/panel/admin/bookings"
            component={BookingsAdmin}
          />
          {/* <Route
            exact
            path="/panel/admin/comments"
            component={CommentsAdmin}
          /> */}
          <Route
            exact
            path="/panel/:path/:id" // example for any detail page paths: post, user, booking
            component={DetailsPanel}
          />
          <Route
            exact
            path="/panel/:path/:id/edit" // example for any detail page paths: post, user, booking
            component={EditForm}
          />
          <Route
            exact
            path="/panel/:path/create" // example for any detail page paths: post, user, booking
            component={CreateForm}
          />
          <Route
            exact
            path="/panel/user"
            component={Dashboard}
          />
          <Route
            exact
            path="/panel/user/:userId/posts"
            component={PostsUser}
          />
          <Route
            exact
            path="/panel/user/:userId/bookings"
            component={BookingsUser}
          />
          <Route
            exact
            path="/panel/user/:userId/bookingsowner"
            component={BookingsOwner}
          />
        </div>
      </div>
    </>
  );
}
