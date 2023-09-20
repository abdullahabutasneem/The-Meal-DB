import PropTypes from 'prop-types';

const LatestMealCard = ({ latestMeal }) => {
    const { strMealThumb, strMeal } = latestMeal;
    return (
        <div className='mt-5'>
            <div className="card card-compact w-[250px] rounded-none	 cursor-pointer transform transition-transform duration-1000 hover:scale-120">
                <figure><img className='w-full h-[250px]' src={strMealThumb} /></figure>
                <div className="card-body">
                    <p className='text-white'>{strMeal}</p>
                </div>
            </div>
        </div>
    );
};

LatestMealCard.propTypes = {
    latestMeal: PropTypes.object
}

export default LatestMealCard;