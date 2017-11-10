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

        this._handleSubmit = this._handleSubmit.bind(this);
    }

    async _handleSubmit(event) {
        event.preventDefault();
        const file = this.refs.input.files[0];
        let result = AppActions.upload.uploadRequest(file);
        
        result.then((res) => {
            this.props.history.push('/');
        }, (err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className='o-layout__item'>
                <h2>Upload Content</h2>
                <form className='uploadForm' ref='form' onSubmit={this._handleSubmit}>
                    <fieldset>
                        <ul className="c-form-list">
                            <li className="c-form-list__item">
                                <label className="c-form-label" htmlFor="file">
                                Choose the data file
                                </label>
                                <input ref='input' type="file" className="c-form-input fileInput" name="file" id="file" accept="text/xml" onChange={this._handleChange} />
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