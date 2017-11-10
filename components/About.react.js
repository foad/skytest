import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppActions from '../actions/AppActions';

/*
|--------------------------------------------------------------------------
| About
|--------------------------------------------------------------------------
*/

export default class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='o-layout__item'>
                <h2>About</h2>
                <p>Developed by <a href='http://danfoad.co.uk'>Dan Foad</a></p>
                <hr className='c-divider' />
                <p>This web app uses decimal values for each mood attached to each show and a nearest-neighbour algorithm to determine which shows match the values of the sliders the closest. It also makes use of the Sky Toolkit (<a href='https://www.sky.com/toolkit/'>https://www.sky.com/toolkit/</a>)</p>
                <h3>Technologies used:</h3>
                <div className='o-layout__item u-width-1/2'>
                    Server-side
                    <ul>
                        <li>Webpack</li>
                        <li>Babel</li>
                        <li>NodeJS</li>
                        <li>Express</li>
                    </ul>
                </div>
                <div className='o-layout__item u-width-1/2'>
                    Client-side
                    <ul>
                        <li>ReactJS</li>
                        <li>Redux</li>
                        <li>xml2js</li>
                        <li>axios</li>
                    </ul>
                </div>
            </div>
        );
    }
}