// Imports
import { FETCH_START } from '../actions/actions'

// Initial State
const initialState = {

}
// Reducer
export const reducer = (state = initialState, action) => {
    switch (action.type){
        case(FETCH_START):
            return state;
        default:
            return state;
    }
}
