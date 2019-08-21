import { GET_STARSHIP_SUCCESS, GET_STARSHIP_ERROR } from '../../Actions/types';
import { starshipState as initialState } from '../../state';

function StarshipReducer (state = initialState, action) {
    switch(action.type) {
        case GET_STARSHIP_SUCCESS:
        return {
            ...state,
            starshipData: action.payload
        }
        case GET_STARSHIP_ERROR:
        return {
            ...state,
            status: action.payload
        }
        default: {
            return state;
        }
    }
}

export default StarshipReducer;