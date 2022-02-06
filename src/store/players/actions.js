import * as actionTypes from './actionTypes';

export const adjustPlayerInfo =
  ({ id, info }) =>
  (dispatch) => {
    dispatch({
      type: actionTypes.ADJUST_PLAYER_INFO,
      playerId: id,
      info,
    });
  };
