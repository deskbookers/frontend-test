import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer'
import SliderContainer from './SliderContainer'
import SearchContainer from './SearchContainer'

export default class Root extends Component {
    render() {
        return (
            <div className='root'>
                <HeaderContainer />
                <SliderContainer />
                <SearchContainer />
            </div>
        );
    }
}
