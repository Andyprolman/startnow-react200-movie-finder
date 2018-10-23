import { connect } from 'react-redux';
import movieDetail from './movieDetail';

function mapStoreToProps(store) {
    return {
        details: store.search.details,
    };
}

export default connect(mapStoreToProps)(movieDetail);