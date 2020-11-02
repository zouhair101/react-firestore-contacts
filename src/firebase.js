import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBVMMPnjMBlayMrPUcnDWyl3DFyUrWNV44",
    authDomain: "crm-linkedin2020.firebaseapp.com",
    databaseURL: "https://crm-linkedin2020.firebaseio.com",
    projectId: "crm-linkedin2020",
    storageBucket: "crm-linkedin2020.appspot.com",
    messagingSenderId: "595142768449",
    appId: "1:595142768449:web:310d9b06957859d8abd3c0",
    measurementId: "G-9XMJB3ZP6G"
};

firebase.initializeApp(config);

export default firebase;
