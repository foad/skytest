import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import AppActions from '../actions/AppActions';

import globalStore from '../store';

import Slider from './Slider.react';

/*
|--------------------------------------------------------------------------
| Moodslider
|--------------------------------------------------------------------------
*/

export default class Moodslider extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const store = globalStore.getState();

        return(
            <div className='o-layout__item'>
                <h2>Moodslider</h2>
                <div className='sliders'>
                    <Slider values={store.sliders[0]} index='0' />
                    <Slider values={store.sliders[1]} index='1' />
                    <Slider values={store.sliders[2]} index='2' />
                    <Slider values={store.sliders[3]} index='3' />
                </div>
            </div>
        );
    }
}

Moodslider.propTypes = { }