import { createBrowserRouter } from "react-router-dom";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <div>This is home</div>
    },
    {
        path: "/about",
        element: <div>This is About</div>
    },
    {
        path: "/categories",
        element: <div>This is Categories</div>
    }
])

export default myCreatedRoute;