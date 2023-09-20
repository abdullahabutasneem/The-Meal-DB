import { useEffect, useState } from "react";
import LatestMealCard from "../LatestMealCard/LatestMealCard";


const LatestMeals = () => {

    const [latest, setLatest] = useState([]);

    useEffect(() => {
        fetch('../../latest_meal.json')
            .then(res => res.json())
            .then(data => setLatest(data.latestMeals));
    }, []);

    console.log(latest);

    return (
        <div className="text-white text-2xl text-center">
            <div className="flex justify-center">
                <div id="hello" className="grid grid-cols-3 gap-8">
                    {
                        latest.map(latestMeal => <LatestMealCard key={latestMeal.idMeal} latestMeal={latestMeal}></LatestMealCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LatestMeals;