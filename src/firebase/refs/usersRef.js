import { db } from "../firebase";
export const addNewUser = (data, done) => {
  for (let key in data) {
    if(key !== 'avatarUrl' && !data[key]) {
      return done(`Please provide '${key}'`)
    }
  }
  db.ref('/users').push(data);
}

// export const updateById = (id, update) => {
//   db.ref('/users').orderByChild('id').equalTo(title).once('value', (res) => {
//     let newsKey = Object.keys(res.val()).join('')
//     let newsValues = res.val();
//     db.ref(`stories/${newsKey}`).set({
//       title:    updateStory.newTitle     || newsValues[newsKey].title,
//       body:     updateStory.newBody      || newsValues[newsKey].body,
//       author:   updateStory.newAuthor    || newsValues[newsKey].author,
//       tags:     updateStory.newTags      || newsValues[newsKey].tags,
//       catagory: updateStory.newCatagory  || newsValues[newsKey].catagory,
//       imgageUrl:  updateStory.newImg     || newsValues[newsKey].img_url
//     });
//   })
//   db.ref('news').orderByChild('title').equalTo(title).once('value', (res) => {
//     console.log(res.val())
//   })
// }

export const deleteStory = (id) => {

}
