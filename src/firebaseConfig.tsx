import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "*",
    authDomain: "*",
    databaseURL: "*",
    projectId: "*",
    storageBucket: "*",
    messagingSenderId: "*",
    appId: "*",
    measurementId: "*"
  };

firebase.initializeApp(firebaseConfig);

export default firebase
