import LatestMeals from "../../Components/LatestMeals/LatestMeals";


const Home = () => {
    return (
        <div className="max-w-[1000px] mx-auto pt-5">
            <h1 className="text-3xl text-white font-bold text-center">Welcome to TheMealDB</h1>
            <p className="text-white font-normal text-base text-center mt-3">This is an open, crowd-sourced database of Recipes from around the world.</p>
            <div className="mt-5">
                <h2 className="text-xl text-white font-medium text-center">Latest Meal</h2>
                <LatestMeals></LatestMeals>
            </div>
        </div>
    );
};

export default Home;