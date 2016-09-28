import React from 'react';
import { connect } from 'react-redux';

import searchPlaces from '../actions/searchPlaces';

import ResultsList from '../components/ResultsList/ResultsList';

let stateCache;
const PAGES_DISPLAYED = 10;

const mapStateToProps = (state, props) => {
  stateCache = state;
  
  return {
    searchPage: state.search.page,
    pagesCount: PAGES_DISPLAYED,
    isLoading: state.search.isLoading,
    places: state.search.results
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onPageChange: (page) => searchPlaces(dispatch, stateCache.search, page)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsList);