import axios from 'axios';

export const CREATE_USER = 'CREATE_USER';

// const host = 'http://159.89.34.14';

export const createUser = data => dispatch => {
  axios
    .post(`/api/register`, data)
    .then(response => {
      const token = response.data.token;
      const user = response.data.user;
      localStorage.setItem('Dragons!', token);
      dispatch({
        type: CREATE_USER,
        payload: user,
      });
    })
    .catch(err => alert('Account creation failed.  Please try again.'));
};
