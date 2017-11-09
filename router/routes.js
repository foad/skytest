// Modules
import React from 'react';
import { Route, Switch } from 'react-router';

// Actions
import AppActions from '../actions/AppActions';

// Components
import App from '../components/App.react';
import Moodslider from '../components/Moodslider.react';
import Upload from '../components/Upload.react';


const init = {

    app: () => {
        AppActions.init();
    },
    
    moodslider: () => {
        AppActions.moodslider.init();
    },

    videos: () => {
        AppActions.videos.init();
    },

    upload: () => {
        
    }

};

// Router
const routes = (
    <App onEnter={init.app}>
        <Switch>
            <Route exact path='/' component={Moodslider} onEnter={init.moodslider} />
            <Route path='/upload' component={Upload} onEnter={init.upload} />
        </Switch>
    </App>
);


export default routes;
