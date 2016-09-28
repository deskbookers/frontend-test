import React from 'react';
import { connect } from 'react-redux';

import changeCarouselSlide from '../actions/changeCarouselSlide';
import searchPlaces from '../actions/searchPlaces';
import useSuggestedQuery from '../actions/useSuggestedQuery';

import Carousel from '../components/Carousel/Carousel';

const SEARCH_SUGGESTIONS_MOCK = [
  'Amsterdam',
  'Utrecht',
  'Hague',
  'Rotterdam'
];

const mapStateToProps = (state, props) => {
  return {
    slide: state.carousel.slide,
    suggestions: SEARCH_SUGGESTIONS_MOCK,
    isLoading: state.search.isLoading,
    searchError: state.search.error,
    searchWarning: state.search.warning,
    autofillQuery: state.search.autofillQuery
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSlideChange: (slide) => dispatch(changeCarouselSlide(slide)),
    onSearchSubmit: (query) => dispatch(searchPlaces(dispatch, query)),
    onSuggestionPick: (suggestion) => dispatch(useSuggestedQuery(suggestion))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);