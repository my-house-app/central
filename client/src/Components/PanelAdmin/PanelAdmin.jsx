import React from 'react';
import { Route } from 'react-router-dom';
import style from './PanelAdmin.module.css';
import Nav from './Nav/Nav';
import Header from './ButtonsBar/ButtonsBar';
import Dashboard from './Dashboard/Dashboard';
import Posts from './Posts/Posts';
import Users from './Users/Users';
import Comments from './Comments/Comments';

function PanelAdmin() {
  return (
    <div className={style.ctn}>
      <Route
        path="/admin"
        component={
          Nav
        }
      />
      <div className={style.divScroll}>
        <Route
          exact
          path="/admin"
          component={
            Dashboard
          }
        />
        <Route
          exact
          path="/admin/posts"
          component={
            Posts
          }
        />
        <Route
          exact
          path="/admin/users"
          component={
            Users
          }
        />
        <Route
          exact
          path="/admin/comments"
          component={
            Comments
          }
        />
      </div>
    </div>
  );
}

export default PanelAdmin;
