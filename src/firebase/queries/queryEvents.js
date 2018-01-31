import { db } from "../firebase";
import Moment from 'moment'

export const getAllEvents = done => {
  return db.ref("/events").once("value");
};

export const getEventById = eventId => {
  return db.ref('/events').child(eventId).once('value');
}

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
                imageUrl : snap.val().avatarUrl,
                id : res[key].userId
              }
              const comment = {
                id : key,
                body : res[key].body,
                createdAt : res[key].creationDate,
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

export const calendarEvents = (userId) => {  
  const data = {};
  const student = {};
  const global = {};
  const cohort = {};


  return db.ref("/events").once("value")
    .then(snap => {
      const events = snap.val();
      return Promise.all(Object.keys(snap.val()).map(event => {
        const date = Moment(events[event].eventDate).format('DDMMYYYY');
        let type, isLecture;
        events[event].mandatory === 'true' 
        ? type = 'mandatory'
        : type = 'optional'
        events[event].type === 'lecture' 
        ? isLecture = true
        : isLecture = false
        return db.ref(`/users/${events[event].authorUid}`).once("value")
          .then(user => {
            let name;
            if (user.val()) name  = user.val().name;
              
            const obj = {
              uid: event,
              type: type,
              title: events[event].title,
              body: events[event].body,
              tag: events[event].tag,
              imgUrl: events[event].imageUrl,
              dueDate: events[event].eventDate,
              calendar: events[event].calendar,
              resourcesID: events[event].resources,
              author: name || 'Anonymous',
              isLecture: isLecture,
              commentID: ''
            }
            if (obj.calendar === 'student') {
              if (student[date]) {
                student[date].push(obj)
              } else {
                student[date] = [obj];
              }  
            }
            if (obj.calendar === 'cohort') {
              if (cohort[date]) {
                cohort[date].push(obj)
              } else {
                cohort[date] = [obj];
              }  
            }
            if (obj.calendar === 'global') {
              if (global[date]) {
                global[date].push(obj)
              } else {
                global[date] = [obj];
              }  
            }            
          })  // users snap          
      }))     // Object.keys MAP
    })    //  Evnets snap
    .then(()=>{return {student,cohort,global}})
    .catch(console.log);
}
