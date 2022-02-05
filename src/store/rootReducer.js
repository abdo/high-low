import { combineReducers } from 'redux';
import game from 'store/game/reducer';
import general from 'store/general/reducer';
import players from 'store/players/reducer';

export default combineReducers({
  players,
  game,
  general,
});
