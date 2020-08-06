import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import App from './components/app/app.jsx';
import {reducer} from './reducers/reducer.js';
import createAPI from './api.js';
import {Operations as DataOperations} from './reducers/data/reducer.js';
import {ActionCreator as ActionCreatorApplication} from './reducers/application/reducer.js';
import {ActionCreator as ActionCreatorUser, AuthorizationStatus, Operations as UserOperations} from './reducers/user/reducer.js';

const rootElement = document.querySelector(`#root`);

const onUnauthorized = () => {
  store.dispatch(ActionCreatorUser.authorizeUser(AuthorizationStatus.USER_NOAUTH));
};

const noInternetConnection = () => {
  store.dispatch(ActionCreatorApplication.changeActivePreloaderOffers(true));
  store.dispatch(ActionCreatorApplication.changeDisabledFeedbackForm(true));
};

const api = createAPI(onUnauthorized, noInternetConnection);

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
));

store.dispatch(DataOperations.loadOffers());
store.dispatch(UserOperations.checkAuth());


ReactDom.render(
    <Provider store = {store}>
      <App />
    </Provider>,
    rootElement
);


