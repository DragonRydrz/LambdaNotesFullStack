import axios from 'axios';

export const LOGIN = 'LOGIN';
export const ERROR = 'ERROR';
export const login = data => dispatch => {
  const host = '/api/login';
  console.log('/api/login', 'host');
  axios
    .post(host, data)
    .then(response => {
      const token = response.data.token;
      const user = response.data.user;
      localStorage.setItem('Dragons!', token);
      dispatch({
        type: LOGIN,
        payload: user,
      });
    })
    .catch(err => {
      alert('Login failed.  Please try again.');
    });
};
