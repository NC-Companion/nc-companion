import * as firebase from 'firebase';


const { NODE_ENV = 'development' } = process.env;

const config = {
  development: {
    apiKey: "AIzaSyBRA4PmxClTgWcwBnLm_dxx07tsXy0KrjI",
    authDomain: "northcoders-companion-ahtw.firebaseapp.com",
    databaseURL: "https://northcoders-companion-ahtw.firebaseio.com",
    projectId: "northcoders-companion-ahtw",
    storageBucket: "",
    messagingSenderId: "819341228253"
  },
  production: {

  }
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(config[NODE_ENV]);
}

const auth = firebase.auth();
const db = firebase.database();

export {
  auth,
  db,
}