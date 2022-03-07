import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBztfnDp3gkiltFu87eBsFbJ_7bQJMWObk",
  authDomain: "tatthood-ee0f3.firebaseapp.com",
  projectId: "tatthood-ee0f3",
  storageBucket: "tatthood-ee0f3.appspot.com",
  messagingSenderId: "439606340009",
  appId: "1:439606340009:web:b8c4b3426130ea7473bcb8",
  measurementId: "G-ERKT9PG4FH",
};

initializeApp(firebaseConfig);

export const auth = getAuth();

export const loginRequest = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const registerRequest = async (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorMessage = error.message;
      return errorMessage;
    });
};
