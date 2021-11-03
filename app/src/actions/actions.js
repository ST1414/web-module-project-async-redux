// Import
import axios from 'axios';

// Constants
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";


// Thunk Middleware
export const getAnimal = () => {
    return (dispatch) => {
        dispatch(fetchStart());
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                console.log('Animal: ', response.data.message);
                dispatch(fetchSuccess(response.data.message));
            }) 
            .catch(error => {
                console.log(error);
                dispatch(fetchError(error));
            })
    }
}

// Action Creators
export const fetchStart = () => {
    return ({type: FETCH_START});
}
export const fetchSuccess = (animal) => {
    return ({type: FETCH_SUCCESS, payload: animal});
}
export const fetchError = (error) => {
    return ({type: FETCH_ERROR, payload: error});
}