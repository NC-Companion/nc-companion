import React from "react";

import { auth } from "../firebase";

class AdminSignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    auth
      .signInAdmin(email, password)
      .then(() => {
        // TODO: change this to future admin account page
        this.props.history.push("/account");
      })
      .catch(error => {
        if (error.code === "auth/user-not-found") {
          this.props.history.push("/");
        }
      });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { email, password } = this.state;
    // TODO: add regular expression for email address
    const isInvalid = email === "" || password === "";
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          onChange={this.handleEmailChange}
          placeholder="Email address"
          value={email}
        />
        <input
          type="password"
          onChange={this.handlePasswordChange}
          placeholder="Password"
          value={password}
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>
      </form>
    );
  }
}

export default AdminSignIn;
