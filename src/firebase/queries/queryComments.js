import { db } from "../firebase";

export const getAllComments = done => {
  db.ref("/comments").on("value", res => {
    done(res.val());
  });
};

export const getCommentById = (id) => {
  return db.ref("/comments").child(id).once("value");
};

