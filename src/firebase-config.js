import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDMsQGJHLNsTKQ50PLt3BoDl6awnG7N43c",
    authDomain: "xbox-god.firebaseapp.com",
    projectId: "xbox-god",
    storageBucket: "xbox-god.appspot.com",
    messagingSenderId: "393007247791",
    appId: "1:393007247791:web:c2a05d887bac2a15fd3f5a",
    measurementId: "G-3RK5X5HHMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);