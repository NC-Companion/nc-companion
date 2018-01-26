import { db } from "../firebase";

export const getAllUsers = done => {
  db.ref("/users").on("value", res => {
    done(res.val());
  });
};




