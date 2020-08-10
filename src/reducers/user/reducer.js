import {extend} from '../../utils/util.js';
import {userAdapter} from '../../adapters/adapters.js';
import {Operations as DataOperations} from '../data/reducer.js';

const AuthorizationStatus = {
  USER_AUTH: `USER_AUTH`,
  USER_NOAUTH: `USER_NOAUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.USER_NOAUTH,
  userData: {},
  isLoadedUserAuth: false,
};

const ActionType = {
  REQUIRED_AUTH: `REQUIRED_AUTH`,
  CHANGE_STATUS_LOADED_USER_AUTH: `CHANGE_STATUS_LOADED_USER_AUTH`,
};

const ActionCreator = {
  authorizeUser: (status, userData) => ({
    type: ActionType.REQUIRED_AUTH,
    payload: status,
    payloadData: userData,
  }),
  changeStatusLoadedUserAuth: (isLoaded) => ({
    type: ActionType.CHANGE_STATUS_LOADED_USER_AUTH,
    payload: isLoaded,
  }),
};

const Operations = {
  authorizeUser: (userData, history) => (dispatch, getState, api) => {
    return api.post(`/login`, userData)
      .then((response) => {
        dispatch(ActionCreator.authorizeUser(AuthorizationStatus.USER_AUTH, userAdapter(response.data)));
        dispatch(DataOperations.loadFavoriteOffers());
        dispatch(ActionCreator.changeStatusLoadedUserAuth(true));
        history.push(`/`);
      });
  },
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.authorizeUser(AuthorizationStatus.USER_AUTH, userAdapter(response.data)));
        dispatch(DataOperations.loadFavoriteOffers());
        dispatch(ActionCreator.changeStatusLoadedUserAuth(true));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTH:
      return extend(state, {
        authorizationStatus: action.payload,
        userData: action.payloadData,
      });
    case ActionType.CHANGE_STATUS_LOADED_USER_AUTH:
      return extend(state, {
        isLoadedUserAuth: action.payload,
      });
  }

  return state;
};

export {ActionType, ActionCreator, reducer, AuthorizationStatus, Operations};
