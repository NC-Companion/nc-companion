import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PT from "prop-types";

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
import SignIn from './Sign-in';

class App extends React.Component {
  render() {
    const { authUser } = this.props;
    return (
      <BrowserRouter>
        <section className="main">
          <section className='level'>
            <Navbar authUser={authUser} />
          </section>
          <section className='bodyContent'>
            <Switch>
              <Route exact path="/" render={routerProps => (<LandingPage history={routerProps.history} />)} />
              <Route path="/account" render={() => <Account authUser={authUser} />} />
              <Route path="/admin-sign-in" component={AdminSignIn} />
              <Route exact path="/home" render={() => <Home />} />
              <Route exact path="/calendar" render={() => <Calendar />} />
              <Route exact path="/lecture" render={() => <Lecture />} />
              <Route exact path="/news" render={() => <NewsStories />} />
              <Route exact path="/sign-in" render={() => <SignIn />} />
            
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
