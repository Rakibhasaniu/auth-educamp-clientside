import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Courses from "../pages/Courses/Courses";
import Home from "../pages/Home/Home";
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
                path: '/title/:id',
                element: <Title></Title>
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>
            }

        ]
    }

])