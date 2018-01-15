import * as types from './types';

export const start = payload => ({
  type: types.START,
  payload,
});