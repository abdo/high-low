import * as actionTypes from './actionTypes';

const deckSize = 52;

const INITIAL_STATE = {
  deckId: '',
  currentPlayerId: '',
  pileCards: [],
  lastDrawnCard: {},
  noOfRemainingCards: deckSize,
  noOfSuccessfulConsecutiveGuesses: 0,
  isDrawingCard: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.DRAW_CARD:
      return {
        ...state,
        isDrawingCard: true,
      };

    case actionTypes.CARD_DRAWN:
      const { deckId, noOfRemainingCards, card } = action;
      return {
        ...state,
        deckId,
        noOfRemainingCards,
        lastDrawnCard: card,
        isDrawingCard: false,
      };

    case actionTypes.PILE_DRAWN_CARD:
      return {
        ...state,
        pileCards: [...state.pileCards, state.lastDrawnCard],
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
