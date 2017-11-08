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
            <nav className='navbar'>
                <ul>
                    <li>Moodslider</li>
                    <li>Upload content</li>
                </ul>
            </nav>
        );
    }
}