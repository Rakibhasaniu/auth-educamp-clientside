import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

 export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvide = ({children}) => {
    const [user, setUser] = useState(null);

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('state change user', currentUser);
            setUser(currentUser)
        });
        return () => {
            unsubscribe()
        }
    },[])


    const authinfo = {user, providerLogin, logout, createUser, signIn}
    return (
        <div>
            <AuthContext.Provider value={authinfo} >
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvide;