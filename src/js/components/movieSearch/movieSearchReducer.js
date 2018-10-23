const defaultState = {
    input: '',
    movie: '',
    array: [],
    details: [],
    
};

export default function movieSearchReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch(type){
        case 'UPDATE_INPUT': {
            return {
                ...state,
                input: payload.input
            }
        }

        case 'SEARCH_FOR_MOVIE': {
            return {
                ...state,
                movie: payload.movie
            }
        }

        case 'UPDATE_MOVIE_FULFILLED': {
            return {
                ...state,
                array: payload,

            }
        }

        case 'GET_MOVIE_DETAILS_FULFILLED': {
            console.log('payload: ', payload)
            return {
                ...state,
                details: payload,
            }
        }
        default: {
            return state;
        }

        
    }
}