import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FoodCard from "../../Components/FoodCard/FoodCard";


const Category = () => {
    const idCat = useParams();
    console.log("idCat: ", idCat.id);
    const [idFood, setIdFood] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${idCat.id}`)
            .then(res => res.json())
            .then(data => setIdFood(data.meals))
    }, [idCat.id]);
    console.log('idfood:', idFood);
    return (
        <div>
            <div className="grid grid-cols-4 gap-2">
                {
                    idFood.map(food =>
                        <FoodCard key={food.idMeal} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default Category;