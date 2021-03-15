import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyD7fvZ4QTY02LUl_hC2-alS3a4WqFncEdo",
  authDomain: "src-dlibt.firebaseapp.com",
  projectId: "src-dlibt",
  storageBucket: "src-dlibt.appspot.com",
  messagingSenderId: "602993110717",
  appId: "1:602993110717:web:2bb5387bc9229c0aaf11d4"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage()

  export {
      storage, firebase as default
  }