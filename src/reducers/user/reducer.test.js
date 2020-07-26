import {reducer, ActionCreator, AuthorizationStatus} from './reducer.js';

describe(`Тестирование функции reducer`, () => {
  test(`Инициализация stor.`, () => {
    expect(reducer(void 0, {})).toEqual(
        {
          authorizationStatus: `USER_NOAUTH`,
        }
    );
  });

  test(`Авторизация пользователя на сайте`, () => {
    expect(reducer({
      authorizationStatus: `USER_NOAUTH`,
    }), {
      type: `REQUIRED_AUTH`,
      paylpad: AuthorizationStatus.USER_AUTH
    }).toEqual(
        {
          authorizationStatus: `USER_AUTH`,
        }
    );

  });
});

test(`Тестирование ActionCreator на возвращаемые action`, () => {
  expect(ActionCreator.authorizeUser()).toEqual({
    type: `USER_AUTH`,
    payload: AuthorizationStatus.USER_AUTH
  });
});
