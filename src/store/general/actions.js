import * as actionTypes from './actionTypes';

import store from 'store/createStore';

const showModalAction =
  ({ content, isNotClosable, isTemporaryModal, noModalEase }) =>
  (dispatch) =>
    dispatch({
      type: actionTypes.SHOW_MODAL,
      content,
      isNotClosable,
      isTemporaryModal,
      noModalEase,
    });

export const showModal = (...parameters) =>
  store.dispatch(showModalAction(...parameters));

const hideModalAction = () => (dispatch) =>
  dispatch({
    type: actionTypes.HIDE_MODAL,
  });

export const hideModal = (...parameters) =>
  store.dispatch(hideModalAction(...parameters));
