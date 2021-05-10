import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Components/NavBar/NavBar';
import Details from './Components/Details/Details';
import About from './Components/About/About';
import Signin from './Components/Signin/Signin';

export default function MyHouseRoutes() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route
            path="/post/:id"
            render={(routerPops) => <Details routerProps={routerPops} />}
          />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route
            path="/about"
            component={About}
          />
          <Route path="/signin" component={Signin} />
        </Switch>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}
