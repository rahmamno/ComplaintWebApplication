import axios from 'axios';
import { 
    FETCH_USER, 
    ADMIN_LOGIN, 
    CUSTOMER_LOGIN,
    CUSTOMER_REGISTER,
    ADMIN_REGISTER,
    ADD_COMPLAINT,
    UPDATE_COMPLAINT
} from './actionTypes';

export const fetchUser = () => 
    async (dispatch) => {
        const res = await axios.get('/api/currentUser')
        dispatch({
            type: FETCH_USER,
            payload: res.data
        })
    }

    export const registerAdmin = (reqBody) => 
    async (dispatch) => {
        axios.post('/api/Admin/register', reqBody)
            .then(res => dispatch({
                type: ADMIN_REGISTER,
                payload: res
            }))
    }

    export const registerCustomer = (reqBody) => 
    async (dispatch) => {
        axios.post('/api/Customer/register', reqBody)
            .then(res => dispatch({
                type: CUSTOMER_REGISTER,
                payload: res
            }))
    }

    export const loginAdmin = (reqBody) => 
    async (dispatch) => {
        axios.post('/api/Admin/login', reqBody)
            .then(res => dispatch({
                type: ADMIN_LOGIN,
                payload: res
            }))
    }

    export const loginCustomer = (reqBody) => 
    async (dispatch) => {
        axios.post('/api/Customer/login', reqBody)
            .then(res => dispatch({
                type: CUSTOMER_LOGIN,
                payload: res
            }))
    }

    export const addComplaint = (reqBody) => 
    async (dispatch) => {
        axios.post('/api/addComplaint/A', reqBody) //fix api name
            .then(res => dispatch({
                type: ADD_COMPLAINT,
                payload: res
            }))
    }

    export const updateComplaint = (reqBody) => 
    async (dispatch) => {
        axios.post('/api/updateComplaint', reqBody)
            .then(res => dispatch({
                type: UPDATE_COMPLAINT,
                payload: res
            }))
    }