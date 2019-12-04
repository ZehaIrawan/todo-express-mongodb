import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../actions/todo';
import PropTypes from 'prop-types';
import {TodoItem} from './TodoItem'

const Todo = ({ todos, getTodos, loading }) => {
  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const [formData, setFormData] = useState({
    todo: '',
  });

  console.log(todos);

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { todo } = formData;

  const handleSubmit = e => {
    e.preventDefault();

    console.log(formData);
  };

  if (loading) {
    return (
      <Fragment>
        <p>Loading ...</p>
      </Fragment>
    );
  }

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

      {todos.map(todo => (
        <TodoItem key={todo.id} date={todo.date} title={todo.title} />
      ))}
    </div>
  );
};
Todo.propTypes = {
  getTodos: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos.todos,
  loading: state.todos.loading,
});

export default connect(mapStateToProps, { getTodos })(Todo);
