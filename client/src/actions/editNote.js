import axios from 'axios';

export const EDIT_NOTE = 'EDIT_NOTE';

// const host = 'http://159.89.34.14';

export const editNote = data => dispatch => {
  axios
    .put(`/api/updatenote`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem('Dragons!')}` },
    })
    .then(response => {
      dispatch({
        type: EDIT_NOTE,
        payload: response.data.notes,
      });
    })
    .catch(err => {
      dispatch({ type: 'ERROR', payload: err });
    });
};
