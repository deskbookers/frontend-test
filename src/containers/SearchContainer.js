import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeQuery, fetchPlaces } from '../actions/search';
import SearchForm from '../components/SearchForm/SearchForm';
import SearchMap from '../components/SearchMap/SearchMap';
import SearchResults from '../components/SearchResults/SearchResults';

class SearchContainer extends Component {
    static propTypes = {
        query: PropTypes.string.isRequired,
        places: PropTypes.object.isRequired,
        isFetching: PropTypes.bool.isRequired,
        onChangeInput: PropTypes.func.isRequired,
        onSubmitForm: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { query, places, isFetching, onChangeInput, onSubmitForm } = this.props;

        const { rows, bounds } = places;

        return (
            <div>

                <SearchMap places={places} />

                <SearchForm
                    value={query}
                    isFetching={isFetching}
                    onChange={onChangeInput}
                    onSubmit={onSubmitForm}
                />

                {!isFetching && rows && rows.length === 0 &&
                    <div className='search-form'>Nothing found</div>
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

const mapStateToProps = (state) => {
    return {
        isFetching: state.search.isFetching,
        query: state.search.query,
        places: state.search.places,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeInput: query => dispatch(changeQuery(query)),
        onSubmitForm: query => dispatch(fetchPlaces(query)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
