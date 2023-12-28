import {GET_ALL_PRODUCT_REVIEWS, CREATE_REVIEW} from '../types'

const initState = {
    review: [],
    allProductReviews: [],
}

const productReviewsReducer = (state = initState, action)=>{
    switch(action.type){
        case CREATE_REVIEW:
            return {review: action.payload}
        case GET_ALL_PRODUCT_REVIEWS:
            return {allProductReviews: action.payload}
        default:
            return state    
    }
}

export default productReviewsReducer