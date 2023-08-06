import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA0JidJs5TNYnxJ7YOeOUFu7afEv0gkx70",
    authDomain: "react-todo-app-229e0.firebaseapp.com",
    projectId: "react-todo-app-229e0",
    storageBucket: "react-todo-app-229e0.appspot.com",
    messagingSenderId: "1030108204658",
    appId: "1:1030108204658:web:256cfd443cac9bbb967ceb",
    measurementId: "G-BT3BRGEC65"
};

const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)