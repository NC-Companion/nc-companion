import { db } from './firebase';
// const {db} = require('./firebase');


export const getAllEvents = (done) => {
  db.ref('/news').on("value", res => {
    done(null, res.val())
  });
}

export const postNewEvent = (data, done) => {
  for (let key in data) {
    if (key !== 'img_url' && !data[key]) {
      return done(`Please provide '${key}'`);
    }
  }
  db.ref('news').push(data);
}

export const updateByTitle = (title, newTitle, newBody, newAuthor, newTags, newCatagory, newImg) => {
  db.ref('news').orderByChild('title').equalTo(title).once('value', (res) => {
    let newsKey = Object.keys(res.val()).join('')
    let newsValues = res.val();
    db.ref(`news/${newsKey}`).set({
      title: newTitle || newsValues[newsKey].title,
      body: newBody || newsValues[newsKey].body,
      author: newAuthor || newsValues[newsKey].author,
      tags: newTags || newsValues[newsKey].tags,
      catagory: newCatagory || newsValues[newsKey].catagory,
      img_url: newImg || newsValues[newsKey].img_url
    });
  })
  db.ref('news').orderByChild('title').equalTo(title).once('value', (res) => {
    console.log(res.val())
  })
}

// updateByTitle(`You can't copy the matrix without overriding the solid state FTP feed!`)

// updateByTitle(`You can't copy the matrix without overriding the solid state FTP feed!`, '', 'I am playing games')






// module.exports = {
//   getAllData() {
//     db.ref('news').on("value", function (res) {
//       console.log(res.val());
//     })
//   },
//   getDataByFirstName(firstName) {
//     db.ref('news').orderByChild('name').equalTo(firstName).on('value', (res) => {
//       console.log(res.val());
//     });
//   },
//   getDataByLastName(lastName) {
//     db.ref('news').orderByChild('last').equalTo(lastName).on('value', (res) => {
//       console.log(res.val());
//     });
//   },
//   getById(id) {
//     db.ref(`news/${id}`).once('value', function (res) {
//       console.log(res.val());      
//     });
//   },
//   deleteData(id) {
//     db.ref(`news/${id}`).remove();
//   },
//   addData(data, done) {
//     for (let ket in data) {
//           if(key !== 'img_url' && !data[key]) {
//             return done(`Please provide ${key}`);
//           } 
//         }
//         db.ref('news').push(data);
//   },
//   updateData(id, update) {

//   }
// }