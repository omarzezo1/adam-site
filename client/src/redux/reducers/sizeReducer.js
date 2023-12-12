import {CREATE_SIZE} from '../types'

const initState = {
    sizes: [],
}

const sizeReducer = (state = initState, action)=>{
    switch(action.type)
    {
        case CREATE_SIZE:
            return {sizes: action.payload}
        default:
            return state    
    }
}

export default sizeReducer