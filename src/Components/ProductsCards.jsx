
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ProductsCards = ({ sunglass }) => {
    
    const {image,name,id} = sunglass
    return (
        <div className=''>
            <div className="card bg-base-100 shadow-xl image-full">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p></p>
                   <Link to={`/sunglasses/${id}`}> 
                   <div className="card-actions justify-end">
                        <button className="btn btn-primary capitalize">See Details
                        <FaArrowRight></FaArrowRight>
                        </button>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

ProductsCards.propTypes = {
    sunglass: PropTypes.object,
}
export default ProductsCards;