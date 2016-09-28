const DEFAULT_STATE = {
  autofillQuery: undefined,
  query: '',
  error: undefined,
  warning: undefined,
  page: 1,
  isLoading: false,
  results: undefined
};

const search = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case 'USE_SUGGESTED_QUERY':
      return Object.assign({}, state, {
        autofillQuery: action.query
      });
    case 'SEARCH_PLACES':
      return Object.assign({}, state, {
        query: action.query || state.query,
        page: action.page || DEFAULT_STATE.page,
        isLoading: true
      });
    case 'SEARCH_PLACES_SUCCESS':
      return Object.assign({}, state, {
        results: action.places,
        page: action.page || DEFAULT_STATE.page,
        warning: action.warning,
        isLoading: false
      });
      break;
    case 'SEARCH_PLACES_FAILURE':
      return Object.assign({}, state, {
        results: [],
        isLoading: false,
        error: action.error
      });
      break;
    default:
      return state;  
  };
};

export default search;
