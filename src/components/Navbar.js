import React from "react";

import SignOutButton from "./SignOutButton";

const Navbar = ({ authUser }) => {
  return authUser ? (
    <AuthenticatedNavbar authUser={authUser} />
  ) : null
};


const AuthenticatedNavbar = ({ authUser }) => {
  return (
    <nav className="navTop">

      <SignOutButton />
    </nav>
  );
};

export default Navbar;
