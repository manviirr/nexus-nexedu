import React, { useContext, createContext } from "react";
import { useCallback } from "react";
import firebaseApp from '../../firebase/config';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({
    children
}) => {
    const auth = getAuth(firebaseApp);
    const signIn = useCallback(async (email, password) => {
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
        }catch(err){
            console.log(err);
        }
    }, [auth]);

    return (
        <AuthContext.Provider
            value={{
                signIn,
                auth
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}