import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
import CreateNews from "./CreateNews";
import Lecture from "./Lecture";
import SignInForm from "./SignInForm";

class App extends React.Component {
  render() {
    const { authUser } = this.props;
    return (
      <BrowserRouter>
        <section className="main">
          <section className="level">
            <Navbar authUser={authUser} />
          </section>
          <section className="bodyContent">
            <Switch>
              <Route
                path={routes.account}
                render={() => <Account authUser={authUser} />}
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
              <Route
                exact
                path={routes.root}
                render={routerProps => (
                  <SignInForm history={routerProps.history} />
                )}
              />
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
