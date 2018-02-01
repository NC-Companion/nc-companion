import React from 'react';
import PT from "prop-types";

const WelcomeMessage = (props) => (
  <section className="defaultPadding">
    <h2 className="title homePageGreeting">
      <span className="has-text-danger">Hello</span> {props.authUser.displayName ? props.authUser.displayName.split(' ')[0] : <span>Northcoder. <a target="_blank" href="https://github.com/settings/profile" className=" has-text-weight-light is-italic is-size-7">Set your display name on Github.</a></span>}
    </h2>
    <h3 className="subtitle is-size-4">You are on Week 3.</h3>
  </section>
)

WelcomeMessage.propTypes = {
authUser: PT.object
};

export default WelcomeMessage;