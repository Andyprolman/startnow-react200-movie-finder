const axios = require('axios');

export function updateInput(input) {
    return {
        type: 'UPDATE_INPUT',
        payload: { input }
    };
}

export function searchForMovie(movie) {
    return {
        type: 'SEARCH_FOR_MOVIE',
        payload: { movie }
    };
}

export function updateMovie(movie) {
    return {
        type: 'UPDATE_MOVIE',
        payload: axios.get(`api?movie=${movie}`)
                    .then(response => {
                        console.log(response.data)
                        return response.data.Search
                    })
    }
}

export function getMovieDetails(id) {
    return {
        type: 'GET_MOVIE_DETAILS',
        payload: axios.get(`details?id=${id}`)
                    .then(response => {
                    console.log(response.data)
                    return response.data
        })
    }
}