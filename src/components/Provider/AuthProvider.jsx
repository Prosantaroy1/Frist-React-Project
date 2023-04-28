import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../../Firebase/firebase-config';

export const AuthContext= createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    //const user = {email: 'prosanta'};
    const[user, setUser]= useState(null);

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const SignIn= (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut =()=>{
        return signOut(auth)
    }
    //observer user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
        });
        return()=>{
            return unsubscribe();
        }
    },[])
    const authInfo={
        user,
        createUser,
        SignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;