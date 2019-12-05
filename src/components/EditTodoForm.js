import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateTodo } from '../actions/todo';

const EditTodoForm = ({ todo, updateTodo }) => {
  const [formData, setFormData] = useState({
    title: todo.title,
    date: todo.date,
  });

  const { title, date } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    updateTodo(todo.id, formData);
  };

  return (
    <form className="popForm" onSubmit={handleSubmit}>
      <label htmlFor="title" id="titleLabel">
        <input
          type="text"
          name="title"
          id="title"
          onChange={e => onChange(e)}
          value={title}
          placeholder="Enter a task"
          required
        />
      </label>
      <label htmlFor="date" id="dateLabel">
        <input
          type="text"
          name="date"
          id="date"
          onChange={e => onChange(e)}
          value={date}
          placeholder="Enter deadline!"
          required
        />
      </label>

      <br />
      <button type="submit">
        Submit
      </button>
    </form>
  );
};

const mapStateToProps = state => ({
  todo: state.todos.todo[0],
});

export default connect(mapStateToProps, { updateTodo })(EditTodoForm);
