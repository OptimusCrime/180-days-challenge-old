import {
  STATUS_FETCH_STARTED,
  STATUS_FETCH_FINISHED
} from './constants';
import {
  fetchStatusRequest
} from '../../api';

export function fetchInitialStatus() {
  return (dispatch) => {
    dispatch({ type: STATUS_FETCH_STARTED });

    fetchStatusRequest()
      .then((response) => response.json())
      .then(function(data) {
        dispatch({ type: STATUS_FETCH_FINISHED, data: data });
      });
  };
}

export function fetchUpdatedStatus() {
  return (dispatch) => {
    fetchStatusRequest()
      .then((response) => response.json())
      .then(function(data) {
        dispatch({ type: STATUS_FETCH_FINISHED, data: data });
      });
  };
}
