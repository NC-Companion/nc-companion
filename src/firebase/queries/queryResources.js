import { db } from "../firebase";

export const getAllResources = done => {
  db.ref("/resources").on("value", res => {
    done(res.val());
  });
};
export const getEventResources = (id) => {
  return db.ref('/resources').orderByChild(id).once('value')
    .then(snap => {
      const res = snap.val();
      const resources = [];
      return Promise.all(Object.keys(res).map(key => {
        return resources.push(res[key]);
      }))
      .then(()=>{
        return resources;
      })
    })
};