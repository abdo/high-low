import { combineReducers } from 'redux';
import game from 'store/game/reducer';
import players from 'store/players/reducer';

export default combineReducers({
  players,
  game,
});
