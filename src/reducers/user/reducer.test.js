import {reducer, ActionCreator, AuthorizationStatus} from './reducer.js';

const status = AuthorizationStatus.USER_AUTH;
const userData = {
  id: 1,
  name: `Vlad`,
  avatarUrl: ``,
  email: `123@mail.ru`,
  isPro: true,
};

describe(`Тестирование функции reducer`, () => {
  test(`Инициализация store.`, () => {
    expect(reducer(void 0, {})).toEqual(
        {
          authorizationStatus: `USER_NOAUTH`,
          userData: {},
        }
    );
  });

  test(`Авторизация пользователя на сайте`, () => {
    expect(reducer({
      authorizationStatus: `USER_NOAUTH`,
      userData: {}
    }, {
      type: `REQUIRED_AUTH`,
      payload: AuthorizationStatus.USER_AUTH,
      payloadData: userData,
    })).toEqual(
        {
          authorizationStatus: `USER_AUTH`,
          userData,
        }
    );

  });
});

test(`Тестирование ActionCreator на возвращаемые action`, () => {
  expect(ActionCreator.authorizeUser(status, userData)).toEqual({
    type: `REQUIRED_AUTH`,
    payload: status,
    payloadData: userData,
  });
});
