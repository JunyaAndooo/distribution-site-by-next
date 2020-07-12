import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcie9flKzxS5zBqADn4WjXIsr20N20J54",
  authDomain: "distribution-site-aab21.firebaseapp.com",
  databaseURL: "https://distribution-site-aab21.firebaseio.com",
  projectId: "distribution-site-aab21",
  storageBucket: "distribution-site-aab21.appspot.com",
  messagingSenderId: "344403761159",
  appId: "1:344403761159:web:d959963519a939864d32a2",
  measurementId: "G-88DVN71R41",
};
// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

// Authサービスを作ってエクスポート。各画面でこれを利用する
export const auth = firebase.auth();
