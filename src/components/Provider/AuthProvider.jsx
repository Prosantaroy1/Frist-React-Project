import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../../Firebase/firebase-config';

export const AuthContext= createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    //const user = {email: 'prosanta'};
    const[user, setUser]= useState(null);
    ///loading set
    const [loading, setLoading] = useState(true); 
   ////Cretaed account/////
    const createUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
   //////signup//
    const SignIn= (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    /////////////logout//
    const logOut =()=>{
        return signOut(auth)
    }
    //observer user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });
        return()=>{
            return unsubscribe();
        }
    },[])
    ///////authinfo sob khane use korar jonno.//////
    const authInfo={
        user,
        loading,
        createUser,
        SignIn,
        logOut,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;