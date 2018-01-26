import { db } from "../firebase";

export const postNewEvent = (data, done) => {
  for (let key in data) {
    if(key !== 'imageUrl' && !data[key]) {
      return done(`Please provide '${key}'`)
    }
  }
  db.ref('/events').push(data);
}

export const updateEventByTitle = (title, updateStory) => {
  db.ref('events').orderByChild('title').equalTo(title).once('value', (res) => {
    let newsKey = Object.keys(res.val()).join('')
    let newsValues = res.val();
    db.ref(`events/${newsKey}`).set({
      title:    updateStory.newTitle     || newsValues[newsKey].title,
      body:     updateStory.newBody      || newsValues[newsKey].body,
      author:   updateStory.newAuthor    || newsValues[newsKey].author,
      tags:     updateStory.newTags      || newsValues[newsKey].tags,
      catagory: updateStory.newCatagory  || newsValues[newsKey].catagory,
      imgageUrl:  updateStory.newImg     || newsValues[newsKey].img_url
    });
  })
  db.ref('events').orderByChild('title').equalTo(title).once('value', (res) => {
    console.log(res.val())
  })
}

export const deleteStory = (id) => {

}