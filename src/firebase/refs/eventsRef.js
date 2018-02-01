import { db } from "../firebase";

export const postNewEvent = (data) => {
  // for (let key in data) {
  //   if(key !== 'imageUrl' && !data[key]) {
  //     return done(`Please provide '${key}'`)
  //   }
  // }
  return db.ref('/events').push(data);
}

export const updateEvent = (eventId, update) => {
  return Promise.all(Object.keys(update).map(key => {
    return db.ref('/events').child(eventId).update({key:update[key]});  
  }));
}

export const deleteEvent = (eventId) => {
  return db.ref("/events").child(eventId).remove();
}