import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import AppActions from '../actions/AppActions';

import app from '../lib/app';
import globalStore from '../store';

import Video from './Video.react';

/*
|--------------------------------------------------------------------------
| Videos
|--------------------------------------------------------------------------
*/

export default class Videos extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const store = globalStore.getState();
        
        return (
            <div className='o-layout__item'>
                <div className='videos'>
                    <Video values={store.recommendations[0]} index='0' />
                    <Video values={store.recommendations[1]} index='1' />
                    <Video values={store.recommendations[2]} index='2' />
                    <Video values={store.recommendations[3]} index='3' />
                    <Video values={store.recommendations[4]} index='4' />
                </div>
            </div>
        );
    }
}