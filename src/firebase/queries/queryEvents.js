import { db } from "../firebase";

export const getAllEvents = done => {
  return db.ref("/events").once("value");
};

export const lectureQuery = (id) => {
  return db.ref('events').orderByChild(id).once('value');
  
}
export const lectureData = (eventId) => {
  if(eventId) {
    const comments = [];
    return db.ref('comments').orderByChild('eventId').equalTo(eventId)
      .once('value')
      .then(snap => {
        const res = snap.val();
        return Promise.all(Object.keys(res).map(key => {
          return db.ref('users').child(res[key].userId).once('value')
            .then(snap=>{
              const user = {
                name : snap.val().name,
                handle : snap.val().handle,
                imageUrl : snap.val().avatarUrl
              }
              const comment = {
                body : res[key].body,
                createdAt : res[key].craetionDate,
                votes : res[key].votes
              }
              comments.push({user,comment});
            })
            .catch(console.log);
        }))
      })
      .then(() => {
        return comments;
      })
      .catch(console.log);
  }
  else {
    return 'No Event ID id provided'
  }
}
