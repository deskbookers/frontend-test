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
    places: {},
}, action) => {
    switch (action.type) {
        case REQUEST_PLACES:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_PLACES:
            return Object.assign({}, state, {
                isFetching: false,
                places: action.places,
            });
        default:
            return state;
    }
};

const placesByQuery = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PLACES:
        case REQUEST_PLACES:
            return Object.assign({}, state, {
                [action.query]: places(state[action.query], action),
            });
        default:
            return state;
    }
};

export default combineReducers({
    query,
    placesByQuery,
});
