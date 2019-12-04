import axios from 'axios';
import { GET_TODOS } from './types';

// Get Todos
export const getTodos = () => async dispatch => {
  try {
    const res = await axios.get('/todos');

    dispatch({
      type: GET_TODOS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
