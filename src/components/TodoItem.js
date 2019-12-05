import React from 'react';
import { connect } from 'react-redux';
import { editTodo } from '../actions/todo';
import Modal from './modals/Modal';
import useModal from './modals/useModal';

const TodoItem = ({ title, date, deleteTodo, id,editTodo }) => {
  const { isShowing, toggle } = useModal();

  const formData = {
    id,
    title,
    date,
  };

  const editThisTodo = () => {
    editTodo(formData);
    toggle();
  };

  return (
    <div className="container">
      <Modal isShowing={isShowing} hide={toggle} />
      <p>{title}</p>
      <p>{date}</p>
      <button
        onClick={() => {
          deleteTodo(id);
        }}
      >
        Delete
      </button>
      <button type="button" onClick={editThisTodo}>
        Edit
      </button>
    </div>
  );
};

export default connect(null, { editTodo })(TodoItem);
