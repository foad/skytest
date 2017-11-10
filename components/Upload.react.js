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
        this.state = {
            location: '',
        }

        this._handleSubmit = this._handleSubmit.bind(this);
        this._handleChange = this._handleChange.bind(this);
    }

    _handleSubmit(event) {
        console.log(this.state.location);
        event.preventDefault();
    }

    _handleChange(event) {
        this.setState({
            location: event.target.value,
        });
    }

    render() {
        return (
            <div className='o-layout__item'>
                <h2>Upload Content</h2>
                <form className='uploadForm' method='post' encType='multipart/form-data'>
                    <fieldset>
                        <ul className="c-form-list">
                            <li className="c-form-list__item">
                                <label className="c-form-label" htmlFor="file">
                                Choose the data file
                                </label>
                                <input type="file" className="c-form-input fileInput" name="file" id="file" accept="text/xml" onChange={this._handleChange} />
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