import { combineReducers } from 'redux';
import { CHANGE_QUERY, REQUEST_PLACES, RECEIVE_PLACES } from '../actions/search';

const initialState = {
    query: '',
    isFetching: false,
    places: {},
};

const search = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_QUERY:
            return {
                ...state,
                query: action.query,
            }
        case REQUEST_PLACES:
            return {
                ...state,
                isFetching: true,
            };
        case RECEIVE_PLACES:
            return {
                ...state,
                isFetching: false,
                places: action.places,
            };
        default:
            return state;
    }
};

export default search;
