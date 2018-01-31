import { db } from "../firebase";
import Moment from 'moment'

export const getAllEvents = done => {
  return db.ref("/events").once("value");
};
export const whiteBoard = () => {
  let today = new Date(Date.now()).toISOString();
  const board = [];
  today = Moment(today).format('DDMMYYYY')
return db.ref("/events").once("value")
    .then(events => {
      events = events.val();
      return Promise.all(Object.keys(events).map(event =>{
        let eventDate = Moment(events[event].eventDate).format('DDMMYYYY');
        if (eventDate === today && events[event].mandatory === 'true') {
          // console.log('matched');
          let obj = {
            time : Moment(events[event].eventDate).format('LT'),
            body : events[event].title
          }
          board.push(obj);
        }

      }))
      // console.log('***',board);
    })
    .then(()=>{
      return board;
    })
  // return db.ref("/events").orderByChild('eventDate').equalTo(date1).once("value");
}

export const getEventById = eventId => {
  return db.ref('/events').child(eventId).once('value');
}

export const lectureQuery = (id) => {
  return db.ref('events').orderByChild(id).once('value');  
}

export const listenForLectureData = (eventId, done) => {
  if (!eventId) return done(new Error('You must pass an event id!'))
  
  db.ref('comments').orderByChild('eventId').equalTo(eventId)
    .on('value', (snapshot) => {
      const commentsById = snapshot.val();
      const comments = [], userPromises = [];
      Object.keys(commentsById).forEach(commentId => {
        const comment = commentsById[commentId];
        comments.push(Object.assign({}, comment, { id: commentId }))
        userPromises.push(db.ref('users').child(comment.userId).once('value'))
      })
      Promise.all(userPromises)
        .then(userSnapshots => {
          return userSnapshots.map(snapshot => {
            return snapshot.val();
          })
        })
        .then(users => {
          const commentsData = comments.map((comment, i) => {
            const user = Object.assign({}, users[i], { id: comment.userId })
            return {
              comment,
              user
            }
          })
          done(null, commentsData)
        })
    })
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
