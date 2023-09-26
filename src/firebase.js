// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ1PtyNHEB9FDdUYwra1EYXqiSeXuJHnk",
  authDomain: "todo-app-yt-ae412.firebaseapp.com",
  projectId: "todo-app-yt-ae412",
  storageBucket: "todo-app-yt-ae412.appspot.com",
  messagingSenderId: "331717347308",
  appId: "1:331717347308:web:62471b946c0724e14622c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)