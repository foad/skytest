import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppActions from '../actions/AppActions';

/*
|--------------------------------------------------------------------------
| Slider
|--------------------------------------------------------------------------
*/

export default class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.values.value,
        }

        this.valueChange = this.valueChange.bind(this);
        this.valueSubmit = this.valueSubmit.bind(this);
    }

    valueSubmit(event) {
        AppActions.moodslider.setSlider(this.props.index, event.target.value);
    }

    valueChange(event) {
        this.setState({value : event.target.value});
        AppActions.moodslider.setSlider(this.props.index, event.target.value);
    }

    render() {

        const values = this.props.values;

        return (
            <div className='slider'>
                <h3>{values.left}</h3>
                <input type='range' min='-1' max='1' value={this.state.value} step='0.01' onChange={this.valueChange} onMouseUp={this.valueSubmit} />
                <h3>{values.right}</h3>
            </div>
        );
    }
}