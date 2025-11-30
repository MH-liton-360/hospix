import {
    createBrowserRouter,
} from "react-router-dom";



import Main from "../Layouts/Main";
import Home from "../Pages/home";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);