import { GET_PLANET_SUCCESS, GET_PLANET_ERROR } from './types';
import { fetchPlanets } from '../Services';

export const getPlanets = () => dispatch => {

    const response = fetchPlanets();

    response.then(data => {
        if(data.status) {
            response.then(res => res)
            .then(result => dispatch({
                type: GET_PLANET_SUCCESS,
                payload: result.dataset
            }))
        }else{
            dispatch({
                type: GET_PLANET_ERROR,
                payload: 'no response',
            })
        }
    })
    
}