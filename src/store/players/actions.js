import * as actionTypes from './actionTypes';

export const doAction =
  ({ payload }) =>
  (dispatch) => {
    dispatch({
      type: actionTypes.ACTION_TYPE,
      payload,
    });
  };
