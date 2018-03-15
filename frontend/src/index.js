import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render((
    <Router>
        <Route path="/" component={App}></Route>
    </Router>
), document.getElementById('root'));

registerServiceWorker();
