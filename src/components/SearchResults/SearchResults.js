import React from 'react';
import cx from 'classnames';

const SearchResult = ({ item }) => {
    return <a href={item.location_slug} className='search-result'>
        <div className='search-result__image' style={{
            backgroundImage: `url(${item.image_urls2[0]})`
        }}>
        </div>
        <div className='search-result__name'>{item.name}</div>
        <div className='search-result__location'>
            <span className='search-result__location-name'>{item.location_name}</span>
            <span> · </span>
            <span className='search-result__location-city'>{item.location_city}</span>
        </div>

        {item.review_count && <div className='search-result__rating'>
            {item.rating} ({item.review_count})
        </div>}

        <div className='search-result__price'>
            {item.hour_price}€/hr
        </div>
    </a>;
};

const SearchResults = ({ places }) => {
    const { rows } = places;
    return <div className='search-results'>
        {rows.map((row, i) => {
            return <SearchResult key={i} item={row} />;
        })}
    </div>;
};


export default SearchResults;
