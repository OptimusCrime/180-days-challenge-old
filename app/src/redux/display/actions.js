import {
  AUTH_TOGGLE_DISPLAY_MODAL,
  ENTRY_TOGGLE_DISPLAY_MODAL,

  UPDATE_AUTH_VALUE,
  UPDATE_ENTRY_VALUE
} from './constants';

export const toggleDisplayModalAuth = () => {
  return dispatch => dispatch({ type: AUTH_TOGGLE_DISPLAY_MODAL });
};

export const toggleDisplayModalEntry = () => {
  return dispatch => dispatch({ type: ENTRY_TOGGLE_DISPLAY_MODAL });
};

export const updateAuthValue = (value) => {
  return dispatch => dispatch({ type: UPDATE_AUTH_VALUE, value: value });
};

export const updateEntryValue = (value) => {
  return dispatch => dispatch({ type: UPDATE_ENTRY_VALUE, value: value });
};
