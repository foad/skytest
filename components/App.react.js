import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import AppActions from '../actions/AppActions';

import app from '../lib/app';

/*
|--------------------------------------------------------------------------
| App
|--------------------------------------------------------------------------
*/

class Moodslider extends Component {

    constructor(props) {
        super(props);

        this.renderChildren = this.renderChildren.bind(this);
    }

    renderChildren() {
        if (this.props.children === undefined) return;
        React.cloneElement(
            this.props.children, {
                app: this,
                store: store
            }
        )
    }

    render() {
        const store = this.props.store;

        return(
            <div>
                <h1>sky</h1>
                { this.renderChildren() }
            </div>
        );
    }
}

Moodslider.propTypes = {
    store: PropTypes.object,
    children: PropTypes.object,
}

function mapStateToProps(state) {
    return { store: { ...state } };
}

export default connect(mapStateToProps)(Moodslider);
  