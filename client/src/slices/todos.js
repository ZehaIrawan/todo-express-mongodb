import { createSlice } from '@reduxjs/toolkit';
import api from '../utils/api';

export const initialState = {
  todos: [],
  todo: null,
  loading: true,
  error: {},
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodos: (state) => {
      state.loading = true;
    },
    getTodosSuccess: (state, { payload }) => {
      state.todos = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getTodosFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const {
  getTodos,
  getTodosSuccess,
  getTodosFailure,
} = todosSlice.actions;

export const TodosSelector = (state) => state.todos;
export default todosSlice.reducer;

export function fetchTodos() {
  return async (dispatch) => {
    dispatch(getTodos());

    try {
      const res = await api.get(`/todos`);

      dispatch(getTodosSuccess(res.data));
    } catch (error) {
      dispatch(getTodosFailure());
    }
  };
}
