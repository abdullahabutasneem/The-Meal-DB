import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="bg-orange-950 py-5 text-white">
                <header className="flex justify-between max-w-[1000px] mx-auto">
                    <div className="flex gap-1">
                        <img className="w-[25px] h-[25px]" src="../food-icon.png" alt="" />
                        <h1 className="text-lg font-bold">The Meal DB</h1>
                    </div>
                    <nav>
                        <ul className="flex gap-6 text-lg font-medium">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-slate-200 px-2 text-black" : ""
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-slate-200 px-2 text-black" : ""
                                }
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/categories"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-slate-200 px-2 text-black" : ""
                                }
                            >
                                Categories
                            </NavLink>
                        </ul>
                    </nav>
                </header>
            </div>
            <div className="min-h-screen bg-yellow-950">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;