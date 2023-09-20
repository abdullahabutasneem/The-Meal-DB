import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Categories from "../Pages/Categories/Categories";
import Category from "../Pages/Categories/Category";

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
                element: <Categories></Categories>,
                children: [
                    {
                        path: '/categories/:id',
                        element: <Category></Category>
                    }
                ]
            }
        ]
    },

])

export default myCreatedRoute;