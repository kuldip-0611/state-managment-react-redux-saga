
import { combineReducers } from 'redux'
import { cartData } from './reducers'
import {productData} from '../redux/productReducer'
export default combineReducers({
    cartData,
    productData
   
})