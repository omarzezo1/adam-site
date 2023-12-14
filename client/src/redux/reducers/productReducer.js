import {CREATE_PRODUCT, GET_ALL_PRODUCTS, SINGLE_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT} from '../types'


const initState = {
    products: [],
    allProducts: [],
    singleProduct: {},
    deleteProduct: [],
    editProduct: [],
}

const productReducer = (state = initState, action)=>{
    switch(action.type)
    {
        case CREATE_PRODUCT:
            return {products: action.payload}
        case GET_ALL_PRODUCTS:
            return {allProducts: action.payload}   
        case SINGLE_PRODUCT:
            return {singleProduct: action.payload}
        case DELETE_PRODUCT:
            return {deleteProduct: action.payload}
        case EDIT_PRODUCT:
            return {editProduct: action.payload}             
        default:
            return state    
    }
}

export default productReducer