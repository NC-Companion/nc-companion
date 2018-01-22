const firebase = require('firebase');
const config = require('./config');


firebase.initializeApp(config);

const db = firebase.database();

const ref = db.ref('news');

// find all database data
function newsFieldData() {
  ref.on("value", function (newsFeed) {
    console.log(newsFeed.val())
  })
}

// Able to gather all data by firstname
function gatherData(firstName) {
  firebase.database().ref('news').orderByChild('name').equalTo(firstName).on('value', (res) => {
    console.log(res.val())
  });
}

// Able to gather last name data
function gatherDataLast(lastName) {
  firebase.database().ref('news').orderByChild('last').equalTo(lastName).on('value', (res) => {
    console.log(res.val())
  });
}

//Able to find by ID
function getById(id) {
  firebase.database().ref(`news/${id}`).once('value', function (res) {
    let exists = res.val();
    if (exists) console.log(exists);
  });
}

// Able to update userData
function writeUserData(id, Firstname, lastName) {
  firebase.database().ref(`news/${id}`).set({
    last: lastName,
    name: Firstname
  });
}

// Able to delete user data
function deleteUserData(id) {
  firebase.database().ref(`news/${id}`).remove()
  console.log("It has been deleted")
}


