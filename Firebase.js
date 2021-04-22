import firebase from 'firebase'; 

const firebaseConfig = {
    apiKey: "AIzaSyC9yje9oOWllnBbKfYK1ZHRySJo2s8jpeg",
    authDomain: "clone-87a5a.firebaseapp.com",
    databaseURL: "https://clone-87a5a.firebaseio.com",
    projectId: "clone-87a5a",
    storageBucket: "clone-87a5a.appspot.com",
    messagingSenderId: "47120727192",
    appId: "1:47120727192:web:fa977ff5b01a386edfe4ed"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore(); 
  const auth = firebase.auth(); 

  export { db, auth }; 