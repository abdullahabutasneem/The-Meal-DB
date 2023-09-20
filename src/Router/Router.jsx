import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <div>This is Home</div>
            },
            {
                path: "/about",
                element: <div>This is About</div>
            },
            {
                path: "/categories",
                element: <div>This is Categories</div>
            }
        ]
    },

])

export default myCreatedRoute;