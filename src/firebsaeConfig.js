import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC2grL91WfdF_gifrGQUh6gmTtzYOX4UBE",
  authDomain: "hbg1-59b13.firebaseapp.com",
  projectId: "hbg1-59b13",
  storageBucket: "hbg1-59b13.appspot.com",
  messagingSenderId: "582862492255",
  appId: "1:582862492255:web:6c527659bf1f020d6e81ea",
  measurementId: "G-DHV81GFHWB",
};

firebase.initializeApp(config);
const db = firebase.firestore();
const auth = firebase.auth();
const curDate = new Date()
  .toLocaleDateString()
  .split(".")
  .reduce((a, b) => a + b);
const participantsRef = db.collection(`participants-${curDate}`);
export { db, auth, participantsRef };
