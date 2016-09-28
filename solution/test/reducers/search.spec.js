import search from '../../src/reducers/search.js';

describe('Search Reducer', () => {
  it('should be exported as a function', () => {
    expect(search).toEqual(jasmine.any(Function));
  });
  
  it('should return a default state on no-action', () => {    
    expect(search()).toEqual(jasmine.any(Object));
  });
  
  it('should set autofill query', () => {
    const STATE = {};
    const ACTION = {
      type: 'USE_SUGGESTED_QUERY',
      query: 'test'
    };
    
    expect(search(STATE, ACTION).autofillQuery).toEqual(ACTION.query);
  });
  
  it('should set query if query is defined', () => {
    const STATE = {};
    const ACTION = {
      type: 'SEARCH_PLACES',
      query: 'test'
    };
    
    expect(search(STATE, ACTION).query).toEqual(ACTION.query);
  });
  
  it('should set last query is query is not defined', () => {
    const STATE = {
      query: 'old-query'
    };
    const ACTION = {
      type: 'SEARCH_PLACES',
      query: undefined
    };
    
    expect(search(STATE, ACTION).query).toEqual(STATE.query);
  });
  
  it('should set page if page is defined', () => {
    const STATE = {};
    const ACTION = {
      type: 'SEARCH_PLACES',
      page: 2
    };
    
    expect(search(STATE, ACTION).page).toEqual(ACTION.page);
  });
  
  it('should set default page (1) if page is not defined', () => {
    const STATE = {};
    const ACTION = {
      type: 'SEARCH_PLACES',
      page: undefined
    };
    
    expect(search(STATE, ACTION).page).toEqual(1);
  });
  
  it('should set loading to true on search start', () => {
    const STATE = {};
    const ACTION = {
      type: 'SEARCH_PLACES'
    };
    
    expect(search(STATE, ACTION).isLoading).toEqual(true);
  });
  
  it('should set loading to false on search success', () => {
    const STATE = {};
    const ACTION = {
      type: 'SEARCH_PLACES_SUCCESS'
    };
    
    expect(search(STATE, ACTION).isLoading).toEqual(false);
  });
  
  it('should set results on search success', () => {
    const STATE = {};
    const ACTION = {
      type: 'SEARCH_PLACES_SUCCESS',
      places: [ 'Amsterdam', 'London' ]
    };
    
    expect(search(STATE, ACTION).results).toEqual(jasmine.any(Array));
  });
  
  it('should set loading to false on search failure', () => {
    const STATE = {};
    const ACTION = {
      type: 'SEARCH_PLACES_FAILURE'
    };
    
    expect(search(STATE, ACTION).isLoading).toEqual(false);
  });
  
  it('should set error on search failure', () => {
    const STATE = {};
    const ACTION = {
      type: 'SEARCH_PLACES_FAILURE',
      error: 'test'
    };
    
    expect(search(STATE, ACTION).error).toEqual(ACTION.error);
  });
  
  it('should unset results on search failure', () => {
    const STATE = {};
    const ACTION = {
      type: 'SEARCH_PLACES_FAILURE'
    };
    
    expect(search(STATE, ACTION).results).toEqual([]);
  });
});