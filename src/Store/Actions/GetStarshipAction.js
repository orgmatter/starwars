import { GET_STARSHIP_SUCCESS, GET_STARSHIP_ERROR } from './types';
import { fetchStarships } from '../Services';

export const getStarship = () => dispatch => {

    const response = fetchStarships();

    response.then(data => {
        if(data.status) {
            response.then(res => res)
            .then(result => dispatch({
                type: GET_STARSHIP_SUCCESS,
                payload: result.dataset
            }))
        }else{
            dispatch({
                type: GET_STARSHIP_ERROR,
                payload: 'no response',
            })
        }
    })
    
}