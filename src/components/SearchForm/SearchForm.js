import React from 'react';
import cx from 'classnames';

const glyphs = {
    search: require('../../svg/search.svg'),
};

const SearchForm = ({ value, onChange, onSubmit }) => {
    console.log(value);

    return <form onSubmit={onSubmit} className='search-form'>
        <fieldset className='search-form__fieldset'>
            <input
                className='search-form__input'
                type='text'
                value={value}
                onChange={onChange}
                placeholder='Find place to work'
            />
            <button className='search-from__button'>
                <svg><use xlinkHref={glyphs.right}/></svg>
                <span>Search</span>
            </button>
        </fieldset>
    </form>;
};


export default SearchForm;
