import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../utils/api';

export const initialState = {
  todos: [],
  todo: null,
  loading: true,
  error: {},
};

export const addTodo = createAsyncThunk(
  'todos/addTodoStatus',

  async (title) => {
    const body = { title: title };
    const res = await api.post(`/todos`, body);
    return res.data
  },
);

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
    addTodoSuccess: (state) => {
      state.loading = false;
      state.hasErrors = false;
    },
  },
  extraReducers: {
    [addTodo.fulfilled]: (state, action) => {
       state.todos.push(action.payload)
    },
  },
});

export const {
  getTodos,
  getTodosSuccess,
  getTodosFailure,
  addTodoSuccess,
  addTodos,
} = todosSlice.actions;

export const TodosSelector = (state) => state.todos;

export default todosSlice.reducer;

export const fetchTodos = () => async (dispatch) => {
  dispatch(getTodos());
  try {
    const res = await api.get(`/todos`);

    dispatch(getTodosSuccess(res.data));
  } catch (error) {
    dispatch(getTodosFailure());
  }
};
