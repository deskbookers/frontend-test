import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeQuery, fetchPlacesIfNeeded } from '../actions/search';
import SearchForm from '../components/SearchForm/SearchForm';
// import SearchMap from '../components/SearchMap/SearchMap';
import SearchResults from '../components/SearchResults/SearchResults';

class SearchContainer extends Component {
    static propTypes = {
        query: PropTypes.string.isRequired,
        places: PropTypes.object.isRequired,
        isFetching: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
    }

    handleChange = query => {
        const { dispatch } = this.props;
        dispatch(changeQuery(query));
    }

    handleSubmit = query => {
        const { dispatch } = this.props;
        dispatch(fetchPlacesIfNeeded(query));
    }

    render() {
        const { query, places, isFetching } = this.props;
        const { rows } = places;

        return (
            <div>
                <SearchForm
                    value={query}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                />

                {isFetching && !rows &&
                    <h2>Loading...</h2>
                }

                {!isFetching && rows && rows.length === 0 &&
                    <h2>Empty.</h2>
                }

                {rows && rows.length > 0 &&
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

    const { isFetching, places } = placesByQuery[query] || {
        isFetching: false,
        places: {},
    }

    return {
        query,
        places,
        isFetching,
    }
}

export default connect(mapStateToProps)(SearchContainer);
