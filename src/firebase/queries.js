import {db} from './firebase'

export const getAllEvents = (done) => {
  db.ref('/news').on("value", res => {
    done(res.val())
  });
}

export const postNewEvent = (data, done) => {
  
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
//   addData(data) {
//     db.ref('news').push(data);
//   },
//   updateData(id, update) {
  
//   }
// }