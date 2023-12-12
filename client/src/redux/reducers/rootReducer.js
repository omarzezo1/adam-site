import {combineReducers} from 'redux'
import categoryReducer from './categoryReducer'
import authReducer from './authReducer'
import brandReducer from './brandReducer'
import wishlistReducer from './wishlistReducer'
import sizeReducer from './sizeReducer'
import productReducer from './productReducer'
import cartReducer from './cartReducer'
import couponReducer from './couponReducer'
import addressReducer from './addressReducer'
import orderReducer from './orderReducer'

const rooReducer = combineReducers({
    categoryReducer: categoryReducer,
    authReducer: authReducer,
    brandReducer: brandReducer,
    wishlistReducer: wishlistReducer,
    sizeReducer: sizeReducer,
    productReducer: productReducer,
    cartReducer: cartReducer,
    couponReducer: couponReducer,
    addressReducer: addressReducer,
    orderReducer: orderReducer,
})

export default rooReducer