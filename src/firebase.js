import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2aP7xDzCI4OFABqlWH3d9GqSfH5BhZME",
  authDomain: "react-fcb.firebaseapp.com",
  databaseURL: "https://react-fcb.firebaseio.com",
  projectId: "react-fcb",
  storageBucket: "react-fcb.appspot.com",
  messagingSenderId: "365141335032",
  appId: "1:365141335032:web:4b640713eaf9a3b4bc940d"
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref('promotions');

export { firebase, firebaseMatches, firebasePromotions };
