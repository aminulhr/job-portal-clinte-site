import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../firebase.init";
import AuthContext from "./Authconstext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const googleprovider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    // যে  এই ফাংশনকে কল করবে তার থেকে ২ টা প্যারামিটার নিবো email, password
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    setLoader(true);
    return signOut(auth);
  };
  const googleLogin = () => {
    setLoader(true);

    return signInWithPopup(auth, googleprovider);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
      console.log("new use", currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    logoutUser,
    user,
    loader,
    createUser,
    loginUser,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
  );
};

export default AuthProvider;
