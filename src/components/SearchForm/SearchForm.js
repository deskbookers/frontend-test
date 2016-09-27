import React from 'react';
import cx from 'classnames';

const glyphs = {
    search: require('../../svg/search.svg'),
};

const SearchForm = ({ value, onChange, onSubmit }) => {

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(e.target.input.value);
    };

    const onInputChange = ({ target }) => {
        onChange(target.value);
    };

    return <form onSubmit={onFormSubmit} className='search-form'>
        <fieldset className='search-form__fieldset'>
            <input
                name='input'
                type='text'
                className='search-form__input'
                value={value}
                placeholder='Find place to work'
                onChange={onInputChange}
            />
            <button className='search-from__button'>
                <svg><use xlinkHref={glyphs.right}/></svg>
                <span>Search</span>
            </button>
        </fieldset>
    </form>;
};


export default SearchForm;
