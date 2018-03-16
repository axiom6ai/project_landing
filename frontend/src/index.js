import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { loadMembers, loadMembersPictures } from './actions/memberActions';

import App from './components/App';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/semantic-ui-css/semantic.min.css';
import 'font-awesome/css/font-awesome.min.css';

const store = configureStore();
store.dispatch(loadMembers());
store.dispatch(loadMembersPictures());

render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}></Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
