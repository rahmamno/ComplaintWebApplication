import { 
    FETCH_USER, 
    ADMIN_LOGIN, 
    CUSTOMER_LOGIN,
    CUSTOMER_REGISTER,
    ADMIN_REGISTER
} from '../actions/actionTypes';

export default function (state = {}, action){

    console.log('action',action);

    switch(action.type){
        case FETCH_USER: 
        return action.payload || false;
        break;
        case ADMIN_LOGIN: 
        return action.payload || false;
        break;
        case CUSTOMER_LOGIN: 
        return action.payload || false;
        break;
        case CUSTOMER_REGISTER: 
        return action.payload || false;
        break;
        case ADMIN_REGISTER: 
        return action.payload || false;
        break;
        default:
            return state;
    }
}