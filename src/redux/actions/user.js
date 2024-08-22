import axios from 'axios';
import { url } from '../store';
import { loginRequest, loginSuccess, loginFail } from '../reducers/userReducer';

export const login = (email, password) => async dispatch => {
  try {
    dispatch(loginRequest());
    const { data } = await axios.post(
      `${url}/login`,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFail(error.response.data.message));
  }
};