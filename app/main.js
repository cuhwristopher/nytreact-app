import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Routes from './routes';

let history = createBrowserHistry();

ReactDOM.render(<Router history={history}>{routes}</Router>, doucment.getElementById('app'));
