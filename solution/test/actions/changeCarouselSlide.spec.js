import action from '../../src/actions/changeCarouselSlide.js';

describe('changeCarouselSlide Action', () => {
  it('should be exported as a function', () => {
    expect(action).toEqual(jasmine.any(Function));
  });
  
  it('should return a slide index or default if undefined', () => {
    const INDEX = 1;
    
    expect(action(INDEX).slideIndex).toEqual(INDEX);
    expect(action().slideIndex).toEqual(0);
  });
});
