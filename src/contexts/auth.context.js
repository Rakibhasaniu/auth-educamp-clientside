import {  createContext, useState } from "react"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from "../firebase/firebase.init";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    return (
        <AuthContext.provider value={{user, setUser, loading, setLoading}}>
            {children}
        </AuthContext.provider>
    );
};
export default AuthProvider;