import React from "react";
import PT from "prop-types";

import GithubSignInButton from "./GithubSignInButton";
import AdminSignIn from "./AdminSignIn";

import * as routes from "../../constants/routes";
import { auth } from "../../firebase";

import "./index.css";

class SignInForm extends React.Component {
  state = {
    student: true
  };
  render() {
    return (
      <section className="signIn">
        <section className="signInBody">
          <img
            className="nclogo"
            src="https://res.cloudinary.com/dq82ikfq4/image/upload/c_crop,h_1181,w_1181,x_0,y_0/c_fill,h_150,w_150,f_auto,dpr_2.0/ng9lrpfmurteqp87oau5.jpg"
          />
          <h1 className="signInTitle title">{"<"}NCBuddy /></h1>

          {this.state.student ? (
            <GithubSignInButton
              handleSignIn={this.handleGithubSignIn}
              toggleStudentSignIn={this.toggleStudentSignIn}
            />
          ) : (
            <AdminSignIn toggleStudentSignIn={this.toggleStudentSignIn} />
          )}
        </section>
      </section>
    );
  }

  handleGithubSignIn = () => {
    auth
      .signInWithGitHub()
      .then(authUser => {
        this.props.history.push(routes.home);
      })
      .catch(console.error);
  };

  toggleStudentSignIn = () => {
    this.setState({
      student: !this.state.student
    });
  };
}

SignInForm.propTypes = {
  history: PT.shape({
    push: PT.func.isRequired
  })
};

export default SignInForm;
