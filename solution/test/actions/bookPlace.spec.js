import action from '../../src/actions/bookPlace.js';

describe('bookPlace Action', () => {
  it('should be exported as a function', () => {
    expect(action).toEqual(jasmine.any(Function));
  });
  
  it('should return a place id', () => {
    const ID = 1;
    
    expect(action(ID).placeId).toEqual(ID);
    expect(action().placeId).not.toBeDefined();
  });
});
