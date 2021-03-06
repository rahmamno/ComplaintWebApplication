import { combineReducers } from 'redux';
import authReducer from './authReducer';

//we need authReducer to control the flow depend on the user authentication
 
export default combineReducers({
    auth: authReducer
});