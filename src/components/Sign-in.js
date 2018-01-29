import React from 'react';
import { Link } from "react-router-dom";

import './Sign-in.css';

class SignIn extends React.Component {
  render() {
    return (
      <section className="signIn">
        <section className="signInBody">
          <img className="nclogo" src='https://res.cloudinary.com/dq82ikfq4/image/upload/c_crop,h_1181,w_1181,x_0,y_0/c_fill,h_150,w_150,f_auto,dpr_2.0/ng9lrpfmurteqp87oau5.jpg' />
          <h1 className="signInTitle title">{'<'}NCBuddy /></h1>

          <Link to="/home">
            <p className="field">
              <a className="button" id="signInButton">
                <span>Sign in with GitHub</span>
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
              </a>
              </p>
          </Link>
            <span className="admin"><Link to="">Sign in as admin</Link></span>
        </section>
        </section>
        )
  }
}

export default SignIn
