import React from 'react';
import { Link } from "react-router-dom";
import SignInButton from './Github-button';
import AdminLogin from './Sign-in-admin';

import './Sign-in.css';

class SignIn extends React.Component {
  state = {
    student: true,
  }
  render() {
    return (
      <section className="signIn">
        <section className="signInBody">
          <img className="nclogo" src='https://res.cloudinary.com/dq82ikfq4/image/upload/c_crop,h_1181,w_1181,x_0,y_0/c_fill,h_150,w_150,f_auto,dpr_2.0/ng9lrpfmurteqp87oau5.jpg' />
          <h1 className="signInTitle title">{'<'}NCBuddy /></h1>

          {this.state.student ? <SignInButton student={this.toggleSignIn} /> : <AdminLogin student={this.toggleSignIn} />}

        </section>
      </section>
    )
  }

  toggleSignIn= (isStudent) => {
    this.setState({
      student: !this.state.student
    })
  }
}

export default SignIn
