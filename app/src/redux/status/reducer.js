import {
  STATUS_FETCH_STARTED,
  STATUS_FETCH_FINISHED,
  STATUS_FETCH_FAILED
} from './constants';

const defaultState = {
  fetchDone: false,
  fetchStarted: false,
  fetchFinished: false,
  fetchError: false
};

const display = (state = defaultState, action) => {
  switch (action.type) {
    case STATUS_FETCH_STARTED:
      return {
        ...state,
        fetchStarted: true,
        fetchFinished: false,
        fetchError: false
      };
    case STATUS_FETCH_FINISHED:
      return {
        ...state,
        fetchDone: true,
        fetchStarted: false,
        fetchFinished: true,
        fetchError: false,
        ...action.data
      };
    case STATUS_FETCH_FAILED:
      return {
        ...state,
        fetchDone: true,
        fetchStarted: false,
        fetchFinished: false,
        fetchError: true
      };
    default:
      return state
  }
};

export default display;
