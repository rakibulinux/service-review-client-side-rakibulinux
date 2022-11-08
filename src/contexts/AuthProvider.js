import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebaseConfig";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [services, setServices] = useState([]);
  const [servicesAll, setServicesAll] = useState([]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const createUserAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUserAccount = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUserAccount = (name, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const resetUserPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSebscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });
    return () => {
      return unSebscribe();
    };
  }, []);
  useEffect(() => {
    fetch("https://service-review-gamma.vercel.app/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  useEffect(() => {
    fetch("https://service-review-gamma.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServicesAll(data));
  }, []);
  const authInfo = {
    user,
    loading,
    createUserAccount,
    loginUserAccount,
    updateUserAccount,
    loginWithGoogle,
    resetUserPassword,
    logOutUser,
    services,
    servicesAll,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
