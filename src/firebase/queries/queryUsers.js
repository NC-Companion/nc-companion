import { db } from "../firebase";

export const getAllUsers = done => {
  db.ref("/users").on("value", res => {
    done(res.val());
  });
};

export const getUserById = (id) => {
  return db.ref("/users").child(id).once('value');
}


