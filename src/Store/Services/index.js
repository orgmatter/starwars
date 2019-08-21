import { endpoints as ENDPOINTS } from './API/Swapi';

const queriesCategories = ENDPOINTS.queries.categories;
export const fetchSearchQueries = async (data) => {
    const url = ENDPOINTS.url;
    const method = ENDPOINTS.method;
    const userQueries = data;
    
    const response = await fetch(`${url}${userQueries}`, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })

    console.log(response);
    const status = response.ok;
    const dataset = await response.json();
    return {
        dataset,
        status
    }
}

export const fetchPlanets = async () => {
    const url = ENDPOINTS.url;
    const method = ENDPOINTS.method;
    
    const response = await fetch(`${url}${queriesCategories.name[1]}/`, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })

    console.log(response);
    const status = response.ok;
    const dataset = await response.json();
    return {
        dataset,
        status
    }
}

export const fetchStarships = async () => {
    const url = ENDPOINTS.url;
    const method = ENDPOINTS.method;
    
    const response = await fetch(`${url}${queriesCategories.name[2]}/`, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })

    console.log(response);
    const status = response.ok;
    const dataset = await response.json();
    return {
        dataset,
        status
    }
}

export const fetchCharacters = async () => {
    const url = ENDPOINTS.url;
    const method = ENDPOINTS.method;
    
    const response = await fetch(`${url}${queriesCategories.name[0]}/`, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })

    console.log(response);
    const status = response.ok;
    const dataset = await response.json();
    return {
        dataset,
        status
    }
}