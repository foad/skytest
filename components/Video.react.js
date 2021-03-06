import React, { Component } from 'react';
import PropTypes from 'prop-types';

import store from '../store';

import AppActions from '../actions/AppActions';

/*
|--------------------------------------------------------------------------
| Video
|--------------------------------------------------------------------------
*/

export default class Video extends Component {
    constructor(props) {
        super(props);

        // Attach subscriber to listen for slider value changes
        let currentSliders = [0, 0, 0, 0];
        store.subscribe(() => {

            // Create copies of slider values
            let previousSliders = [...currentSliders];
            currentSliders = this.getSliderValues();

            // Check if slider values have changed
            var changed = false;
            for (var i = 0; i < currentSliders.length; i++) {
                if (currentSliders[i] !== previousSliders[i]) changed = true;
            }

            if (changed) {
                // Redo recommendations with new slider values
                AppActions.videos.setRecommendations();
            }
        });

        this.getDescription = this.getDescription.bind(this);
    }

    getSliderValues() {
        // Turn slider objects in store into simple array
        var sliders = store.getState().sliders;
        var values = [];
        for (var i = 0; i < sliders.length; i++) {
            values[i] = sliders[i].value;
        }
        return values;
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