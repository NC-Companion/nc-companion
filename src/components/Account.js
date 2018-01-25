import React from "react";

import withAuthorization, { authCondition } from "./auth/withAuthorization";

const Account = ({ authUser }) => {
  return (
    <div>
      <p>Account for: {authUser.displayName}</p>
    </div>
  );
};

export default withAuthorization(authCondition)(Account);
