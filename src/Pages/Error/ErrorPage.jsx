import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="space-y-3">
                <h1 className="text-4xl text-center ">Oops..!!!</h1>
                <p className="text-2xl">Sorry,an unexpected error has occurred</p>
                <p className="text-lg text-center">Not found</p>
                <div className="text-center">
                <Link  to='/'><button className="btn btn-outline btn-secondary bg-black text-white">Go Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
