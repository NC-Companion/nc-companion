import React from "react";

import SignOutButton from "./SignOutButton";

const Navbar = ({ authUser }) => {
  return authUser ? (
    <AuthenticatedNavbar authUser={authUser} />
  ) : (
    <NonAuthenticatedNavbar />
  );
};

const NonAuthenticatedNavbar = () => {
  return <nav>Not authenticated yet.</nav>;
};

const AuthenticatedNavbar = ({ authUser }) => {
  return (
    <nav>
      <p>Logged in as {authUser.displayName}</p>
      <SignOutButton />
    </nav>
  );
};

export default Navbar;
