import {ADD_TO_CART, GET_CART_ITEMS, UPDATE_QTY, APPLY_COUPON, DELETE_CART_ITEMS} from "../types"


const initState = {
    cart: [],
    cartItems: [],
    updateQty: [],
    applyCoupon: [],
    deleteCartItem: []
}

const cartReducer = (state = initState, action)=>{
    switch(action.type)
    {
        case ADD_TO_CART:
            return {cart: action.payload}
        case GET_CART_ITEMS:
            return {cartItems: action.payload}
        case UPDATE_QTY:
            return {updateQty: action.payload}   
        case APPLY_COUPON:
            return {applyCoupon: action.payload}   
        case DELETE_CART_ITEMS:
            return {deleteCartItem: action.payload}          
        default:
            return state    
    }
}

export default cartReducer