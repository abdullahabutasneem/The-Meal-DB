import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import CategoriesName from "./CategoriesName";


const Categories = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setCategory(data.categories))
    }, [])
    console.log("category names: ", category);
    return (
        <div className="pt-5">
            <div className="flex">
                <div>
                    <h1 className="text-white">Category Name</h1>
                    <nav className="w-[130px]">
                        <ul className="text-white">
                            {
                                category.map(categoryName =>
                                    <CategoriesName
                                        key={categoryName.idCategory}
                                        categoryName={categoryName}>

                                    </CategoriesName>)
                            }

                        </ul>
                    </nav>
                </div>
                <div className="flex-grow">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Categories;