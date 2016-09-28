import action from '../../src/actions/ratePlace.js';

describe('ratePlace Action', () => {
  it('should be exported as a function', () => {
    expect(action).toEqual(jasmine.any(Function));
  });
  
  it('should return a rated place id', () => {
    const ID = 1;
    
    expect(action(ID).placeId).toEqual(ID);
    expect(action().placeId).not.toBeDefined();
  });
});
