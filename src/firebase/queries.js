import { db } from "./firebase";

export const getAllStories = done => {
  db.ref("/news").on("value", res => {
    done(res.val());
  });
};
