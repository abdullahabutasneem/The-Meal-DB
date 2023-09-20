import { NavLink, Outlet } from "react-router-dom";


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
                        <ul className="flex gap-4 text-lg font-medium">
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
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;