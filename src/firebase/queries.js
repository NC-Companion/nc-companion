import {db} from './firebase';
// const {db} = require('./firebase');


export const getAllEvents = (done) => {
  db.ref('/news').on("value", res => {
    done(null, res.val())
  });
}

export const postNewEvent = (data, done) => {
  for (let key in data) {
    if(key !== 'img_url' && !data[key]) {
      return done(`Please provide '${key}'`);
    } 
  }
  db.ref('news').push(data);
}


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