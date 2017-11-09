// Modules
import React from 'react';
import { Route, Switch } from 'react-router';

// Actions
import AppActions from '../actions/AppActions';

// Components
import App from '../components/App.react';
import Moodslider from '../components/Moodslider.react';


const init = {

    app: () => {
        AppActions.init();
    },
    
    moodslider: () => {
        AppActions.moodslider.init();
    },

    videos: () => {
        AppActions.videos.init();
    }

};

// Router
const routes = (
    <App onEnter={init.app}>
        <Route exact path='/' component={Moodslider} onEnter={init.moodslider} />
    </App>
);


export default routes;
