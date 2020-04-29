import firebase from 'firebase';
require('@firebase/firestore');
const firebaseConfig = {
    apiKey: "AIzaSyDDqeOgSdU3wCG-NjN3dTwBIVTtHHmaJuQ",
    authDomain: "booksanta-7c3b2.firebaseapp.com",
    databaseURL: "https://booksanta-7c3b2.firebaseio.com",
    projectId: "booksanta-7c3b2",
    storageBucket: "booksanta-7c3b2.appspot.com",
    messagingSenderId: "117272136220",
    appId: "1:117272136220:web:b98e02e6e66de72012edd9",
    measurementId: "G-GVKQTKBCVB"
};


// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore()