import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import AppActions from '../actions/AppActions';

import app from '../lib/app';

import Header from './Header.react';
import Nav from './Nav.react';

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
            <main className='main app-toolkit'>
                <Header />
                <div className='c-page o-container o-container--wide'>
                    <div className='o-guide-layout'>
                        <aside className='o-guide-layout__side'>
                            <Nav />
                        </aside>
                        <article class='o-guide-layout__main'>
                            <div className="o-layout">
                                <div class="o-layout__item">
                                    <h1 class="c-heading-delta">Content</h1>
                                </div>
                                { this.renderChildren() }
                            </div>
                        </article>
                    </div>
                </div>
            </main>
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
  