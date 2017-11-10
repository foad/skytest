// Modules
import React from 'react';
import { Route, Switch, IndexRoute } from 'react-router-dom';

// Actions
import AppActions from '../actions/AppActions';

// Components
import App from '../components/App.react';
import Moodslider from '../components/Moodslider.react';
import Upload from '../components/Upload.react';
import About from '../components/About.react';


const init = {

    app: () => {
        AppActions.init();
    },

};

// Router
const routes = (
    <App onEnter={init.app}>
        <Route exact path='/' component={Moodslider} />
        <Route path='/upload' component={Upload} />
        <Route path='/about' component={About} />
    </App>
);


export default routes;
