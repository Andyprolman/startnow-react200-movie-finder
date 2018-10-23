import { connect } from 'react-redux';
import movieSearch from './movieSearch';

function mapStoreToProps(store) {
    return {
        input: store.search.input,
        movie: store.search.movie,
        array: store.search.array,
        details: store.search.details,
    };
}

export default connect(mapStoreToProps)(movieSearch);