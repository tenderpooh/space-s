import * as firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh5VrYjkvDRalSNq-DI1emTvieK2TbXrY",
  authDomain: "space-s.firebaseapp.com",
  databaseURL: "https://space-s.firebaseio.com",
  projectId: "space-s",
  storageBucket: "space-s.appspot.com",
  messagingSenderId: "136611673782",
  appId: "1:136611673782:web:b3389c0f7d917f2e5f5817",
  measurementId: "G-J3FVFKVS18"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
