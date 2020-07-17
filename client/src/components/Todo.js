import React, { useState } from 'react';
import { connect } from 'react-redux';

const Todo = () => {
  const [todo, setTodo] = useState('');

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

export default connect()(Todo);
