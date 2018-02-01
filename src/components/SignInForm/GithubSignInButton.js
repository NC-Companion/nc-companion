import React from "react";
import PT from "prop-types";

const GithubSigninButton = ({ toggleStudentSignIn, handleSignIn }) => (
  <section className="studentSignIn">
    <section onClick={handleSignIn}>
      <p className="field">
        <a className="button" id="signInButton">
          <span>Sign in with GitHub</span>
          <span className="icon">
            <i className="fab fa-github" />
          </span>
        </a>
      </p>
    </section>
    <span className="admin button is-text" onClick={toggleStudentSignIn}>
      Sign in as admin
    </span>
  </section>
);

GithubSigninButton.propTypes = {
  toggleStudentSignIn: PT.func.isRequired,
  handleSignIn: PT.func.isRequired
};

export default GithubSigninButton;
