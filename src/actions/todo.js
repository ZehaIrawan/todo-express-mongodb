import axios from 'axios';
import { GET_TODOS,ADD_TODO } from './types';

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

// Add Todo
export const addTodo = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/todos', formData, config);

    dispatch({
      type: ADD_TODO,
      payload: res.data,
    });
    getTodos()
  } catch (err) {
    console.log(err);
  }
};
