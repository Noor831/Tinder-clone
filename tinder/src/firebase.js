
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCZd_QJgPrbCNnOQYqYQbP_wSvJyYdP2ec",
    authDomain: "tinder-clone-b3d69.firebaseapp.com",
    projectId: "tinder-clone-b3d69",
    storageBucket: "tinder-clone-b3d69.appspot.com",
    messagingSenderId: "479387139885",
    appId: "1:479387139885:web:96fada8adbf615a36d5da4",
    measurementId: "G-G1N7XYR6LZ",
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default  database;