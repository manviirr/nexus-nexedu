import React, { useContext, createContext, useState, useEffect } from "react";
import { useCallback } from "react";
import firebaseApp from '../../firebase/config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from "react-toastify";

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({
    children
}) => {
    const auth = getAuth(firebaseApp);
    const [user, setUser] = useState();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            console.log("user", user);
            setUser(user);
        })
    }, [auth]);

    const signIn = useCallback(async (email, password) => {
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
        }catch(err){
            console.log(err);
            toast(err.message, {
                type: "error"
            })
        }
    }, [auth]);

    const signUp = useCallback(async (email, password) => {
        try{
            await createUserWithEmailAndPassword(auth, email, password);
        }catch(err){
            console.log(err);
            toast(err.message, {
                type: "error"
            })
        }
    }, [auth])

    const logout = useCallback(() => {
        signOut(auth);
    }, [auth]);

    return (
        <AuthContext.Provider
            value={{
                signIn,
                auth,
                logout,
                signUp,
                user
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}