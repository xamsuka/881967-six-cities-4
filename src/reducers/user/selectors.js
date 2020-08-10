import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.USER;

const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

const getUserData = (state) => {
  return state[NAME_SPACE].userData;
};

const getStatusLoadedUserAuth = (state) => {
  return state[NAME_SPACE].isLoadedUserAuth;
};

export {getAuthorizationStatus, getUserData, getStatusLoadedUserAuth};
