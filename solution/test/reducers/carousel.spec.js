import carousel from '../../src/reducers/carousel.js';

describe('Carousel Reducer', () => {
  it('should be exported as a function', () => {
    expect(carousel).toEqual(jasmine.any(Function));
  });
  
  it('should return a default state on no-action', () => {
    const STATE = { 
      slide: 0 
    };
    
    expect(carousel()).toEqual(STATE);
  });
  
  it('should set a slide on CHANGE_CAROUSEL_SLIDE action', () => {
    const STATE = { 
      slide: 1
    };
    const ACTION = {
      type: 'CHANGE_CAROUSEL_SLIDE',
      slideIndex: 2
    };
    
    expect(carousel(STATE, ACTION).slide).toEqual(ACTION.slideIndex);
  });
});