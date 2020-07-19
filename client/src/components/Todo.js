import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, fetchTodos, removeTodo, updateTodo } from '../slices/todos';

const Todo = () => {
  const [todo, setTodo] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  const loading = useSelector((state) => state.todos.loading);
  const todos = useSelector((state) => state.todos.todos);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h3>
        “When you talk, you are only repeating what you already know. But if you
        listen, you may learn something new.”Dalai Lama{' '}
      </h3>
      <input
        type="text"
        placeholder="What is your main focus today?"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => dispatch(addTodo(todo))}>Add todo</button>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo._id}>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() =>
                  dispatch(updateTodo(todo._id, todo.title, !todo.isCompleted))
                }
              ></input>
              <p> {todo.title}</p>
              <button onClick={() => dispatch(removeTodo(todo._id))}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
