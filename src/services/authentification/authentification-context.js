import React, { useState, createContext } from "react";
import { auth } from "./authentification-service";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthentificationContext = createContext();

export const AuthentificationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  onAuthStateChanged(auth, (userSignedIn) => {
    if (userSignedIn) {
      setUser(userSignedIn);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((u) => {
        const loggedUser = u.user;
        setUser(loggedUser);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passords do not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const newUser = userCredential.user;
        setUser(newUser);
        setIsLoading(false);
        console.log(user, newUser);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  return (
    <AuthentificationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onRegister,
        onLogin,
        onLogout,
      }}
    >
      {children}
    </AuthentificationContext.Provider>
  );
};
