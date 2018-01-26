import { db } from "../firebase";

export const getAllComments = done => {
  db.ref("/comments").on("value", res => {
    done(res.val());
  });
};

