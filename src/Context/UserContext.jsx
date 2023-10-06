import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const UserContext = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    // CreateUser

    const createUser = (email,password) =>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password);
    }
    // signIn

    const signInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () =>{
        setLoading(true)
       return signOut(auth)
    }
    
    const signInGoogle =() =>{
        setLoading(true)
       return  signInWithPopup(auth,googleProvider)
        
    }

    useEffect(() =>{
      const unSubscribe =   onAuthStateChanged(auth , currentUser => {
             console.log('current user in on auth state',currentUser)
             setUser(currentUser);
             setLoading(false)
        })
        return() =>{
            unSubscribe();
        }
    },[])

    const authInfo ={signInGoogle,user,createUser,signInUser,logOut,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
UserContext.propTypes ={
    children : PropTypes.node,
}
export default UserContext;