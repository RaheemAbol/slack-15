import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAId2jhmTPZjtoc1t9m6nRa1eDOzRetryw",
    authDomain: "slack-clone-ra.firebaseapp.com",
    projectId: "slack-clone-ra",
    storageBucket: "slack-clone-ra.appspot.com",
    messagingSenderId: "11012636904",
    appId: "1:11012636904:web:f8a0dcf1790b38a005495d",
    measurementId: "G-JS8PT9R591"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };