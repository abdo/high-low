import * as actionTypes from './actionTypes';

export const deckSize = 52;

const INITIAL_STATE = {
  deckId: '',
  currentPlayerId: '',
  pileCards: [],
  lastDrawnCard: {},
  latestGuess: '',
  noOfRemainingCards: deckSize,
  noOfSuccessfulConsecutiveGuesses: 0,
  isDrawingCard: false,
  drawCardStart: false,
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

    case actionTypes.SET_CURRENT_PLAYER:
      return {
        ...state,
        currentPlayerId: action.playerId,
      };

    case actionTypes.DRAW_CARD_START:
      return {
        ...state,
        drawCardStart: true,
        latestGuess: action.answer,
      };

    case actionTypes.DRAW_CARD_END:
      return {
        ...state,
        drawCardStart: false,
      };

    case actionTypes.SET_SUCCESSFUL_GUESSES:
      return {
        ...state,
        noOfSuccessfulConsecutiveGuesses: action.no,
      };

    case actionTypes.UPDATE_CURRENT_PLAYER:
      return {
        ...state,
        currentPlayerId: action.playerId,
        noOfSuccessfulConsecutiveGuesses: 0,
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
