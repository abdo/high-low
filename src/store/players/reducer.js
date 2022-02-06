import * as actionTypes from './actionTypes';
import * as gameActionTypes from '../game/actionTypes';

const numberOfPlayers = 2;

const setPlayerInitialData = ({ ...data }) => ({
  id: null,
  name: '',
  totalPoints: 0,
  latestGuess: '',
  noOfSuccessfulGuesses: 0,
  ...data,
});

const INITIAL_STATE = {
  playersInfo: Array.from({ length: numberOfPlayers }).map((_, index) =>
    setPlayerInitialData({ id: index + 1 }),
  ),
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADJUST_PLAYER_INFO:
      const newPlayersInfo = state.playersInfo.map((info) => {
        if (info.id === action.playerId) {
          return {
            ...info,
            ...action.info,
          };
        } else {
          return info;
        }
      });
      return {
        ...state,
        playersInfo: newPlayersInfo,
      };

    case gameActionTypes.CLEAR_DATA:
      return {
        ...INITIAL_STATE,
        playersInfo: state?.playersInfo?.map((info, index) =>
          setPlayerInitialData({ id: index, name: info?.name }),
        ),
      };

    default:
      return state;
  }
};

export default reducer;
