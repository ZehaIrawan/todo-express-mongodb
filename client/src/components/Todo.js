import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Todo = () => {
  const [todo, setTodo] = useState('');

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Redirect to="/" />;
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
      <button>Add todo</button>
    </div>
  );
};

export default Todo;
