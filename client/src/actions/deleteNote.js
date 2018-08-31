import axios from 'axios';

export const DELETE_NOTE = 'DELETE_NOTE';

// const host = 'http://159.89.34.14';

export const deleteNote = id => dispatch => {
  axios
    .delete(`/api/destroynote/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('Dragons!')}` },
    })
    .then(response => {
      console.log(response.data);
      dispatch({ type: DELETE_NOTE, payload: response.data.notes });
    })
    .catch(err => dispatch({ type: 'ERROR', payload: err }));
};
