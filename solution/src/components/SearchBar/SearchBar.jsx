import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './SearchBar.less';

const LABEL_SEARCH = 'Search';
const LABEL_LOADING = 'Loading...';
const MAX_SUGGESTIONS_VISIBLE = 5;

const SearchTooltip = ({ error, warning }) => {
  if (error) {
    return <div className="search-error">
      Error: {error}
    </div>;
  } else if (warning) {
    return <div className="search-warning">
      {warning}
    </div>; 
  }
  
  return null;
};

const renderSuggestionsList = (list, onClick) => {
  if (!list) {
    return null;
  }

  const suggestions = list
  .slice(0, MAX_SUGGESTIONS_VISIBLE)
  .map((suggestion, index) =>
    <div 
      className="search-suggestions__option"
      key={index}
      onClick={() => onClick(suggestion)}
    >
      {suggestion}
    </div>
  );
  
  return <div className="search-suggestions">
    Top Picks: {suggestions}
  </div>
};

let searchQueryCache;
const SearchBar = ({
  suggestions = [],
  isLoading = false,
  error = null,
  warning = null,
  autofillQuery,
  topPicks = [],
  onSearchSubmit,
  onSuggestionPick
}) => {
  
  const onSuggestionClick = (suggestion) => {
    onSuggestionPick(suggestion);
    searchQueryCache = undefined;
  };

  const onInputChange = ({ currentTarget }) => {
    onSuggestionPick(undefined);
    searchQueryCache = currentTarget.value;
  };
  
  const onInputKeyPress = (event) => {
    if (event.charCode === 13) {
      event.preventDefault();
      
      onSearchSubmit(searchQueryCache || autofillQuery); 
    }
  };
  
  return <div>
    <SearchTooltip error={error} warning={warning} />
    <div className="search-bar">
      <input 
        className="search-bar__input-field"
        type="text"
        placeholder="London, Amsterdam, Madrid..."
        autoFocus="true"
        disabled={isLoading}
        value={autofillQuery}
        onChange={onInputChange}
        onKeyPress={onInputKeyPress}
      />
      <div className={classNames(
          'search-bar__button', 
          { 'search-bar__button-disabled': isLoading }
        )}
        onClick={() => onSearchSubmit(searchQueryCache || autofillQuery)}
      >
        {!isLoading ? LABEL_SEARCH : LABEL_LOADING}
      </div>
    </div>
    {renderSuggestionsList(suggestions, onSuggestionClick)}
  </div>;
};

SearchBar.propTypes = {
  suggestions: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  warning: PropTypes.string,
  autofillQuery: PropTypes.string,
  topPicks: PropTypes.array,
  onSearchSubmit: PropTypes.func.isRequired,
  onSuggestionPick: PropTypes.func.isRequired
};

export default SearchBar;