import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PT from "prop-types";

import withAuthentication from "./auth/withAuthentication";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Account from "./Account";
import AdminSignIn from "./AdminSignIn";
import Header from "./Header";
import Calendar from "./Calendar";
import Home from "./Home";
import NewsStories from "./NewsStories";
import CreateNews from "./CreateNews";
import Lecture from "./Lecture";

class App extends React.Component {
  render() {
    const { authUser } = this.props;
    return (
      <BrowserRouter>
        <section className="main">
          <Navbar authUser={authUser} />
          <Switch>
            <Route
              exact
              path="/"
              render={routerProps => (
                <LandingPage history={routerProps.history} />
              )}
            />
            <Route
              path="/account"
              render={() => <Account authUser={authUser} />}
            />
            <Route path="/admin-sign-in" component={AdminSignIn} />
            <Route exact path="/home" render={() => <Home />} />
            <Route exact path="/calendar" render={() => <Calendar />} />
            <Route exact path="/lecture" render={() => <Lecture />} />
            <Route exact path="/news" render={() => <NewsStories />} />
          </Switch>
        </section>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  authUser: PT.object
};

export default withAuthentication(App);
