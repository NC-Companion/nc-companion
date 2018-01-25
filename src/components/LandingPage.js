import React from "react";
import PT from "prop-types";
import { Link } from "react-router-dom";

import { auth } from "../firebase";

const LandingPage = ({ history }) => {
  return (
    <div>
      <h1>Landing Page</h1>
      <GitHubSignIn history={history} />
      <Link to="/admin-sign-in">Sign In as admin</Link>
    </div>
  );
};

LandingPage.propTypes = {
  history: PT.shape({
    push: PT.func.isRequired
  })
};

class GitHubSignIn extends React.Component {
  signIn = () => {
    auth.signInWithGitHub().then(() => {
      this.props.history.push("/account");
    });
  };
  render() {
    return <button onClick={this.signIn}>Sign In with GitHub</button>;
  }
}

export default LandingPage;
