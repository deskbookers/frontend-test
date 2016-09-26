import React from 'react';
import cx from 'classnames';

const Slider = ({
    index = 0,
    items = [],
    onSlideChange,
}) => {

    const slidesCount = items.length;
    const changeSlide = (direction = 0) => {

        let nextSlide = index + direction;

        if (nextSlide >= slidesCount) {
            nextSlide = 0;
        }

        if (nextSlide < 0) {
            nextSlide = slidesCount - 1;
        }

        onSlideChange(nextSlide);
    };

    return <div className='slider'>

        <div className='slider__items'>
            {items.map((slide, i) => {
                return <div
                    key={i}
                    className={cx({
                        'slider__item': true,
                        '_active': index === i,
                    })}
                    style={{ backgroundImage: `url(${slide.src})` }}
                ></div>
            })}
        </div>

        <button className='slider__prev' onClick={() => changeSlide(-1)}>prev</button>
        <button className='slider__next' onClick={() => changeSlide(1)}>next</button>

    </div>;
};


export default Slider;
