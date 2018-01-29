import React from 'react';
import { Link } from "react-router-dom";
import validateEmail from '../helpers/email-validation';
import validatePassword from '../helpers/password-validation';
import './Sign-in.css';

class AdminLogin extends React.Component {
  render() {
    return (
      <section className="adminDetails">
        <h2 className="adminTitle subtitle is-paddingless is-marginless">Admin Sign in</h2>
        <section className="field" id="emailInput">
          <section className="control has-icons-left has-icons-right">
            <input className="input is-danger" id="email" type="email" placeholder="Email...." onBlur={() => validateEmail()} required />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </section>
          <p className="help is-danger" id="emailError" style={{ display: 'none' }}>Please enter a valid email address</p>
        </section>
        <section className="field" id="passwordInput">
          <section className="control has-icons-left has-icons-right">
            <input className="input is-danger" id="password" type="password" placeholder="Password...." onBlur={() => validatePassword()} required />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </section>
          <p className="help is-danger" id="passwordError" style={{ display: 'none' }}>Password must be greater than 5 characters</p>
        </section>
        <section className="field" id="loginButton">
          <p className="control">
            <button className="button is-success">
              Login
            </button>
          </p>
          <span className="admin is-pulled-right button is-text" onClick={() => this.props.student()}>Student?</span>
        </section>
      </section>
    )
  }
}
export default AdminLogin;