const firebase = require('firebase');
const config = require('./config');


firebase.initializeApp(config);

const db = firebase.database();
// console.log(db);

const ref = db.ref('news');
ref.orderByChild("last").limitToLast(2).on("child_added", function(snapshot) {
  console.log(snapshot.key);
});

// const newsfeed = {
//   name : 'will',
//   last :'baker'
// };

// news.push(newsfeed)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(console.log);
