import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppActions from '../actions/AppActions';

/*
|--------------------------------------------------------------------------
| Nav
|--------------------------------------------------------------------------
*/

export default class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='navbar c-aside'>
                <ul className='o-list-block c-nav c-nav--side'>
                    <li className='u-margin-bottom-tiny'>
                        <a href='#' class='c-nav__link'>Moodslider</a>
                    </li>
                    <li className='u-margin-bottom-tiny'>
                        <a href='#' class='c-nav__link'>Upload Content</a>
                    </li>
                    <li className='u-margin-bottom-tiny'>
                        <a href='#' class='c-nav__link'>About</a>
                    </li>
                </ul>
            </div>
        );
    }
}