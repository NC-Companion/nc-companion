import React from "react";
import './SignOutButton.css';
import { auth } from "../firebase";

const SignOutButton = () => (

  <section className="field" id="signOutButton">
    <p className="control">
      <button className="button is-text has-text-danger is-size-7" onClick={auth.signOut}>Sign Out</button>
    </p>
  </section>

)

export default SignOutButton;
