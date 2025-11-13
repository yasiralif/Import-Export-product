import React, { use, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../Firebase/firebase.config';

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null)
  const [loading, setloding] = useState(true)
  const [userdata, setuserdata] = useState([])
  // (userdata);


  const userlogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  //user carate 
  const emailLogin = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }


  // this is google singin and login section
  const googleprovider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleprovider)
  }
  // sinout user 
  const singOut = () => {
    return signOut(auth)
  }

  // on auth state 

  useEffect(() => {
    setloding(true)
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser)
      setloding(false)
    })
    return () => {
      unsubscribe()
    }

  }, [])

  // this is user can use 
  const userInfo = {
    user,
    setuser,
    googleLogin,
    emailLogin,
    userlogIn,
    singOut,
    loading,
    setloding,
    userdata,
    setuserdata

  }
  return (
    <AuthContext value={userInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;