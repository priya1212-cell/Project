import firebase from 'firebase'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDG4B_PCFknZu3YK49K0oSC8ijy1GWVNdQ",
    authDomain: "semantic-search-engine-83fbc.firebaseapp.com",
    databaseURL: "https://semantic-search-engine-83fbc-default-rtdb.firebaseio.com",
    projectId: "semantic-search-engine-83fbc",
    storageBucket: "semantic-search-engine-83fbc.appspot.com",
    messagingSenderId: "650300705414",
    appId: "1:650300705414:web:347fffc14896d2f05b9f07",
    measurementId: "G-7Z74QSH3VB"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase