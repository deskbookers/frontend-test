import React, { PropTypes } from 'react';

import SearchBar from '../SearchBar/SearchBar';

import './Carousel.less';

// NOTE Static slide image mocks
import slide1 from '../../images/carousel-preview/1.jpeg';
import slide2 from '../../images/carousel-preview/2.jpg';
import slide3 from '../../images/carousel-preview/3.jpg';

// NOTE Slide generator configuration
let SLIDE_TIMEOUT_CACHE = null;
const SLIDE_AUTOMATIC_CHANGE_TIMEOUT = 5000;
const SLIDES_COUNT = 3;
const SLIDE_IMAGES = [
  slide1,
  slide2,
  slide3
];
const SLIDE_LABELS = [
  'Officebookers.',
  'Change. Explore.',
  'Find a perfect solution in a perfect place.'
];

const renderSlides = (currentSlide) => {
  return Array.apply(Array, Array(SLIDES_COUNT)).map((_, index) => {
    
    return <div 
      className="carousel__inner__slide"
      style={{
        backgroundImage: `url(${SLIDE_IMAGES[index]})`,
        left: `${((index - currentSlide) * 100)}%`
      }}
      key={index}
    >
      <div className="carousel__inner__slide__label">
        {SLIDE_LABELS[index]}
      </div>
    </div>;
  });
};

const Carousel = ({ 
  slide = 0,
  suggestions = [],
  isLoading = false,
  searchError = null,
  searchWarning = null,
  autofillQuery,
  onSlideChange,
  onSearchSubmit,
  onSuggestionPick
}) => {
  
  const changeSlide = (direction = 0) => {
    const nextSlide = slide + direction;
    
    if (nextSlide >= 0 && nextSlide < SLIDES_COUNT) {
      onSlideChange(nextSlide); 
    } else if (nextSlide < 0) {
      onSlideChange(SLIDES_COUNT - 1); 
    } else {
      onSlideChange(0); 
    }
  };

  if (SLIDE_TIMEOUT_CACHE !== null) {
    clearTimeout(SLIDE_TIMEOUT_CACHE);
  }
  SLIDE_TIMEOUT_CACHE = setTimeout(() => changeSlide(1), SLIDE_AUTOMATIC_CHANGE_TIMEOUT);
  
  return <div className="carousel">
    <div 
      className="carousel__pointer-left"
      onClick={() => changeSlide(-1)}
    ></div>
    <div className="carousel__inner">
      {renderSlides(slide)}
    </div>
    <div 
      className="carousel__pointer-right"
      onClick={() => changeSlide(1)}  
    ></div>
    <div className="carousel__search-bar">
      <SearchBar 
        suggestions={suggestions}
        isLoading={isLoading}
        error={searchError}
        warning={searchWarning}
        autofillQuery={autofillQuery}
        onSubmit={onSearchSubmit}
        onSuggestionPick={onSuggestionPick}
        onSearchSubmit={onSearchSubmit}
      />
    </div>
  </div>;
};

Carousel.propTypes = {
  slide: PropTypes.number,
  suggestions: PropTypes.array,
  isLoading: PropTypes.bool, 
  searchError: PropTypes.string,
  searchWarning: PropTypes.string,
  autofillQuery: PropTypes.string,
  onSlideChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  onSuggestionPick: PropTypes.func.isRequired
};

export default Carousel;