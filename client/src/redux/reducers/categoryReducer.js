import {GET_ALL_CATEGORY, CREATE_CATEGORY, SINGLE_CATEGORY, DELETE_CATEGORY} from '../types'

const initState = {
    categories: [],
    singleCategory: [],
    deleteCategory: [],
}

const categoryReducer = (state = initState, action)=>{
    switch(action.type){
        case GET_ALL_CATEGORY:
            return {categories: action.payload}
        case CREATE_CATEGORY:
            return {categories: action.payload}  
        case SINGLE_CATEGORY:
            return {singleCategory: action.payload}
        case DELETE_CATEGORY:
            return {deleteCategory: action.payload}              
        default:
            return state    
    }
}

export default categoryReducer