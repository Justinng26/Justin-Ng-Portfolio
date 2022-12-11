// Import the functions you need from the SDKs you need
      
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
      
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// import modules we want to use from the firebase CDN:

import { getDatabase } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
// getDatabase give us access to friebases realtime database service specifically as opposed to cload, firestore auth, etc.
// ref will create a reference to our Realtime DB. This is kind of like an address object that points directly to the database and we can use it to tell our app where to send and read information from.
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC74PLCptJ6r4fW8eCYHl3VH5hxajcuT18",
  authDomain: "learning-firebase-3a89d.firebaseapp.com",
  databaseURL: "https://learning-firebase-3a89d-default-rtdb.firebaseio.com",
  projectId: "learning-firebase-3a89d",
  storageBucket: "learning-firebase-3a89d.appspot.com",
  messagingSenderId: "36538285402",
  appId: "1:36538285402:web:0646b27dbef7727cbec763"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Access the firebase Realtime DB service:
const database = getDatabase(app);




export default database;