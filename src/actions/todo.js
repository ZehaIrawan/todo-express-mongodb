import axios from 'axios';
import { GET_TODOS,ADD_TODO, DELETE_TODO } from './types';

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

// Delete todo
export const deleteTodo = id => async dispatch => {
  try {
    await axios.delete(`/todos/${id}`);

    dispatch({
      type: DELETE_TODO,
      payload: id,
    });

  } catch (err) {
    console.log(err);
  }
};
