import { useContext } from "react";
import { AuthContext } from "../Context/UserContext";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    
    if(loading){
        return <div className="flex justify-center items-center h-[500px]">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if(user) {
        return children;
    }
    return  <Navigate state={location.pathname} to='/login'></Navigate>
};
PrivetRoute.propTypes ={
    children : PropTypes.node,
}
export default PrivetRoute;