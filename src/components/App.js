import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PT from "prop-types";

import * as routes from "../constants/routes";

import withAuthentication from "./auth/withAuthentication";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Account from "./Account";
import AdminSignIn from "./AdminSignIn";
import Calendar from "./Calendar";
import Home from "./Home";
import NewsStories from "./NewsStories";
import Lecture from "./Lecture";
import SignInForm from "./SignInForm";
import NotFound from './Not-found';
import CreateEvent from './CreateEvent';

class App extends React.Component {
  render() {
    const { authUser } = this.props;
    return (
      <BrowserRouter>
        <section className="main">
          <section className="level-right">
           <span> <Navbar authUser={authUser} /></span>
          </section>
          <section className="bodyContent isDanger">
            <Switch>
              <Route
                path={routes.account}
                render={() => <Account authUser={authUser} />}
              />
              <Route
                path={routes.create_event}
                render={() => <CreateEvent authUser={authUser} />}
              />
              <Route
                exact
                path={routes.home}
                render={() => <Home authUser={authUser} />}
              />
              <Route exact path={routes.calendar} 
                render={() => <Calendar authUser={authUser} />}
              />
              <Route exact path={routes.lecture} 
                render={() => <Lecture authUser={authUser} />} 
              />
              <Route exact path={routes.news} render={() => <NewsStories />} />
              <Route exact path={routes.root} render={routerProps => (!authUser ? <SignInForm history={routerProps.history} />
               : <Redirect to={routes.home}/> )}
              />
              <Route path={routes.notFound} component={NotFound} />
            </Switch>
          </section>
        </section>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  authUser: PT.object
};

export default withAuthentication(App);
