import { createContext } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const UserContext = ({children}) => {

    const signInGoogle =() =>{
       return  signInWithPopup(auth,googleProvider)
        
    }
    const authInfo ={signInGoogle}
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