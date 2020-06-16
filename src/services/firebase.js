import firebase from 'firebase'
import * as firebaseui from 'firebaseui'

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBC4l1ge2lTS4_QEei1wTPLYis6Ujnd3Xo",
    authDomain: "react-284da.firebaseapp.com",
    databaseURL: "https://react-284da.firebaseio.com",
    projectId: "react-284da",
    storageBucket: "react-284da.appspot.com",
    messagingSenderId: "253052258375",
    appId: "1:253052258375:web:bfc63b77159ffd14fb8962"
  };

  const uiConfig = {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ], 
    signInSuccessUrl:'/'
  };

  // Initialize Firebase 
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const db = firebase.firestore();

   //funcion, que cuando se llama muestra un UI de login
   export const startUi = (elementId) =>{
    // Initialize the FirebaseUI Widget using Firebase.
    const ui = new firebaseui.auth.AuthUI(auth)
    ui.start(elementId, uiConfig)
  };