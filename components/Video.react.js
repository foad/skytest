import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppActions from '../actions/AppActions';

/*
|--------------------------------------------------------------------------
| Video
|--------------------------------------------------------------------------
*/

export default class Video extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const values = this.props.values;

        return (
            <div className='video' style={{ backgroundImage: 'url(' + values.img + ')' }}>
                <h3>{values.title}</h3>
                <p>{values.genre}</p>
            </div>
        );
    }
}