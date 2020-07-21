import {extend} from '../../utils/util.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.USER_NOAUTH,
};

const AuthorizationStatus = {
  USER_AUTH: `USER_AUTH`,
  USER_NOAUTH: `USER_NOAUTH`,
};

const ActionType = {
  REQUIRED_AUTH: `REQUIRED_AUTH`,
};

const ActionCreator = {
  authorizeUser: (status) => ({
    type: ActionType.REQUIRED_AUTH,
    payload: status,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTH:
      return extend(state, {
        authorizationStatus: action.payload,
      });
  }

  return state;
};

export {ActionType, ActionCreator, reducer, AuthorizationStatus};
