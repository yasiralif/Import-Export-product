import React from 'react';
import { AuthContext } from './AuthContext';
import {  createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../Firebase/Frirebase.config';
import auth from '../Firebase/Frirebase.config';
const AuthProvider = ({children}) => {
    // const [user, setuser]=useState(null)


    const userlogIn =(email, password)=>{
      return  signInWithEmailAndPassword(auth, email, password)
    }

    //user carate 
    const emailLogin=(email,password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    

    // this is google singin and login section
    const googleprovider = new GoogleAuthProvider();
    const googleLogin =()=>{
         return signInWithPopup(auth, googleprovider)
    }

    // this is user can use 
    const userInfo={
        googleLogin,
        emailLogin,
        userlogIn

    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;