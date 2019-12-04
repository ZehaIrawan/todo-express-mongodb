import React, { useState } from 'react';

export const Todo = () => {
  const [formData, setFormData] = useState({
    todo: '',
  });

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { todo } = formData;

  const handleSubmit = e => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo" id="todoLabel">
          <input
            type="text"
            name="todo"
            id="todo"
            onChange={e => onChange(e)}
            value={todo}
            placeholder="Enter a task"
            required
          />
        </label>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};
