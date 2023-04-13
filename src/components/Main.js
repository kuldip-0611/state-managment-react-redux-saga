import { RemoveToCart, addToCart, emptyCart } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../redux/productAction';
import ProductCard from './ProductCard';


function Main() {
    const dispatch = useDispatch();
    const product = {
        name: 'i Phone',
        category: 'mobile',
        price: 10000,
        color: 'red'
    }

    const data = useSelector((state) => state.productData)
    const handleData = () => {
        dispatch(productList(product))


    }

    return (
        <div >
            <div className='my-2'>
                <button className='btn btn-primary m-1' onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
                <button className='btn btn-danger m-1' onClick={() => dispatch(RemoveToCart(product.name))}>Remove To Cart</button>
                <button className='btn btn-success m-1' onClick={() => dispatch(emptyCart(product))}> Clear Cart</button>
                <button className='btn btn-warning m-1' onClick={handleData}> Product Listing</button>
            </div>
            <div className='row justify-content-around'>
                {
                    data.length !== 0 ? data[0].products.map(item => (<ProductCard item={item} />)) : "No Products, Perofrm Any Actions"
                }
            </div>
        </div>
    );
}

export default Main;