import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";
import Details from "../pages/Details/Details";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Title from "../pages/Title/Title";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children : [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/categories/:id',
                element: <Details></Details>,
                loader : ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            },

            {
                path: '/title/:id',
                element: <Title></Title>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path:'/faq',
                element: <Faq></Faq>
            },
            {
                path: '/about',
                element: <About></About>
            }

           

        ]
    }

])