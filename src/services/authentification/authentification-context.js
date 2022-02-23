import React, { useState, useEffect, createContext } from "react";
import { loginRequest } from "./authentification-service";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBztfnDp3gkiltFu87eBsFbJ_7bQJMWObk",
  authDomain: "tatthood-ee0f3.firebaseapp.com",
  projectId: "tatthood-ee0f3",
  storageBucket: "tatthood-ee0f3.appspot.com",
  messagingSenderId: "439606340009",
  appId: "1:439606340009:web:b8c4b3426130ea7473bcb8",
  measurementId: "G-ERKT9PG4FH",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const AuthentificationContext = createContext();

export const AuthentificationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    loginRequest(auth, email, password)
      .then((user) => {
        setUser(user);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  return (
    <AuthentificationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthentificationContext.Provider>
  );
};
