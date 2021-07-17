import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAy_DX-HD0T4xwR6l2R9rO0NdztLAcW9BA",
  authDomain: "linkedin-clone-67a29.firebaseapp.com",
  projectId: "linkedin-clone-67a29",
  storageBucket: "linkedin-clone-67a29.appspot.com",
  messagingSenderId: "210222772315",
  appId: "1:210222772315:web:7d837f53fa52c443fc0f7e",
  measurementId: "G-K6L8N3H0FS",
};

//the below code will connect everything to the database
const firebaseApp = firebase.initializeApp(firebaseConfig);
//now inside the db we have access to authentication.
const db = firebaseApp.firestore();
//access to authentication
const auth = firebase.auth();

export { db, auth };
