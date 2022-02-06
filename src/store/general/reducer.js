import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  showModal: false,
  modalContent: null,
  isModalNotClosable: false,
  isTemporaryModal: false,
  noModalEase: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
        modalContent: action.content,
        isModalNotClosable: action.isNotClosable,
        isTemporaryModal: action.isTemporaryModal,
        noModalEase: action.noModalEase,
      };

    case actionTypes.HIDE_MODAL:
      return {
        ...state,
        showModal: false,
        isTemporaryModal: false,
      };

    default:
      return state;
  }
};

export default reducer;
