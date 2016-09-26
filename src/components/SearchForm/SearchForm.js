import React from 'react';
import cx from 'classnames';

const glyphs = {
    search: require('../../svg/search.svg'),
};

const Header = () => {
    return <form className='search-form'>
        <fieldset className='search-form__fieldset'>
            <input
                className='search-form__input'
                type='text'
                value=""
                placeholder='Find place to work'
            />
            <button><svg><use xlinkHref={glyphs.right}/></svg></button>
        </fieldset>
    </form>;
};


export default Header;
