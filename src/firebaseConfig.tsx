import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA9f5h1idIIDlo2O1JO9slGuEDBb39QAfk",
    authDomain: "coronakiller-415dc.firebaseapp.com",
    databaseURL: "https://coronakiller-415dc.firebaseio.com",
    projectId: "coronakiller-415dc",
    storageBucket: "coronakiller-415dc.appspot.com",
    messagingSenderId: "97044433060",
    appId: "1:97044433060:web:bd31f8053d0ba3a8c8be31",
    measurementId: "G-CMM9CS9L26"
  };

firebase.initializeApp(firebaseConfig);

export default firebase