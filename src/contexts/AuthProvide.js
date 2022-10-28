import React from 'react';
import { createContext } from 'react';

import {getAuth} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useState } from 'react';

 export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvide = ({children}) => {
    const [user, setUser] = useState(null);
    const authinfo = {}
    return (
        <div>
            <AuthContext.Provider value={authinfo} >
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvide;