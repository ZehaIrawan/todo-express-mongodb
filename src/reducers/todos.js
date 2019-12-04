import { GET_TODOS } from '../actions/types';

const initialState = {
  todos: [],
  todo: [],
  loading: true,
  error: {},
};

const todos = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TODOS:
      return { ...state, todos: payload, loading: false };
    default:
      return state;
  }
};

export default todos;
