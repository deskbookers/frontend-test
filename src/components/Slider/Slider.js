import React, { PropTypes } from 'react';
import cx from 'classnames';

const glyphs = {
    left: require('../../svg/arrow-left.svg'),
    right: require('../../svg/arrow-right.svg'),
};

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

        <div className='slider__skin'>
            <div className='slider__items' style={{ transform: `translateX(-${index * 100}%)` }}>
                {items.map((slide, i) => {
                    return <div
                        key={i}
                        className={cx({
                            'slider__item': true,
                            '_active': index === i,
                        })}
                    >
                        <div
                            className='slider__item-background'
                            style={{ backgroundImage: `url(${slide.src})` }}
                        ></div>
                    </div>
                })}
            </div>

            <button className='slider__prev' onClick={() => changeSlide(-1)}>
                <svg><use xlinkHref={glyphs.left}/></svg>
            </button>
            <button className='slider__next' onClick={() => changeSlide(1)}>
                <svg><use xlinkHref={glyphs.right}/></svg>
            </button>
        </div>

    </div>;
};


Slider.propTypes = {
    index: PropTypes.number,
    items: PropTypes.array,
    onSlideChange: PropTypes.func.isRequired,
};

export default Slider;
