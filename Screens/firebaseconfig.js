

import firebase from 'firebase';









const firebaseConfig = {
  apiKey: "AIzaSyD6XQ7nug5MVWToskz55dkOqaUdmDLWYJA",
  authDomain: "laudnryapp-b9bde.firebaseapp.com",
  projectId: "laudnryapp-b9bde",
  storageBucket: "laudnryapp-b9bde.appspot.com",
  messagingSenderId: "371413499514",
  appId: "1:371413499514:web:704b46026bdebfadeb85c3",
  measurementId: "G-N2K6K6VTWT"
};


export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

