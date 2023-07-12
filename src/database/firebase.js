// import firebase  from "firebase/app";
// import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZs6PbIVNjSTJY7JS72ZEa0pXvy6VcB6I",
  authDomain: "rks-radgoszcz.firebaseapp.com",
  projectId: "rks-radgoszcz",
  storageBucket: "rks-radgoszcz.appspot.com",
  messagingSenderId: "964520470688",
  appId: "1:964520470688:web:45f6e73e927727f730c1c5"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// firebase.initializeApp(firebaseConfig);

// export const db = firebase.firestore();

// export default firebase;