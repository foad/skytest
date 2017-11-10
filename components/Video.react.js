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

        this.getDescription = this.getDescription.bind(this);
    }

    getDescription() {
        const values = this.props.values;

        if (values.genre === "No content") {
            return (<p>{ values.genre }</p>);
        } else {
            return (<p>{values.genre} - {values.episodes}eps</p>);
        }
    }

    render() {

        const values = this.props.values;

        return (
            <div className='video' style={{ backgroundImage: 'url(' + values.img + ')' }}>
                <h3>{values.title}</h3>
                { this.getDescription() }
            </div>
        );
    }
}