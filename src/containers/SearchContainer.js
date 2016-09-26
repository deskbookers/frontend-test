import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeQuery, fetchPlacesIfNeeded } from '../actions/search';
import SearchForm from '../components/SearchForm/SearchForm';
// import SearchMap from '../components/SearchMap/SearchMap';
import SearchResults from '../components/SearchResults/SearchResults';

class SearchContainer extends Component {
    static propTypes = {
        query: PropTypes.string.isRequired,
        places: PropTypes.array.isRequired,
        isFetching: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
    }

    handleChange = nextQuery => {
        this.props.dispatch(changeQuery(nextQuery));
    }

    render() {
        const { query, places, isFetching } = this.props;
        return (
            <div>
                <SearchForm value={query} onSubmit={this.handleChange} />

                {isFetching && places.length === 0 &&
                    <h2>Loading...</h2>
                }

                {!isFetching && places.length === 0 &&
                    <h2>Empty.</h2>
                }

                {places.length > 0 &&
                    <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                        <SearchResults places={places} />
                    </div>
                }

            </div>
        )
    }
}


function mapStateToProps(state) {

    const { query, placesByQuery } = state.search;

    const {
        isFetching,
        items: places,
    } = placesByQuery[query] || {
        isFetching: true,
        items: [],
    }

    return {
        query,
        places,
        isFetching,
    }
}

export default connect(mapStateToProps)(SearchContainer);
