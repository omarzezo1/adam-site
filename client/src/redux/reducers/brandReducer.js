import {GET_ALL_BRAND, CREATE_BRAND, DELETE_BRAND} from '../types'

const initState = {
    brand: [],
    brands: [],
    deleteBrand: []
}

const categoryReducer = (state = initState, action)=>{
    switch(action.type){
        case GET_ALL_BRAND:
            return {brands: action.payload}
        case CREATE_BRAND:
            return {brands: action.payload}    
        case DELETE_BRAND:
            return {deleteBrand: action.payload}        
        default:
            return state    
    }
}

export default categoryReducer