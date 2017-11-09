import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppActions from '../actions/AppActions';

/*
|--------------------------------------------------------------------------
| Upload
|--------------------------------------------------------------------------
*/

export default class Upload extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='o-layout__item'>
                <h2>Upload Content</h2>
                <form className='uploadForm'>
                    <fieldset>
                        <ul className="c-form-list">
                            <li className="c-form-list__item">
                                <label className="c-form-label" for="f-file">
                                Choose the data file
                                </label>
                                <input type="file" className="c-form-input fileInput" name="f-combo" id="f-combo" accept="text/xml" />
                            </li>
                            <li className='c-form-list__item'>
                                <button className='c-btn c-btn--primary'>Upload</button>
                            </li>
                        </ul>
                    </fieldset>
                </form>
            </div>
        );
    }
}