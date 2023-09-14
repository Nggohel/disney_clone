import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-8nLpQ1znZJS14wGUkrznIA9ll5SyJ-A",
  authDomain: "disneypulse-clone.firebaseapp.com",
  projectId: "disneypulse-clone",
  storageBucket: "disneypulse-clone.appspot.com",
  messagingSenderId: "557530666110",
  appId: "1:557530666110:web:e348c1f5fc9c4708cdf42f",
  measurementId: "G-X2QSHC5YDG",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
