import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <div className="text-white">This is About</div>
            },
            {
                path: "/categories",
                element: <div className="text-white">This is Categories</div>
            }
        ]
    },

])

export default myCreatedRoute;