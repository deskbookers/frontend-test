// https://www.deskbookers.com/nl-nl/sajax.json?q=Amsterdam&type=-&people=any&favorite=0&pid=&sw=52.293753%2C4.634942&ne=52.455562%2C5.162286&ids=17201%2C19640%2C13692%2C13691%2C12136%2C17938%2C15292%2C14886%2C14885%2C14884%2C14883%2C15730%2C15353%2C15351%2C15330%2C15080%2C17290%2C15454%2C15451%2C15379

export const CHANGE_QUERY = 'CHANGE_QUERY';
export const REQUEST_PLACES = 'REQUEST_PLACES';
export const RECEIVE_PLACES = 'RECEIVE_PLACES';

const fetchPlacesParams = {
    type: '-',
    people: 'any',
    favorite: 0,
    pid: '',
    sw: [52.293753, 4.634942],
    ne: [52.455562, 5.162286],
    ids: [17201, 19640, 13692, 13691, 12136, 17938, 15292, 14886, 14885, 14884, 14883,
        15730, 15353, 15351, 15330, 15080, 17290, 15454, 15451, 15379],
};

export const changeQuery = query => ({
    type: CHANGE_QUERY,
    query,
});

export const requestPlaces = query => ({
    type: REQUEST_PLACES,
    query,
});

export const receivePlaces = (query, json) => ({
    type: RECEIVE_PLACES,
    query,
    places: json.data.children.map(child => child.data), // TODO
    receivedAt: Date.now(),
});

const fetchPlaces = query => dispatch => {
    dispatch(requestPlaces(query));

    return fetch('https://www.deskbookers.com/nl-nl/sajax.json', {
        method: 'get',
        params: Object.assign(fetchPlacesParams, { q: query }),
    })
        .then(response => response.json())
        .then(json => dispatch(receivePlaces(query, json)));
}

const shouldFetchPlaces = (state, query) => {
    const places = state.placesByQuery[query];

    if (!places) {
      return true;
    }

    if (places.isFetching) {
       return false;
    }
};

export const fetchPlacesIfNeeded = query => (dispatch, getState) => {
    if (shouldFetchPlaces(getState(), query)) {
        return dispatch(fetchPlaces(query));
    }
};
