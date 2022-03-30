import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAY8TAiIGkTFLcRD8BLAoUJ41oJE2vSLSI",
  authDomain: "quora-clone-b09f6.firebaseapp.com",
  projectId: "quora-clone-b09f6",
  storageBucket: "quora-clone-b09f6.appspot.com",
  messagingSenderId: "106386558847",
  appId: "1:106386558847:web:9c8d756accfb53e2fad44a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const db = firebaseApp.firestore();

export { auth, provider };

export default db;
