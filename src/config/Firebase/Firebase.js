import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

 var firebaseConfig = {
    apiKey: "AIzaSyA8UG3oQPee86XFPVltKMfHlVX_4XjHLns",
    authDomain: "react-hackahton.firebaseapp.com",
    databaseURL: "https://react-hackahton.firebaseio.com",
    projectId: "react-hackahton",
    storageBucket: "react-hackahton.appspot.com",
    messagingSenderId: "549493330994",
    appId: "1:549493330994:web:edbd195e3529dddd9c582b",
    measurementId: "G-K90JGTKYZL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase