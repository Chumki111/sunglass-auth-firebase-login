import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";


const Navbar = () => {

   
    const navLinks = <>


        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-red-500 text-white" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-red-500 text-white" : ""
                }
            >
                Products
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-red-500 text-white" : ""
                }
            >
                Contact
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/blogs"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-red-500 text-white" : ""
                }
            >
                blogs
            </NavLink>
        </li>


    </>

const {logOut,user} = useContext(AuthContext)
console.log(user)

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><span className="text-4xl italic">Sunglass</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-poppins">
                        {navLinks}
                    </ul>
                </div>
               
                   
                

                <div className="navbar-end">
                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://i.ibb.co/5n2xQzt/300.jpg" alt="" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.email}</button>

                                </li>
                                <li>
                                    <button className="btn  btn-ghost"
                                        onClick={logOut}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn  btn-ghost">Login</button>
                            </Link>
                    }
                </div>
                
                    
                </div>
            </div>
        
    );
};

export default Navbar;