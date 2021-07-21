import { OPEN_NAVBAR, CLOSE_NAVBAR } from '../../constants/types';

const initialState = {
  isOpened: false,
};

function navbarReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_NAVBAR:
      return {
        ...state,
        isOpened: true,
      };
    case CLOSE_NAVBAR:
      return {
        ...state,
        isOpened: false,
      };
    default:
      return state;
  }
}

export default navbarReducer;
