import { combineReducers } from 'redux';
import { CHANGE_QUERY, REQUEST_PLACES, RECEIVE_PLACES } from '../actions/search';

const query = (state = '', action) => {
    switch (action.type) {
        case CHANGE_QUERY:
            return action.query;
        default:
            return state;
  }
};

const places = (state = {
    isFetching: false,
    items: [],
}, action) => {
    switch (action.type) {
        case REQUEST_PLACES:
            return {
                ...state,
                isFetching: true,
            };
        case RECEIVE_PLACES:
            return {
                ...state,
                isFetching: false,
                items: action.places,
            };
        default:
            return state;
    }
};

const placesByQuery = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PLACES:
        case REQUEST_PLACES:
            return {
                ...state,
                [action.query]: places(state[action.query], action),
            };
        default:
            return state;
    }
};

export default combineReducers({
    query,
    placesByQuery,
});
