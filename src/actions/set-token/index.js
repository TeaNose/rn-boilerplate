import * as ActionTypes from '_action-types';

export const setToken = (token: ?string) => ({
  type: ActionTypes.SET_TOKEN,
  token,
});
