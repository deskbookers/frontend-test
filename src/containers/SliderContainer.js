import React from 'react';
import { connect } from 'react-redux';
import changeSlide from '../actions/changeSlide';
import Slider from '../components/Slider/Slider';

const mapStateToProps = (state, props) => {
    return {
        index: state.slider.index,
        items: state.slider.items,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSlideChange: slide => dispatch(changeSlide(slide)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
