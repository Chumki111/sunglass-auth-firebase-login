import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Contact from "../Pages/Contact/Contact";
import Blogs from "../Pages/Blog/Blogs";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Components/Path/Login";
import Register from "../Components/Path/Register";
import SingleCard from "../Components/SingleCard";
import PrivetRoute from "./PrivetRoute";

const myCreatedRoute = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
            path :'/',
            element:<Home></Home>,
            loader :() => fetch('/data.json')
        },
        {
          path:'/sunglasses/:id',
          element:<PrivetRoute><SingleCard></SingleCard></PrivetRoute>,
          loader : () => fetch('/data.json')
        },
        {
            path : '/products',
            element:<Products></Products>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/blogs',
            element:<Blogs></Blogs>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path :'/register',
          element :<Register></Register>
        }
      ]
    },
  ]);

  export default myCreatedRoute;