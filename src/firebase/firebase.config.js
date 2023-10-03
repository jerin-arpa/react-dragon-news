// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsmcuH7tyxg3Ts22qOsKe_qdJPUdQ3bAs",
    authDomain: "react-dragon-news-be235.firebaseapp.com",
    projectId: "react-dragon-news-be235",
    storageBucket: "react-dragon-news-be235.appspot.com",
    messagingSenderId: "859351957161",
    appId: "1:859351957161:web:d0085130e9896e263033b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;