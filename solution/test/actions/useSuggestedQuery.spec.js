import action from '../../src/actions/useSuggestedQuery.js';

describe('useSuggestedQuery Action', () => {
  it('should be exported as a function', () => {
    expect(action).toEqual(jasmine.any(Function));
  });
  
  it('should return a query', () => {
    const QUERY = 'test';
    
    expect(action(QUERY).query).toEqual(QUERY);
    expect(action().query).not.toBeDefined();
  });
});
