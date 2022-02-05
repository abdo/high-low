import * as actionTypes from './actionTypes';

export const showModal =
  ({ content, isNotClosable, isTemporaryModal }) =>
  (dispatch) =>
    dispatch({
      type: actionTypes.SHOW_MODAL,
      content,
      isNotClosable,
      isTemporaryModal,
    });

export const hideModal = () => (dispatch) =>
  dispatch({
    type: actionTypes.HIDE_MODAL,
  });
