import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ShowProducts from "../../Components/ShowProducts";
import About from "../About/About";


const Home = () => {
    const sunglasses = useLoaderData();
       
    
    return (
        <div>
           <Banner></Banner>
           <ShowProducts sunglasses={sunglasses}></ShowProducts>
           <About></About>
        </div>
    );
};

export default Home;