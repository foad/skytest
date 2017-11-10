import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import AppActions from '../actions/AppActions';

import Header from './Header.react';
import Nav from './Nav.react';
import Videos from '../components/Videos.react';

/*
|--------------------------------------------------------------------------
| App
|--------------------------------------------------------------------------
*/

class App extends Component {

    constructor(props) {
        super(props);

        this.renderChildren = this.renderChildren.bind(this);
    }

    // Render relevant children to the route
    renderChildren() {
        const store = this.props.store;

        var index = 0;
        if (this.props.location.pathname === '/upload') index = 1;
        if (this.props.location.pathname === '/about') index = 2;

        if (this.props.children === undefined) return;
        return React.cloneElement(
            this.props.children[index], {
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
                <div className='o-container o-container--wide'>
                    <div className='o-guide-layout'>
                        <aside className='o-guide-layout__side'>
                            <Nav />
                        </aside>
                        <article className='o-guide-layout__main'>
                            <div className="o-layout">
                                { this.renderChildren() }
                            </div>
                        </article>
                    </div>
                </div>
                <div className='o-container o-container--wide'>
                    <Videos />
                </div>
            </main>
        );
    }
}

App.propTypes = {
    store: PropTypes.object,
    children: PropTypes.array,
}

function mapStateToProps(state) {
    return { store: { ...state } };
}

export default withRouter(connect(mapStateToProps)(App));
  