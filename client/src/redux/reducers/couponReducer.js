import {CREATE_COUPON, GET_ALL_COUPONS, DELETE_COUPON} from '../types'

const initState = {
    coupon: [],
    coupons: [],
    deleteCoupon: []
}

const couponReducer = (state = initState, action)=>{
    switch(action.type)
    {
        case CREATE_COUPON:
            return {coupon: action.payload}
        case GET_ALL_COUPONS:
            return {coupons: action.payload} 
        case DELETE_COUPON:
            return {deleteCoupon: action.payload}       
        default:
            return state    
    }
}

export default couponReducer