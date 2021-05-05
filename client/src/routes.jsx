import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Components/NavBar/NavBar';

export default function MyHouseRoutes() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

        </Switch>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}
