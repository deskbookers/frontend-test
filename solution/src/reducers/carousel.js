const DEFAULT_STATE = {
  slide: 0
};

const carousel = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case 'CHANGE_CAROUSEL_SLIDE':
      return Object.assign({}, state, {
        slide: action.slideIndex
      });
    default:
      return state;
  };
};

export default carousel;