import * as actionTypes from './actionTypes';

import Text from 'components/lib/Text';
import axios from 'axios';
import { showModal } from 'store/general/actions';
import store from 'store/createStore';

export const drawCard =
  ({ playerId, callback }) =>
  (dispatch) => {
    dispatch({
      type: actionTypes.DRAW_CARD,
    });

    const deckId = store?.getState().game?.deckId || 'new';

    axios
      .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw`)
      .then(
        ({
          data: {
            deck_id: deckId,
            remaining: noOfRemainingCards,
            cards: [card],
          },
        }) => {
          if (typeof callback === 'function') {
            callback();
          }

          dispatch({
            type: actionTypes.CARD_DRAWN,
            deckId,
            noOfRemainingCards,
            card,
          });
        },
      )
      .catch(() => {
        showModal({
          content: <Text>An error happened, please try again</Text>,
        });
      });
  };

export const pileDrawnCard = () => (dispatch) =>
  dispatch({
    type: actionTypes.PILE_DRAWN_CARD,
  });
