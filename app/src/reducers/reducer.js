// Imports
import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from '../actions/actions'

// Initial State
const initialState = {
    animalPicture: 'https://images.dog.ceo/breeds/sheepdog-english/n02105641_10100.jpg',
    animalName: '',
    isFetching: false,
    error: ''
}
// Reducer
export const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_START:
            return ({
                ...state,
                animalPicture: 'https://http.cat/102',
                isFetching: true
            });
        case FETCH_SUCCESS:
            return ({
                ...state,
                animalPicture: action.payload,
                isFetching: false
            });
        case FETCH_ERROR:
            return({
                ...state,
                animalPicture: 'https://http.cat/404',
                isFetching: false,
                error: action.payload
            })
        default:
            return state;
    }
}
