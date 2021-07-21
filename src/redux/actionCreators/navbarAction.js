import { OPEN_NAVBAR, CLOSE_NAVBAR } from '../../constants/types';

export function openNavbar(navbarState) {
  return {
    type: OPEN_NAVBAR,
    payload: {
      isOpened: navbarState,
    },
  };
}

export function closeNavbar(navbarState) {
  return {
    type: CLOSE_NAVBAR,
    payload: {
      isOpened: navbarState,
    },
  };
}
