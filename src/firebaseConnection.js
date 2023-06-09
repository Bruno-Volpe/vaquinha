import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAvPxq1wUKQwjieH8i_Zmzwygcg7u_NoVQ",
    authDomain: "vaquinha-e920c.firebaseapp.com",
    projectId: "vaquinha-e920c",
    storageBucket: "vaquinha-e920c.appspot.com",
    messagingSenderId: "705316115319",
    appId: "1:705316115319:web:95ecd8f9efbb41f27f4772",
    measurementId: "G-WWD5E6F9Z4"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;