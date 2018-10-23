import { combineReducers } from 'redux';
import movieSearchReducer from './components/movieSearch/movieSearchReducer';

const rootReducer = combineReducers({

    search: movieSearchReducer,
   
});

export default rootReducer;