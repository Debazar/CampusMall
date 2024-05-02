import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASK30GuzU_rzChhpGtkgbk7MzcoLZvIis",
  authDomain: "eshop-31d5f.firebaseapp.com",
  databaseURL: "https://eshop-31d5f-default-rtdb.firebaseio.com",
  projectId: "eshop-31d5f",
  storageBucket: "eshop-31d5f.appspot.com",
  messagingSenderId: "667356351967",
  appId: "1:667356351967:web:55bdfb6aec32022e1c886a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
