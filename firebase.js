import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiqyy_0b9T7WE3XuJO4ABNrND5pYfGNJE",
  authDomain: "whatsapp-2-a438e.firebaseapp.com",
  projectId: "whatsapp-2-a438e",
  storageBucket: "whatsapp-2-a438e.appspot.com",
  messagingSenderId: "709967963310",
  appId: "1:709967963310:web:3eec752045804dbb54793f",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
