import {extend} from '../../utils/util.js';
import {userAdapter} from '../../adapters/adapters.js';

const AuthorizationStatus = {
  USER_AUTH: `USER_AUTH`,
  USER_NOAUTH: `USER_NOAUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.USER_NOAUTH,
  userData: {},
};

const ActionType = {
  REQUIRED_AUTH: `REQUIRED_AUTH`,
};

const ActionCreator = {
  authorizeUser: (status, userData) => ({
    type: ActionType.REQUIRED_AUTH,
    payload: status,
    payloadData: userData,
  }),
};

const Operations = {
  authorizeUser: (userData, history) => (dispatch, getState, api) => {
    return api.post(`/login`, userData)
      .then((response) => {
        dispatch(ActionCreator.authorizeUser(AuthorizationStatus.USER_AUTH, userAdapter(response.data)));
        history.push(`/`);
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
  }

  return state;
};

export {ActionType, ActionCreator, reducer, AuthorizationStatus, Operations};
