const changeCarouselSlide = (slideIndex = 0) => {
  return {
    type: 'CHANGE_CAROUSEL_SLIDE',
    slideIndex
  };
};

export default changeCarouselSlide;