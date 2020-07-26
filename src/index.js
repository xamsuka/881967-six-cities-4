import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import App from './components/app/app.jsx';
import {reducer} from './reducers/reducer.js';
import createAPI from './api.js';
import {Operations as DataOperations} from './reducers/data/reducer.js';
import {ActionCreator as ActionCreatorUser, AuthorizationStatus} from './reducers/user/reducer.js';

const rootElement = document.querySelector(`#root`);

const api = createAPI(() => store.dispatch(ActionCreatorUser.authorizeUser(AuthorizationStatus.USER_NOAUTH)));

const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(api)));

store.dispatch(DataOperations.loadOffers());

ReactDom.render(
    <Provider store = {store}>
      <App />
    </Provider>,
    rootElement
);


