import React from 'react';
import cx from 'classnames';

const glyphs = {
    search: require('../../svg/search.svg'),
};

const SearchForm = ({ value, onChange, onSubmit, isFetching }) => {

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (isFetching) {
            return;
        }

        onSubmit(e.target.input.value);
        e.target.input.focus();
    };

    const onInputChange = ({ target }) => {
        onChange(target.value);
    };

    return <form onSubmit={onFormSubmit} className={cx({
            'search-form': true,
            _loading: isFetching,
        })}>
        <fieldset className='search-form__fieldset'>
            <input
                name='input'
                type='text'
                className={cx({
                    'search-form__input': true,
                    _disabled: isFetching,
                })}
                value={value}
                placeholder='Find place to work'
                autoComplete='off'
                onChange={onInputChange}
            />
            <button className={cx({
                'search-form__button': true,
                _disabled: !value,
            })}>
                <svg><use xlinkHref={glyphs.search}/></svg>
                <span>Search</span>
            </button>

            <span className='search-form__loading'></span>
        </fieldset>
    </form>;
};


export default SearchForm;
