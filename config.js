import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBg5c4EMg3TzUEhKTeO_1IYAumai-IWFWo",
    authDomain: "e-ride-app-e3e9f.firebaseapp.com",
    projectId: "e-ride-app-e3e9f",
    storageBucket: "e-ride-app-e3e9f.appspot.com",
    messagingSenderId: "619609267330",
    appId: "1:619609267330:web:a5c71990d755232864289b"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


