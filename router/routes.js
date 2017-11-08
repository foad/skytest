// Modules
import React from 'react';
import { Route } from 'react-router';

// Actions
import AppActions from '../actions/AppActions';

// Components
import App from '../components/App.react';


const init = {

    app: () => {
        AppActions.init();
    },

};

// Router
const routes = (
    <Route component={App} path='/' onEnter={init.app} />
);


export default routes;
