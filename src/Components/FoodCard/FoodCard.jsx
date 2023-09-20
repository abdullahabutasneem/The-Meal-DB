import PropTypes from 'prop-types';

const FoodCard = ({ food }) => {
    const { strMealThumb, strMeal } = food;
    return (
        <div className='flex justify-center'>
            <div className="card card-compact w-[250px] rounded-none cursor-pointer transform transition-transform duration-1000 hover:scale-120">
                <figure><img className='w-full h-[250px]' src={strMealThumb} /></figure>
                <div className="card-body">
                    <p className='text-white'>{strMeal}</p>
                </div>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    food: PropTypes.object
}

export default FoodCard;