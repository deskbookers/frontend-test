import qs from 'qs';

export const CHANGE_QUERY = 'CHANGE_QUERY';
export const REQUEST_PLACES = 'REQUEST_PLACES';
export const RECEIVE_PLACES = 'RECEIVE_PLACES';

const defaultFilterParams = {
    type: '-',
    people: 'any',
    favorite: 0,
    pid: '',
    sw: '52.293753,4.634942',
    ne: '52.455562,5.162286',
    ids: [17201, 19640, 13692, 13691, 12136, 17938, 15292, 14886, 14885, 14884,
          14883, 15730, 15353, 15351, 15330, 15080, 17290, 15454, 15451, 15379].join(),
};

export const changeQuery = query => ({
    type: CHANGE_QUERY,
    query,
});

export const requestPlaces = query => ({
    type: REQUEST_PLACES,
    query,
});

export const receivePlaces = (query, places) => ({
    type: RECEIVE_PLACES,
    query,
    places,
});

export const fetchPlaces = query => dispatch => {
    dispatch(requestPlaces(query));

    const queryString = qs.stringify(Object.assign(defaultFilterParams, {
        q: query,
    }));

    return fetch(`https://www.deskbookers.com/nl-nl/sajax.json?${queryString}`)
        .then(response => response.json())
        .then(places => {
            dispatch(receivePlaces(query, places))
        });
};
