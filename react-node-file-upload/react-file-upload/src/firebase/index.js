import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYb3BJKohcSgN_Xtjb6cN2fz3o51McF2A",
  authDomain: "iiitdelhi-d3fdd.firebaseapp.com",
  projectId: "iiitdelhi-d3fdd",
  storageBucket: "iiitdelhi-d3fdd.appspot.com",
  messagingSenderId: "314868218577",
  appId: "1:314868218577:web:33b63806f6fa548c8a63f0",
};

let app;
let db;

const initializeFirebase = () => {
  if (app === undefined) {
    app = initializeApp(firebaseConfig);
  }
  if (db === undefined) {
    db = getFirestore(app);
  }
};

export { initializeFirebase, app, db };
