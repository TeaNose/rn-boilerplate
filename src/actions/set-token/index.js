import * as ActionTypes from '_actions-types';

export const setToken = (token: ?string) => ({
  type: ActionTypes.SET_TOKEN,
  token,
});
