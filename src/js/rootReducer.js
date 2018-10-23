import { combineReducers } from 'redux';
import movieSearchReducer from './components/MovieSearch/MovieSearchReducer';

const rootReducer = combineReducers({

    search: movieSearchReducer,
   
});

export default rootReducer;