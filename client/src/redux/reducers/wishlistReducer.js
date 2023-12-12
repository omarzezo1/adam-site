import { ADD_TO_WISHLIST, DELETE_FROM_WISHLIST, GET_ALL_WISHLIST } from "../types"

const initState = {
    wishlist: [],
    loggedUserWishlist: [],
    deleteWish: []
}

const wishlistReducer = (state = initState, action)=>{
    switch(action.type)
    {
        case ADD_TO_WISHLIST:
            return {wishlist: action.payload}
        case GET_ALL_WISHLIST:
            return {loggedUserWishlist: action.payload}  
        case DELETE_FROM_WISHLIST:
            return {deleteWish: action.payload}      
        default:
            return state    
    }
}

export default wishlistReducer