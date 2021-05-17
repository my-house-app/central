import React, { useEffect } from 'react';
import style from './Dashboard.module.css';
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector} from 'react-redux';
import { getUserData } from "../../../Redux/Actions";

function Dashboard() {
  const {user} = useAuth0()
  const dispatch = useDispatch();
  const { render } = useSelector((store) => store.panelUser);
  
  const userId = user.sub.slice(6);
  
  useEffect(() => {
    dispatch(getUserData(userId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isAdmin = render.type === 'Admin' || render.type === 'SuperAdmin'

  return (
    <div className={style.ctn}>
      {isAdmin && (
        <>
          <h3 className={style.title}>Welcome to My House-App</h3>
          <p className={style.description}>
            Here you can manage the entire database on the page.
          </p>
        </>
      )}
      {!isAdmin && (
        <>
          <h3 className={style.title}>Welcome to your personal area</h3>
          <p className={style.description}>
            Here you can manage your account setting, posts and more.
          </p>
        </>
      )}
    </div>
  );
}

export default Dashboard;
