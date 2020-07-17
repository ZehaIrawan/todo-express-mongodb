import { createSlice } from '@reduxjs/toolkit';
import api from '../utils/api'

// Slice
const slice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.auth = action.payload;
    },
    logoutSuccess: (state, action) => {
      state.user = null;
    },
  },
});

export default slice.reducer;

// Actions
const { loginSuccess, logoutSuccess } = slice.actions;

export const login = ({ email, password }) => async (dispatch) => {

  const body = { email, password };

  try {
    const res = await api.post((`/auth`),body);
    console.log(res.data);
    dispatch(loginSuccess({ email }));
  } catch (e) {
    return console.error(e.message);
  }
};

export const logout = () => async (dispatch) => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(logoutSuccess());
  } catch (e) {
    return console.error(e.message);
  }
};
