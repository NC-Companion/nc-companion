import { db } from "../firebase";
import * as queryComments from '../queries/queryComments';

export const postNewComment = (data, done) => {
  for (let key in data) {
    if(data[key] === null) {
      return done(`Please provide '${key}'`)
    }
  }
  db.ref('/comments').push(data);
  return done('Success');
}
export const voteComment = (commentId) => {
  queryComments.getCommentById(commentId)
    .then(snap => {
      let currentVotes = snap.val().votes;
      db.ref("/comments").child(commentId).update({votes:currentVotes + 1});
    })
    .catch(console.log);
}

export const deleteComment = (commentId, userId) => {
  return db.ref("/comments").child(commentId).remove()
}


export const updateComment = (commentId, userId, body) => {
  queryComments.getCommentById(commentId)
    .then(snap => {
      // console.log(snap.val().userId);
      snap.val().userId === userId 
        ? db.ref("/comments").child(commentId).update({body:body})
        : null
    })
    .catch(console.log);
}

