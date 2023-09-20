import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const CategoriesName = ({ categoryName }) => {
    const { strCategory } = categoryName;
    console.log(strCategory);
    return (

        <NavLink
            to={`/categories/${strCategory}`}
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : ""
            }
        >
            <div className='bg-white text-black px-3  py-1 mb-1 w-full'>
                {strCategory}
            </div >
        </NavLink>
    );
};

CategoriesName.propTypes = {
    categoryName: PropTypes.object
}

export default CategoriesName;