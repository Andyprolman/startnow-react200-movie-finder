import { combineReducers } from 'redux';
import movieSearchReducer from './components/MovieSearch/movieSearchReducer';

const rootReducer = combineReducers({

    search: movieSearchReducer,
   
});

export default rootReducer;