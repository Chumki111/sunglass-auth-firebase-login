
import PropTypes from 'prop-types';
import ProductsCards from './ProductsCards';
const ShowProducts = ({sunglasses}) => {
   
    return (
        <div className="py-10">
            <h1 className="text-3xl text-center font-bold">All Categories Sunglasses </h1>
            <div className='grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-5 mt-10'>
                {  sunglasses &&
                    sunglasses?.map(sunglass=> <ProductsCards key={sunglass.id} sunglass={sunglass}></ProductsCards>)
                }
            </div>
        </div>
    );
};
ShowProducts.propTypes={
    sunglasses:PropTypes.array
}
export default ShowProducts;