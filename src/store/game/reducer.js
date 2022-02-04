import * as actionTypes from './actionTypes';

const deckSize = 52;

const INITIAL_STATE = {
  deckId: '',
  currentPlayerId: '',
  pileCards: [],
  noOfRemainingCards: deckSize,
  noOfSuccessfulConsecutiveGuesses: 0,
  isDrawingCard: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ACTION_TYPE:
      return {
        ...state,
      };

    case actionTypes.CLEAR_DATA:
      return {
        ...INITIAL_STATE,
      };

    default:
      return state;
  }
};

export default reducer;
