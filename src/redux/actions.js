import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./constants"

export const addToCart = (data) => {
    console.warn("action is called", data)
    return {
        type: ADD_TO_CART,
        data
    }
}
export const RemoveToCart = (data) => {
    console.warn("action is - called", data)
    return {
        type: REMOVE_TO_CART,
        data
    }
}
export const emptyCart = () => {
  
    return {
        type: EMPTY_CART,
       
    }
}