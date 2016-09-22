import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './ResultsList.less';

// NOTE Mock capacity icon
import roomCapacityIcon from '../../images/icons/png/command.png';

// NOTE Mock placeholder image for places without preview-image defined
import carouselImagePreviw from '../../images/carousel-preview/1.jpeg';

const LABEL_LOADING = 'Loading...';
const MAX_RATING = 5;
const MAX_API_RATING = 10;
const MISSING_IMAGE_PLACEHOLDER =carouselImagePreviw;
const MAP_ENTRY_PROPERTIES = {
  'parking': () => 'Parking',
  'bus_time': value => value > 0 ? `Bus ${Math.ceil(value / 60)}min` : 'Bus',
  'highway_time': value => value > 0 ? `Highway ${Math.ceil(value / 60)}min` : 'Highway',
  'train_time': value => value > 0 ? `Train ${Math.ceil(value / 60)}min` : 'Train'
};

const LoadingShadow = ({ visible }) => {
  if (!visible) {
    return null;
  }
  
  return <div className="results-list__inner__loading-shadow"></div>;
};

const renderRatingStars = (rating = 0) => {
  const normalizedRating = ~~(MAX_RATING * (rating / MAX_API_RATING));
  
  return Array.apply(null, Array(Math.max(1, normalizedRating))).map((_, index) => 
    <span key={index}>&#11089;</span>
  );
};

const renderResultsList = (list = []) => {
  
  const getCapacityString = (min, max) => {
    return min === max ? 
      `${min}` : 
      `${min}-${max}`;
  };
  
  const renderEntryProps = (entry) => {
    return Object.keys(MAP_ENTRY_PROPERTIES).map((propMapping, index) => {
      const entryPropValue = entry[propMapping];
      const mappingFunction = MAP_ENTRY_PROPERTIES[propMapping];
      
      if (entryPropValue) {
        return <div 
          className="results-list__inner__entry__body__detailsEntry-block"
          key={index}
        >
          {mappingFunction(entryPropValue)}
        </div>;
      }
    });
  };
  
  return list.map((entry, index) => 
    <div className="results-list__inner__entry" key={index}>
      <div className="results-list__inner__entry__head">
        <img src={entry.image_urls[0] || MISSING_IMAGE_PLACEHOLDER}/>
        <div className="results-list__inner__entry__head__label-left">
          <div className="results-list__inner__entry__head__rating">
            {renderRatingStars(entry.rating)}
          </div>
        </div>
        <div className="results-list__inner__entry__head__label-right">
          <div className="results-list__inner__entry__head__label-primary">
            {entry.name}
          </div>
          <br />
          <div className="results-list__inner__entry__head__label-secondary">
            {entry.location_name}, {entry.location_city} 
          </div>
        </div>
      </div>
      <div className="results-list__inner__entry__body">
        <div>
          <div className="results-list__inner__entry__body__detailsEntry">
            {getCapacityString(entry.minimum_capacity, entry.maximum_capacity)} 
            <img src={roomCapacityIcon}/>
          </div>
          <div 
            className="results-list__inner__entry__body__detailsEntry-right results-list__inner__entry__body__detailsEntry-vital"
          >
            {`${entry.hour_price}€/hr`} 
          </div>
        </div>
        <div className="results-list__inner__entry__body__detailsList">
          {renderEntryProps(entry)}
        </div>
      </div>
      <div className="results-list__inner__entry__options">
        <div className="results-list__inner__entry__options__option-secondary">
          Rate
        </div>
        <div className="results-list__inner__entry__options__option-primary">
          Book Now
        </div>
      </div>
    </div>
  );
};

const Pager = ({ pagesCount, searchPage, onPageChange }) => {

  const movePage = (direction = 0) => {
    const nextPage = searchPage + direction;

    if (nextPage >= 1 && nextPage <= pagesCount) {
      onPageChange(searchPage + direction);
    }
  };
    
  const setPage = (page = 1) => {
    onPageChange(page);
  };
    
  return <div className="results-list__pager">
    <div 
      className="results-list__pager-left"
      onClick={() => movePage(-1)}
    ></div>
    {Array.apply(null, Array(pagesCount)).map((_, index) => 
      <div className={classNames(
          'results-list__pager__page',
           { 
             'results-list__pager__page-current': (index + 1) === searchPage
           }
        )}
        key={index}
        onClick={() => setPage(index + 1)}
      >
        {index + 1}
      </div>
    )}
    <div 
      className="results-list__pager-right"
      onClick={() => movePage(1)}
    ></div>
  </div>;
};

const ResultsList = ({ 
  places,
  isLoading,
  pagesCount,
  searchPage,
  onPageChange
}) => {
  const pager = <Pager
    pagesCount={pagesCount}
    searchPage={searchPage} 
    onPageChange={onPageChange}
  />;
  
  if (!places || places.length === 0) {
    return null; 
  }

  return <div className="results-list">
    {pager}
    <div className="results-list__inner">
      <LoadingShadow visible={isLoading} />
      {renderResultsList(places)}
    </div>
    {pager}
  </div>;
};

ResultsList.propTypes = {
  pagesCount: PropTypes.number.isRequired,
  searchPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default ResultsList;