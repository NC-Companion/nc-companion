import React from "react";
import PT from "prop-types";
import { withRouter } from "react-router-dom";

import { firebase } from "../../firebase";

const withAuthorization = authCondition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          this.props.history.push("/");
        }
      });
    }
    render() {
      const { authUser } = this.props;
      return authUser ? <Component authUser={authUser} /> : null;
    }
  }
  WithAuthorization.propTypes = {
    authUser: PT.object
  };
  return withRouter(WithAuthorization);
};

export default withAuthorization;

export const authCondition = authUser => !!authUser;
