import { db } from "../firebase";
import * as queryComments from '../queries/queryComments';

export const postNewComment = (data, done) => {
  console.log('postNewComment');
  for (let key in data) {
    if(data[key] === null) {
      return done(`Please provide '${key}'`)
    }
  }
  db.ref('/comments').push(data);
  return done('Success');
}

export const voteComment = (commentId,authUser) => {
  return queryComments.getCommentById(commentId)
    .then(snap => {
      const user = snap.val().likedBy[authUser.uid];
      console.log('snap.val().likedBy',user);

      let currentVotes = snap.val().votes;
      if(user) {
        db.ref("/comments").child(commentId).update({votes:currentVotes - 1});
        db.ref(`/comments/${commentId}/likedBy/${authUser.uid}`).remove();
      } else {        
        let likedBy = snap.val().likedBy; 
        likedBy[authUser.uid] = {name:authUser.displayName,uid:authUser.uid}       
        return db.ref("/comments").child(commentId).update({votes:currentVotes + 1,likedBy });
      }
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

