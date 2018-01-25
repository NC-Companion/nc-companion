import React from "react";

import { auth } from "../firebase";

const SignOutButton = () => <button onClick={auth.signOut}>Sign Out</button>;

export default SignOutButton;
