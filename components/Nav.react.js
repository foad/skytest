import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
                        <Link to='/' className='c-nav__link'>Moodslider</Link>
                    </li>
                    <li className='u-margin-bottom-tiny'>
                        <Link to='/upload' className='c-nav__link'>Upload Content</Link>
                    </li>
                    <li className='u-margin-bottom-tiny'>
                        <Link to='#' className='c-nav__link'>About</Link>
                    </li>
                </ul>
            </div>
        );
    }
}