import superagent from 'superagent';

const API_URL = 'https://www.deskbookers.com/nl-nl/sajax.json';
const LABEL_ERROR = 'Oops! Something went wrong. Please try again.'
const LABEL_EMPTY_LIST = 'We couldn\'t find anything for that location. Please try again.';
const MINIMIZED_OVER_THE_FOLD_VIEW_HEIGHT = '640px';
const MAXIMISED_OVER_THE_FOLD_VIEW_HEIGHT = '100%'
const OVER_THE_FOLD_ELEMENT_SELECTOR = '.over-the-fold-view';

const setOverTheFoldViewHeight = (height) => {
  if (typeof document.querySelector === 'function') {
    document.querySelector(OVER_THE_FOLD_ELEMENT_SELECTOR).style.height = height;
  }
};

const searchPlaces = (dispatch, query, page = 1) => {
  dispatch({
    type: 'SEARCH_PLACES',
    query,
    page
  });
  
  superagent.get(`${API_URL}?q=${query}&page=${page}`)
  .end((error, result) => {
    if (error) {
      setOverTheFoldViewHeight(MAXIMISED_OVER_THE_FOLD_VIEW_HEIGHT);
      dispatch({
        type: 'SEARCH_PLACES_FAILURE',
        places: [],
        page: 1,
        error: LABEL_ERROR
      });
    } else {
      let places;
      
      try {
        places = JSON.parse(result.text).rows;
      } catch (error) {
        setOverTheFoldViewHeight(MAXIMISED_OVER_THE_FOLD_VIEW_HEIGHT);
        dispatch({
          type: 'SEARCH_PLACES_FAILURE',
          places: [],
          page: 1,
          error: error.message
        });
      }
      
      if (places.length > 0) {
        setOverTheFoldViewHeight(MINIMIZED_OVER_THE_FOLD_VIEW_HEIGHT);
      } else {
        setOverTheFoldViewHeight(MAXIMISED_OVER_THE_FOLD_VIEW_HEIGHT);
      }
      dispatch({
        type: 'SEARCH_PLACES_SUCCESS',
        places,
        page,
        warning: places.length === 0 ? LABEL_EMPTY_LIST : undefined
      });
    }
  });
  
  return {
    type: 'SEARCH_PLACES',
    query,
    page
  };
};

export default searchPlaces;
