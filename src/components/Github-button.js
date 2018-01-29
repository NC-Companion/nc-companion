import React from 'react';
import { Link } from "react-router-dom";
import './Sign-in.css';

const SignInButton = (props) => (
    <section className="studentSignIn">
    <Link to="/home">
      <p className="field">
        <a className="button" id="signInButton">
          <span>Sign in with GitHub</span>
          <span className="icon">
            <i className="fab fa-github"></i>
          </span>
        </a>
      </p>
    {console.log(props)}
    </Link>
    <span className="admin button is-text"  onClick={() => props.student(false)}>Sign in as admin</span>
    </section>
  )

  export default SignInButton;
