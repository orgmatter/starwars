import { GET_CHARACTER_SUCCESS, GET_CHARACTER_ERROR } from '../../Actions/types';
import { characterState as initialState } from '../../state';

function CharacterReducer (state = initialState, action) {
    switch(action.type) {
        case GET_CHARACTER_SUCCESS:
        return {
            ...state,
            characterData: action.payload
        }
        case GET_CHARACTER_ERROR:
        return {
            ...state,
            status: action.payload
        }
        default: {
            return state;
        }
    }
}

export default CharacterReducer;