import { GET_PLANET_SUCCESS, GET_PLANET_ERROR } from '../../Actions/types';
import { planetState as initialState } from '../../state';

function PlanetReducer (state = initialState, action) {
    switch(action.type) {
        case GET_PLANET_SUCCESS:
        return {
            ...state,
            planetData: action.payload
        }
        case GET_PLANET_ERROR:
        return {
            ...state,
            status: action.payload
        }
        default: {
            return state;
        }
    }
}

export default PlanetReducer;