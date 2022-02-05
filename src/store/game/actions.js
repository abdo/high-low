import * as actionTypes from './actionTypes';

import axios from 'axios';
import store from 'store/createStore';

export const drawCard = () => (dispatch) => {
  const deckId = store?.getState().game?.deckId || 'new';
  dispatch({
    type: actionTypes.DRAW_CARD,
  });
  axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw`).then(
    ({
      data: {
        deck_id: deckId,
        remaining: noOfRemainingCards,
        cards: [card],
      },
    }) => {
      dispatch({
        type: actionTypes.CARD_DRAWN,
        deckId,
        noOfRemainingCards,
        card,
      });
    },
  );
};
