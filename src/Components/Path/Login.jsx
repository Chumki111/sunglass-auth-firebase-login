import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook} from 'react-icons/fa';
import { AuthContext } from "../../Context/UserContext";
import { useContext } from "react";
import toast from "react-hot-toast";

const Login = () => {
    const {signInGoogle,signInUser} = useContext(AuthContext)
    const location = useLocation();
    const navigate= useNavigate()
   
    const handleLogin = e =>{
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        



    //   validation
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            toast.error('Minimum eight characters, at least one letter and one number')
            return;
        }
        signInUser(email,password)
        .then(result =>{
            console.log(result.user)
            toast.success('login successfully')
            navigate(location?.state ? location.state : '/')
           
        })
        .catch(error =>{
            console.error(error)
            toast.error('register password and login password same na')
            
        })

    }

 
    const handleGoogle =() =>{
        signInGoogle()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (

        <div className="flex justify-center items-center">
            <div>
                <div className="card flex-shrink-0 w-full max-w-lg border bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h2 className="text-3xl font-semibold mb-4">Login your account</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input type="email" placeholder="UserName or Email" className="py-4 border-b " name="email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input type="password" placeholder="Password" className="py-4 border-b " name="password" required />
                            {/* <label className="label">
                                    
                                </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>

                        <div className="text-center mt-4">

                            <p className=" text-base">Dont’t Have An Account ? <Link to='/register' className=""><button className=" btn-link text-red-400">Create an Account</button></Link></p>
                        </div>




                    </form>

                </div>

                <div>
                    <div className="divider">OR</div>
                   <div className="text-center">
                   <button onClick={handleGoogle} className="btn  capitalize rounded-full w-9/12">
                        <FcGoogle className="text-2xl mr-10"></FcGoogle>
                      <span> Continue With Google
                    </span>
                    </button>
                    <br />
                    <br />
                    <button className="btn  capitalize w-9/12 rounded-full">
                        <FaFacebook className="text-2xl mr-10"></FaFacebook>Continue With Facebook</button>
                   </div>
                </div>
            </div>

        </div>




    );
};

export default Login;