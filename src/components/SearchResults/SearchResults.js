import React from 'react';
import cx from 'classnames';

const ratingShort = (rating) => {
    return rating.toFixed(2);
}

const SearchResult = ({ item }) => {
    return <a target='_blank' href={item.location_slug} className='search-result'>
        <div className='search-result__image' style={{
            backgroundImage: `url(${item.image_urls2[0]})`
        }}></div>

        <div className='search-result__description'>
            <div className='search-result__figures'>
                {item.review_count > 0 && <div className='search-result__rating'>
                    <span>{ratingShort(item.rating)} </span>
                    <small>/ {item.review_count}</small>
                </div>}
                {item.review_count > 0 && <br/>}
                <div className='search-result__price'>
                    {item.hour_price}€/hr
                </div>

            </div>
            <h3 className='search-result__name'>{item.name}</h3>
            <div className='search-result__location'>
                <span className='search-result__location-name'>{item.location_name}</span>
                <span> · </span>
                <span className='search-result__location-city'>{item.location_city}</span>
            </div>
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
