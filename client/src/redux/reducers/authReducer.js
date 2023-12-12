import { CREATE_USER, LOGIN_USER, GET_ME, LOGME_OUT } from "../types"

const initState = {
    signup: [],
    loginUser: [],
    getMe: [],
    logout: []
}

const authReducer = (state = initState, action)=>{
    switch(action.type)
    {
        case CREATE_USER:
            return {signup: action.payload}
        case LOGIN_USER:
            return {loginUser: action.payload}   
        case GET_ME:
            return {getMe: action.payload}  
        case LOGME_OUT:
            return {logout: action.payload}       
        default:
            return state    
    }
}

export default authReducer