/*
|--------------------------------------------------------------------------
| React and Router
|--------------------------------------------------------------------------
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux';

import routes from './router/routes';
import store from './store.js';


/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

import 'font-awesome/css/font-awesome.css';
import './styles/main.scss';


/*
|--------------------------------------------------------------------------
| Render the app
|--------------------------------------------------------------------------
*/

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            { routes }
        </BrowserRouter>
    </Provider>,
    document.getElementById('wrap')
);