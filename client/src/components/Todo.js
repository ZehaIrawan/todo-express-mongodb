import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../slices/todos';

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

  console.log(todos);

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
      <button>Add todo</button>
      {todos.map((todo) => {
        return (
          <ul key="todo.id">
            <li>{todo.title}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Todo;
