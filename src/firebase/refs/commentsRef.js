import { db } from "../firebase";

export const postNewComment = (data, done) => {
  for (let key in data) {
    if(!data[key]) {
      return done(`Please provide '${key}'`)
    }
  }
  db.ref('/comments').push(data);
}

// export const updateCommentByTitle = (title, update) => {
//   db.ref('comments').orderByChild('title').equalTo(title).once('value', (res) => {
//     let newsKey = Object.keys(res.val()).join('')
//     let newsValues = res.val();
//     db.ref(`comments/${newsKey}`).set({
//       eventId :faker.fake("{{random.uuid}}"),
//       userId :faker.fake("{{random.uuid}}"),    
//       body :faker.fake("{{lorem.paragraphs}}"),
//       votes :faker.fake("{{random.number}}"),      
//       craetionDate : new Date(Date.now()).toISOString()
//       title:    updateStory.newTitle     || newsValues[newsKey].title,
//       body:     updateStory.newBody      || newsValues[newsKey].body,
//       author:   updateStory.newAuthor    || newsValues[newsKey].author,
//       tags:     updateStory.newTags      || newsValues[newsKey].tags,
//       catagory: updateStory.newCatagory  || newsValues[newsKey].catagory,
//       imgageUrl:  updateStory.newImg     || newsValues[newsKey].img_url
//     });
//   })
//   db.ref('comments').orderByChild('title').equalTo(title).once('value', (res) => {
//     console.log(res.val())
//   })
// }

export const deleteStory = (id) => {

}

