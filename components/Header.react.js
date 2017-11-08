import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Nav from './Nav.react';

import AppActions from '../actions/AppActions';

/*
|--------------------------------------------------------------------------
| Header
|--------------------------------------------------------------------------
*/

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className='header'>
                <div className='titlebar'>
                    <h1>Moodslider</h1>
                    <h2>by <img className='logo' src={'//www.sky.com/assets/masthead/images/sky-logo.png'}/></h2>
                </div>
                <Nav />
            </header>
        );
    }
}