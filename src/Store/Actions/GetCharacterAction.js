import { GET_CHARACTER_SUCCESS, GET_CHARACTER_ERROR } from './types';
import { fetchCharacters } from '../Services';

export const getCharacters = () => dispatch => {

    const response = fetchCharacters();

    

    response.then(data => {
        if(data.status) {
            response.then(res => res)
            .then(result => dispatch({
                type: GET_CHARACTER_SUCCESS,
                payload: result.dataset
            }))
        }else{
            dispatch({
                type: GET_CHARACTER_ERROR,
                payload: 'no response',
            })
        }
    })    
}