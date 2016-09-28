import action from '../../src/actions/searchPlaces.js';

describe('searchPlaces Action', () => {
  it('should be exported as a function', () => {
    expect(action).toEqual(jasmine.any(Function));
  });
  
  it('should return a query and a default page', () => {
    const NOOP = () => {};
    const QUERY = 'test';
    const PAGE = 1;
    
    const result = action(NOOP, QUERY, PAGE);
    
    expect(result.query).toEqual(QUERY);
    expect(result.page).toEqual(PAGE);
    
    expect(action(NOOP, QUERY).page).toEqual(1);
  });
  
  it('should throw on undefined dispatch function', () => {
    expect(() => { 
      action();
    }).toThrow(jasmine.any(Error));
  });
});
